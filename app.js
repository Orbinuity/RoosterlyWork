const API_BASE = 'https://api.orbinuity.nl:34430/api';
const APP_KEY = 'roosterlywork';

let currentUser = null;
let currentRoomId = null;
let rooms = [];
let localData = {
  personal: {
    hourlyRate: 0,
    timeLogs: []
  },
  roomState: {
    shifts: [],
    messages: []
  }
};

let currentWeekStart = getMonday(new Date());

const elements = {
  authContainer: document.getElementById('auth-container'),
  appContainer: document.getElementById('app-container'),
  loginForm: document.getElementById('login-form'),
  registerForm: document.getElementById('register-form'),
  tfaForm: document.getElementById('tfa-form'),
  authError: document.getElementById('auth-error'),
  showRegister: document.getElementById('show-register'),
  showLogin: document.getElementById('show-login'),
  
  workspaceSelect: document.getElementById('workspace-select'),
  btnCreateWorkspace: document.getElementById('btn-create-workspace'),
  currentUserDisplay: document.getElementById('current-user-display'),
  btnLogout: document.getElementById('btn-logout'),
  navLinks: document.querySelectorAll('.nav-links li'),
  views: document.querySelectorAll('.view'),
  
  scheduleRoleBadge: document.getElementById('schedule-role-badge'),
  btnAddShift: document.getElementById('btn-add-shift'),
  currentWeekDisplay: document.getElementById('current-week-display'),
  btnPrevWeek: document.getElementById('btn-prev-week'),
  btnNextWeek: document.getElementById('btn-next-week'),
  calendarGrid: document.getElementById('calendar-grid'),
  
  chatMessages: document.getElementById('chat-messages'),
  chatForm: document.getElementById('chat-form'),
  chatInput: document.getElementById('chat-input'),
  chatImageUpload: document.getElementById('chat-image-upload'),
  
  hourlyRateInput: document.getElementById('hourly-rate-input'),
  btnSaveRate: document.getElementById('btn-save-rate'),
  weekHours: document.getElementById('week-hours'),
  weekEarnings: document.getElementById('week-earnings'),
  monthHours: document.getElementById('month-hours'),
  monthEarnings: document.getElementById('month-earnings'),
  logHoursForm: document.getElementById('log-hours-form'),
  logDate: document.getElementById('log-date'),
  logDuration: document.getElementById('log-duration'),
  hoursLogList: document.getElementById('hours-log-list'),
  
  adminSettings: document.getElementById('admin-settings'),
  nonAdminSettings: document.getElementById('non-admin-settings'),
  inviteForm: document.getElementById('invite-form'),
  inviteUsername: document.getElementById('invite-username'),
  memberList: document.getElementById('member-list'),
  
  modalCreateWorkspace: document.getElementById('modal-create-workspace'),
  createWorkspaceForm: document.getElementById('create-workspace-form'),
  workspaceName: document.getElementById('workspace-name'),
  workspaceDesc: document.getElementById('workspace-desc'),
  
  modalAddShift: document.getElementById('modal-add-shift'),
  addShiftForm: document.getElementById('add-shift-form'),
  shiftUser: document.getElementById('shift-user'),
  shiftDate: document.getElementById('shift-date'),
  shiftTime: document.getElementById('shift-time'),
  shiftRepeat: document.getElementById('shift-repeat'),
  
  closeModals: document.querySelectorAll('.close-modal')
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

function getMonday(d) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

function formatISODate(date) {
  return date.toISOString().split('T')[0];
}

function showAuthError(msg) {
  elements.authError.textContent = msg;
}

async function apiCall(endpoint, method = 'GET', body = null) {
  const token = getCookie('roosterly_token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, options);
    if (res.status === 404 && method === 'GET') return null;
    if (res.status === 401) {
      handleLogout();
      throw new Error('Unauthorized');
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
}

elements.showRegister.addEventListener('click', () => {
  elements.loginForm.classList.remove('active');
  elements.registerForm.classList.add('active');
  showAuthError('');
});

elements.showLogin.addEventListener('click', () => {
  elements.registerForm.classList.remove('active');
  elements.loginForm.classList.add('active');
  showAuthError('');
});

elements.registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    username: document.getElementById('reg-username').value,
    email: document.getElementById('reg-email').value,
    displayName: document.getElementById('reg-displayname').value,
    password: document.getElementById('reg-password').value,
    acceptedTerms: true
  };

  try {
    await apiCall('/auth/register', 'POST', payload);
    elements.registerForm.classList.remove('active');
    elements.loginForm.classList.add('active');
    showAuthError('Registration successful. Verify email to login.');
  } catch (err) {
    showAuthError(err.message);
  }
});

let tempUserId = null;

elements.loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const identifier = document.getElementById('login-identifier').value;
  const password = document.getElementById('login-password').value;

  try {
    const data = await apiCall('/auth/login', 'POST', { identifier, password });
    if (data.requiresTwoFactor) {
      tempUserId = data.userId;
      elements.loginForm.classList.remove('active');
      elements.tfaForm.classList.add('active');
    } else {
      setCookie('roosterly_token', data.token, 7);
      initializeApp();
    }
  } catch (err) {
    showAuthError(err.message);
  }
});

elements.tfaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const code = document.getElementById('tfa-code').value;
  try {
    const data = await apiCall('/auth/login/2fa', 'POST', { userId: tempUserId, code });
    setCookie('roosterly_token', data.token, 7);
    initializeApp();
  } catch (err) {
    showAuthError(err.message);
  }
});

function handleLogout() {
  deleteCookie('roosterly_token');
  elements.appContainer.classList.remove('active');
  elements.authContainer.classList.add('active');
  elements.loginForm.classList.add('active');
  elements.tfaForm.classList.remove('active');
  elements.registerForm.classList.remove('active');
  tempUserId = null;
  currentUser = null;
  rooms = [];
}

elements.btnLogout.addEventListener('click', handleLogout);

async function initializeApp() {
  try {
    currentUser = await apiCall('/account/me');
    elements.authContainer.classList.remove('active');
    elements.appContainer.classList.add('active');
    elements.currentUserDisplay.textContent = currentUser.displayName;
    
    await pullPersonalData();
    await pullRooms();
    
    if (rooms.length > 0) {
      selectRoom(rooms[0].roomId);
    } else {
      renderEmptyState();
    }
    
    setInterval(autoSync, 10000);
    renderEarnings();
  } catch (err) {
    handleLogout();
  }
}

async function pullPersonalData() {
  const data = await apiCall(`/external/${APP_KEY}`);
  if (data && data.data) {
    localData.personal = { ...localData.personal, ...data.data };
  }
}

async function pushPersonalData() {
  await apiCall(`/external/${APP_KEY}`, 'PUT', localData.personal);
}

async function pullRooms() {
  rooms = await apiCall(`/external/rooms?appId=${APP_KEY}`);
  elements.workspaceSelect.innerHTML = '';
  rooms.forEach(room => {
    const opt = document.createElement('option');
    opt.value = room.roomId;
    opt.textContent = room.name;
    elements.workspaceSelect.appendChild(opt);
  });
  if (currentRoomId) elements.workspaceSelect.value = currentRoomId;
}

elements.workspaceSelect.addEventListener('change', (e) => {
  selectRoom(e.target.value);
});

function selectRoom(roomId) {
  currentRoomId = roomId;
  const room = rooms.find(r => r.roomId === roomId);
  if (!room) return;
  
  if (room.cases && room.cases.length > 0) {
    localData.roomState = JSON.parse(room.cases[0].blocks[0] || '{"shifts":[],"messages":[]}');
  } else {
    localData.roomState = { shifts: [], messages: [] };
  }
  
  updateRoleUI(room);
  renderSchedule();
  renderChat();
  renderSettings(room);
}

function updateRoleUI(room) {
  const isHost = room.hostId === currentUser.id;
  elements.scheduleRoleBadge.textContent = isHost ? 'Admin' : 'Member';
  
  if (isHost) {
    elements.btnAddShift.classList.remove('hidden');
    elements.adminSettings.classList.remove('hidden');
    elements.nonAdminSettings.classList.add('hidden');
    populateShiftUserSelect(room);
  } else {
    elements.btnAddShift.classList.add('hidden');
    elements.adminSettings.classList.add('hidden');
    elements.nonAdminSettings.classList.remove('hidden');
  }
}

async function pushRoomData() {
  if (!currentRoomId) return;
  const room = rooms.find(r => r.roomId === currentRoomId);
  if (!room) return;

  const cases = [{
    id: `data_${currentRoomId}`,
    folderId: currentRoomId,
    title: 'WorkspaceState',
    blocks: [JSON.stringify(localData.roomState)]
  }];

  await apiCall(`/external/rooms/${currentRoomId}`, 'PUT', {
    name: room.name,
    description: room.description,
    cases
  });
}

async function autoSync() {
  if (!currentUser) return;
  await pullRooms();
  if (currentRoomId) selectRoom(currentRoomId);
}

elements.navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    elements.navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
    
    elements.views.forEach(v => v.classList.remove('active'));
    const target = e.target.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

elements.btnCreateWorkspace.addEventListener('click', () => {
  elements.modalCreateWorkspace.classList.add('active');
});

elements.closeModals.forEach(btn => {
  btn.addEventListener('click', () => {
    elements.modalCreateWorkspace.classList.remove('active');
    elements.modalAddShift.classList.remove('active');
  });
});

elements.createWorkspaceForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    name: elements.workspaceName.value,
    description: elements.workspaceDesc.value,
    appId: APP_KEY
  };
  try {
    const newRoom = await apiCall('/external/rooms', 'POST', payload);
    elements.modalCreateWorkspace.classList.remove('active');
    elements.createWorkspaceForm.reset();
    await pullRooms();
    selectRoom(newRoom.roomId);
  } catch (err) {
    console.error(err);
  }
});

function renderSchedule() {
  elements.calendarGrid.innerHTML = '';
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const weekEnd = new Date(currentWeekStart);
  weekEnd.setDate(currentWeekStart.getDate() + 6);
  
  elements.currentWeekDisplay.textContent = `${currentWeekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;

  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(currentWeekStart);
    currentDay.setDate(currentWeekStart.getDate() + i);
    const dateStr = formatISODate(currentDay);
    
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    
    const header = document.createElement('div');
    header.className = 'day-header';
    header.textContent = `${days[i]} ${currentDay.getDate()}`;
    dayDiv.appendChild(header);

    const dayShifts = localData.roomState.shifts.filter(s => {
      if (s.repeat) {
        const shiftDate = new Date(s.date);
        return shiftDate.getDay() === currentDay.getDay() && shiftDate <= currentDay;
      }
      return s.date === dateStr;
    });

    dayShifts.forEach(shift => {
      const card = document.createElement('div');
      card.className = 'shift-card';
      card.innerHTML = `<strong>${shift.username}</strong><br>${shift.time}`;
      dayDiv.appendChild(card);
    });

    elements.calendarGrid.appendChild(dayDiv);
  }
}

elements.btnPrevWeek.addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  renderSchedule();
});

elements.btnNextWeek.addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  renderSchedule();
});

elements.btnAddShift.addEventListener('click', () => {
  elements.modalAddShift.classList.add('active');
});

function populateShiftUserSelect(room) {
  elements.shiftUser.innerHTML = '';
  room.members.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.username;
    opt.textContent = m.displayName;
    elements.shiftUser.appendChild(opt);
  });
}

elements.addShiftForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const shift = {
    id: Date.now().toString(),
    username: elements.shiftUser.value,
    date: elements.shiftDate.value,
    time: elements.shiftTime.value,
    repeat: elements.shiftRepeat.checked
  };
  
  localData.roomState.shifts.push(shift);
  await pushRoomData();
  
  elements.modalAddShift.classList.remove('active');
  elements.addShiftForm.reset();
  renderSchedule();
});

function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.7) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderChat() {
  elements.chatMessages.innerHTML = '';
  localData.roomState.messages.forEach(msg => {
    const wrapper = document.createElement('div');
    wrapper.className = `chat-msg ${msg.userId === currentUser.id ? 'self' : ''}`;
    
    const author = document.createElement('span');
    author.className = 'msg-author';
    author.textContent = msg.author;
    
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = msg.text;
    
    wrapper.appendChild(author);
    wrapper.appendChild(bubble);
    
    if (msg.image) {
      const img = document.createElement('img');
      img.src = msg.image;
      img.className = 'msg-image';
      bubble.appendChild(img);
    }
    
    elements.chatMessages.appendChild(wrapper);
  });
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

elements.chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = elements.chatInput.value.trim();
  const file = elements.chatImageUpload.files[0];
  
  if (!text && !file) return;

  const msg = {
    id: Date.now().toString(),
    userId: currentUser.id,
    author: currentUser.displayName,
    text: text,
    timestamp: new Date().toISOString()
  };

  if (file) {
    msg.image = await compressImage(file);
  }

  localData.roomState.messages.push(msg);
  await pushRoomData();
  
  elements.chatForm.reset();
  renderChat();
});

elements.btnSaveRate.addEventListener('click', async () => {
  localData.personal.hourlyRate = parseFloat(elements.hourlyRateInput.value) || 0;
  await pushPersonalData();
  renderEarnings();
});

elements.logHoursForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const log = {
    id: Date.now().toString(),
    date: elements.logDate.value,
    duration: parseFloat(elements.logDuration.value)
  };
  
  if (!localData.personal.timeLogs) localData.personal.timeLogs = [];
  localData.personal.timeLogs.push(log);
  
  await pushPersonalData();
  elements.logHoursForm.reset();
  renderEarnings();
});

function renderEarnings() {
  elements.hourlyRateInput.value = localData.personal.hourlyRate || '';
  elements.hoursLogList.innerHTML = '';
  
  const logs = localData.personal.timeLogs || [];
  const now = new Date();
  const weekStart = getMonday(now);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  let wHours = 0;
  let mHours = 0;
  
  logs.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(log => {
    const d = new Date(log.date);
    if (d >= weekStart) wHours += log.duration;
    if (d >= monthStart) mHours += log.duration;
    
    const li = document.createElement('li');
    li.className = 'log-item';
    li.innerHTML = `<span>${log.date}</span> <strong>${log.duration} hrs</strong>`;
    elements.hoursLogList.appendChild(li);
  });
  
  const rate = localData.personal.hourlyRate || 0;
  
  elements.weekHours.textContent = `${wHours} hrs`;
  elements.weekEarnings.textContent = `$${(wHours * rate).toFixed(2)}`;
  
  elements.monthHours.textContent = `${mHours} hrs`;
  elements.monthEarnings.textContent = `$${(mHours * rate).toFixed(2)}`;
}

function renderSettings(room) {
  elements.memberList.innerHTML = '';
  room.members.forEach(m => {
    const li = document.createElement('li');
    li.className = 'log-item';
    
    const info = document.createElement('span');
    info.textContent = `${m.displayName} (@${m.username})`;
    li.appendChild(info);
    
    if (room.hostId === currentUser.id && m.userId !== currentUser.id) {
      const btn = document.createElement('button');
      btn.className = 'btn-secondary';
      btn.textContent = 'Remove';
      btn.onclick = () => removeMember(room.roomId, m.userId);
      li.appendChild(btn);
    }
    
    elements.memberList.appendChild(li);
  });
}

elements.inviteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = elements.inviteUsername.value;
  try {
    await apiCall(`/external/rooms/${currentRoomId}/members`, 'POST', { username });
    elements.inviteUsername.value = '';
    await pullRooms();
    selectRoom(currentRoomId);
  } catch (err) {
    console.error(err);
  }
});

async function removeMember(roomId, userId) {
  try {
    await apiCall(`/external/rooms/${roomId}/members/${userId}`, 'DELETE');
    await pullRooms();
    selectRoom(currentRoomId);
  } catch (err) {
    console.error(err);
  }
}

function renderEmptyState() {
  elements.calendarGrid.innerHTML = '<div style="padding: 2rem; grid-column: 1 / -1; text-align: center; color: var(--text-muted);">No workspace selected. Create or join one.</div>';
  elements.chatMessages.innerHTML = '';
}

if (getCookie('roosterly_token')) {
  initializeApp();
}