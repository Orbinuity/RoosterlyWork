const API_URL = "https://api.orbinuity.nl:34430/api";
const APP_IDENTIFIER = "roosterly_work";

let sessionToken = "";
let activeUsername = "";
let companyRoom = null;
let syncInterval = null;

async function requestAPI(path, method = 'GET', payload = null) {
    const headers = { 'Content-Type': 'application/json' };
    if (sessionToken) {
        headers['Authorization'] = `Bearer ${sessionToken}`;
    }
    
    const config = { method, headers };
    if (payload) {
        config.body = JSON.stringify(payload);
    }
    
    const response = await fetch(`${API_URL}${path}`, config);
    
    if (response.status === 404 && method === 'GET') return null;
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
    }
    
    return response.json();
}

async function login() {
    const userField = document.getElementById("username").value;
    const passField = document.getElementById("password").value;
    const statusBox = document.getElementById("auth-status");
    
    try {
        const result = await requestAPI('/auth/login', 'POST', { 
            identifier: userField, 
            password: passField 
        });
        
        sessionToken = result.token;
        activeUsername = userField;
        
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
        
        await initializeCompanyWorkspace();
    } catch (err) {
        statusBox.textContent = err.message;
    }
}

async function register() {
    const userField = document.getElementById("username").value;
    const passField = document.getElementById("password").value;
    const statusBox = document.getElementById("auth-status");
    
    try {
        await requestAPI('/auth/register', 'POST', {
            username: userField,
            email: `${userField}@roosterlywork.local`,
            displayName: userField,
            password: passField,
            acceptedTerms: true
        });
        statusBox.textContent = "Registration complete. You can now login.";
        statusBox.style.color = "green";
    } catch (err) {
        statusBox.textContent = err.message;
    }
}

function logout() {
    sessionToken = "";
    activeUsername = "";
    companyRoom = null;
    clearInterval(syncInterval);
    document.getElementById("app-container").style.display = "none";
    document.getElementById("auth-container").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

async function initializeCompanyWorkspace() {
    const availableRooms = await requestAPI(`/external/rooms?appId=${APP_IDENTIFIER}`);
    
    if (availableRooms && availableRooms.length > 0) {
        companyRoom = availableRooms[0];
    } else {
        companyRoom = await requestAPI('/external/rooms', 'POST', {
            name: "Main Company Planner",
            description: "RoosterlyWork Schedules and Communication",
            appId: APP_IDENTIFIER
        });
    }
    
    if (!companyRoom.cases) companyRoom.cases = [];
    
    updateViews();
    
    syncInterval = setInterval(async () => {
        const freshRooms = await requestAPI(`/external/rooms?appId=${APP_IDENTIFIER}`);
        if (freshRooms && freshRooms.length > 0) {
            const targetRoom = freshRooms.find(r => r.id === companyRoom.id);
            if (targetRoom) {
                companyRoom = targetRoom;
                if (!companyRoom.cases) companyRoom.cases = [];
                updateViews();
            }
        }
    }, 10000);
}

function switchTab(tabId) {
    const tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(`${tabId}-tab`).style.display = "block";
    updateViews();
}

function updateViews() {
    renderSchedule();
    renderChatFeed();
}

async function saveWorkspaceState() {
    await requestAPI(`/external/rooms/${companyRoom.id}`, 'PUT', {
        name: companyRoom.name,
        description: companyRoom.description,
        cases: companyRoom.cases
    });
    updateViews();
}

async function assignShift() {
    const assignedUser = document.getElementById("shift-username").value;
    const day = document.getElementById("shift-day").value;
    const hours = document.getElementById("shift-hours").value;
    const repeat = document.getElementById("shift-repeat").checked;
    
    const shiftObject = {
        id: `shift_${Date.now()}`,
        folderId: "schedule_data",
        title: `${assignedUser}|${day}|${hours}|${repeat}`,
        blocks: []
    };
    
    companyRoom.cases.push(shiftObject);
    await saveWorkspaceState();
    
    document.getElementById("shift-username").value = "";
    document.getElementById("shift-day").value = "";
    document.getElementById("shift-hours").value = "";
    document.getElementById("shift-repeat").checked = false;
}

function renderSchedule() {
    const grid = document.getElementById("schedule-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const schedules = companyRoom.cases.filter(c => c.folderId === "schedule_data");
    
    schedules.forEach(item => {
        const parts = item.title.split("|");
        const card = document.createElement("div");
        card.className = "shift-card";
        
        const boldName = document.createElement("strong");
        boldName.textContent = `User: ${parts[0]}`;
        card.appendChild(boldName);
        
        const details = document.createElement("span");
        details.textContent = `Day: ${parts[1]} - Hours: ${parts[2]} - Weekly Repeat: ${parts[3] === 'true' ? 'Yes' : 'No'}`;
        card.appendChild(details);
        
        grid.appendChild(card);
    });
}

function togglePrivateMode() {
    const mode = document.getElementById("chat-mode").value;
    const recipientInput = document.getElementById("chat-recipient");
    recipientInput.style.display = mode === "private" ? "block" : "none";
}

async function sendChatMessage() {
    const textContent = document.getElementById("chat-message").value;
    const mode = document.getElementById("chat-mode").value;
    const recipient = document.getElementById("chat-recipient").value;
    const fileInput = document.getElementById("chat-media");
    
    let mediaPayload = "";
    let mediaType = "";
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file.type.startsWith("image/")) {
            mediaPayload = await processImage(file);
            mediaType = "image";
        } else if (file.type.startsWith("video/")) {
            mediaPayload = await processVideo(file);
            mediaType = "video";
        }
    }
    
    let targetFolder = "chat_public";
    if (mode === "private") {
        const sortedUsers = [activeUsername, recipient].sort().join("_");
        targetFolder = `chat_private_${sortedUsers}`;
    }
    
    const messageObject = {
        id: `msg_${Date.now()}`,
        folderId: targetFolder,
        title: `${activeUsername}: ${textContent}`,
        blocks: [{ type: mediaType, content: mediaPayload }]
    };
    
    companyRoom.cases.push(messageObject);
    await saveWorkspaceState();
    
    document.getElementById("chat-message").value = "";
    fileInput.value = "";
}

function renderChatFeed() {
    const feed = document.getElementById("chat-feed");
    if (!feed) return;
    feed.innerHTML = "";
    
    const mode = document.getElementById("chat-mode").value;
    let targetFolder = "chat_public";
    
    if (mode === "private") {
        const recipient = document.getElementById("chat-recipient").value;
        if (!recipient) return;
        const sortedUsers = [activeUsername, recipient].sort().join("_");
        targetFolder = `chat_private_${sortedUsers}`;
    }
    
    const messages = companyRoom.cases.filter(c => c.folderId === targetFolder);
    
    messages.forEach(msg => {
        const msgDiv = document.createElement("div");
        msgDiv.className = "chat-message";
        msgDiv.textContent = msg.title;
        
        if (msg.blocks && msg.blocks.length > 0) {
            const block = msg.blocks[0];
            if (block.type === "image" && block.content) {
                const img = document.createElement("img");
                img.src = block.content;
                msgDiv.appendChild(img);
            } else if (block.type === "video" && block.content) {
                const vid = document.createElement("video");
                vid.src = block.content;
                vid.controls = true;
                msgDiv.appendChild(vid);
            }
        }
        
        feed.appendChild(msgDiv);
    });
    
    feed.scrollTop = feed.scrollHeight;
}

function calculateEarnings() {
    const rateInput = document.getElementById("hourly-rate").value;
    const rate = parseFloat(rateInput) || 0;
    
    const schedules = companyRoom.cases.filter(c => c.folderId === "schedule_data");
    let totalHours = 0;
    
    schedules.forEach(item => {
        const parts = item.title.split("|");
        if (parts[0] === activeUsername) {
            totalHours += parseFloat(parts[2]) || 0;
        }
    });
    
    const totalPay = totalHours * rate;
    document.getElementById("earnings-display").textContent = 
        `Week Total: ${totalHours} Hours - Expected Earnings: $${totalPay.toFixed(2)}`;
}

async function addRoomMember() {
    const newMember = document.getElementById("new-member-username").value;
    if (!newMember) return;
    
    await requestAPI(`/external/rooms/${companyRoom.id}/members`, 'POST', {
        username: newMember
    });
    
    document.getElementById("new-member-username").value = "";
    alert("User successfully added to company planner.");
}

function processImage(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                if (width > 800) {
                    height = Math.round((height * 800) / width);
                    width = 800;
                }
                if (height > 800) {
                    width = Math.round((width * 800) / height);
                    height = 800;
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.7));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function processVideo(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            resolve(e.target.result);
        };
        reader.readAsDataURL(file);
    });
}