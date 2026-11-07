const API_BASE = 'https://api.orbinuity.nl:34430';
const APP_ID = 'RoosterlyWork';

const app = {
    user: null,
    token: localStorage.getItem('roosterly_token'),
    activeRoom: null,
    pollInterval: null,
    
    async api(endpoint, options = {}) {
        const headers = { 'Content-Type': 'application/json' };
        if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

        const res = await fetch(`${API_BASE}${endpoint}`, {
            method: options.method || 'GET',
            headers,
            body: options.body ? JSON.stringify(options.body) : null
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'API Error');
        return data;
    },

    toggleAuth(type) {
        document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
        document.getElementById('register-form').style.display = type === 'register' ? 'block' : 'none';
    },

    showError(msg) {
        document.getElementById('auth-error').innerText = msg;
        setTimeout(() => document.getElementById('auth-error').innerText = '', 4000);
    },

    async login() {
        try {
            const res = await this.api('/api/auth/login', {
                method: 'POST',
                body: {
                    identifier: document.getElementById('login-id').value,
                    password: document.getElementById('login-pwd').value
                }
            });
            this.token = res.token;
            localStorage.setItem('roosterly_token', this.token);
            this.initApp();
        } catch (err) {
            this.showError(err.message);
        }
    },

    async register() {
        try {
            await this.api('/api/auth/register', {
                method: 'POST',
                body: {
                    username: document.getElementById('reg-user').value,
                    email: document.getElementById('reg-email').value,
                    displayName: document.getElementById('reg-name').value,
                    password: document.getElementById('reg-pwd').value,
                    acceptedTerms: document.getElementById('reg-terms').checked
                }
            });
            alert('Registration successful! Please login.');
            this.toggleAuth('login');
        } catch (err) {
            this.showError(err.message);
        }
    },

    logout() {
        this.token = null;
        localStorage.removeItem('roosterly_token');
        clearInterval(this.pollInterval);
        document.getElementById('app-view').classList.remove('active');
        document.getElementById('auth-view').classList.add('active');
    },

    async initApp() {
        if (!this.token) return;
        try {
            this.user = await this.api('/api/account/me');
            document.getElementById('current-user-name').innerText = this.user.displayName;
            document.getElementById('auth-view').classList.remove('active');
            document.getElementById('app-view').classList.add('active');
            await this.loadCompany();
            
            this.pollInterval = setInterval(() => this.syncRoom(), 5000);
        } catch (err) {
            console.error(err);
            this.logout();
        }
    },

    async loadCompany() {
        const rooms = await this.api(`/api/external/rooms?appId=${APP_ID}`);
        if (rooms.length > 0) {
            this.activeRoom = rooms[0];
            this.ensureRoomStructure();
            this.renderUI();
            this.switchTab('schedule');
        } else {
            this.switchTab('setup');
        }
    },

    async syncRoom() {
        if (!this.activeRoom) return;
        const rooms = await this.api(`/api/external/rooms?appId=${APP_ID}`);
        const updatedRoom = rooms.find(r => r.id === this.activeRoom.id);
        if (updatedRoom) {
            const stringifiedOld = JSON.stringify(this.activeRoom.cases);
            const stringifiedNew = JSON.stringify(updatedRoom.cases);
            this.activeRoom = updatedRoom;
            
            if (stringifiedOld !== stringifiedNew) this.renderUI();
        }
    },

    async createCompany() {
        const name = document.getElementById('new-company-name').value;
        if (!name) return alert('Enter a company name');
        
        const newRoom = await this.api('/api/external/rooms', {
            method: 'POST',
            body: { name, description: 'RoosterlyWork Workspace', appId: APP_ID }
        });
        
        await this.loadCompany();
    },

    async inviteMember() {
        const username = document.getElementById('invite-username').value;
        try {
            await this.api(`/api/external/rooms/${this.activeRoom.id}/members`, {
                method: 'POST',
                body: { username }
            });
            alert('User invited successfully!');
            this.syncRoom();
        } catch (err) {
            alert(err.message);
        }
    },

    ensureRoomStructure() {
        if (!this.activeRoom.cases || !Array.isArray(this.activeRoom.cases)) {
            this.activeRoom.cases = [{ type: 'schedule', data: [] }, { type: 'chat', data: [] }];
        }
    },

    async saveRoomState() {
        await this.api(`/api/external/rooms/${this.activeRoom.id}`, {
            method: 'PUT',
            body: { cases: this.activeRoom.cases }
        });
        this.renderUI();
    },

    switchTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
        
        if (tabId !== 'setup') {
            document.getElementById(`${tabId}-tab`).classList.add('active');
            event.target.classList.add('active');
        } else {
            document.getElementById('setup-tab').classList.add('active');
        }
    },

    renderUI() {
        this.renderSchedule();
        this.renderChat();
        this.renderMembers();
        this.calculateEarnings();
    },

    renderSchedule() {
        const grid = document.getElementById('schedule-grid');
        const days = ['Member', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
        let html = days.map(d => `<div class="grid-header">${d}</div>`).join('');
        const schedules = this.activeRoom.cases[0]?.data || [];

        this.activeRoom.members.forEach(member => {
            html += `<div class="grid-cell" style="font-weight:bold;">${member.displayName}</div>`;
            for (let i = 1; i <= 7; i++) {
                const dayShifts = schedules.filter(s => s.userId === member.userId && s.dayOfWeek === i);
                html += `<div class="grid-cell">
                    ${dayShifts.map(s => `<div class="shift-card">${s.startTime} - ${s.endTime}<br><i>${s.role}</i> ${s.repeats ? '(Repeats)' : ''}</div>`).join('')}
                </div>`;
            }
        });
        grid.innerHTML = html;
    },

    async addShiftModal() {
        const targetUser = prompt('Enter username to assign shift to (leave blank for yourself):') || this.user.username;
        const member = this.activeRoom.members.find(m => m.username === targetUser);
        
        if (!member) return alert('Member not found in company.');

        const dayOfWeek = parseInt(prompt('Day of week (1=Mon, 7=Sun):', '1'));
        const startTime = prompt('Start Time (HH:MM):', '09:00');
        const endTime = prompt('End Time (HH:MM):', '17:00');
        const role = prompt('Task/Role:', 'General');
        const repeats = confirm('Does this repeat every week?');

        this.activeRoom.cases[0].data.push({
            id: Date.now().toString(),
            userId: member.userId,
            dayOfWeek, startTime, endTime, role, repeats
        });
        await this.saveRoomState();
    },

    renderChat() {
        const container = document.getElementById('chat-messages');
        const select = document.getElementById('chat-recipient');
        
        const currentSelection = select.value;
        select.innerHTML = `<option value="all">Everyone (Public)</option>` + 
            this.activeRoom.members
                .filter(m => m.userId !== this.user.id)
                .map(m => `<option value="${m.userId}">Private: ${m.displayName}</option>`)
                .join('');
        select.value = currentSelection || 'all';

        const messages = this.activeRoom.cases[1]?.data || [];
        const visibleMessages = messages.filter(m => 
            !m.recipientId || m.recipientId === 'all' || 
            m.recipientId === this.user.id || m.senderId === this.user.id
        );

        container.innerHTML = visibleMessages.map(m => {
            const isSelf = m.senderId === this.user.id;
            const senderName = this.activeRoom.members.find(x => x.userId === m.senderId)?.displayName || 'Unknown';
            let content = '';
            
            if (m.msgType === 'image') {
                content = `<img src="${m.text}" class="chat-media" alt="User image" onerror="this.src=''; this.alt='Invalid Image URL'">`;
            } else if (m.msgType === 'video') {
                content = `<a href="${m.text}" target="_blank">[Video] View Shared Video</a>`;
            } else if (m.msgType === 'poll') {
                const [q, opts] = m.text.split('|');
                content = `<strong>[Poll] ${q}</strong><br>` + (opts ? opts.split(',').map(o => `* ${o}`).join('<br>') : '');
            } else {
                content = m.text;
            }

            const privateLabel = m.recipientId !== 'all' ? `<span class="msg-private">[Private Message]</span>` : '';
            return `
                <div class="msg ${isSelf ? 'self' : ''}">
                    <div class="msg-header">${senderName} ${privateLabel}</div>
                    <div>${content}</div>
                </div>
            `;
        }).join('');
        container.scrollTop = container.scrollHeight;
    },

    async sendMessage() {
        const text = document.getElementById('chat-input').value;
        const msgType = document.getElementById('chat-type').value;
        const recipientId = document.getElementById('chat-recipient').value;

        if (!text) return;

        this.activeRoom.cases[1].data.push({
            id: Date.now().toString(),
            senderId: this.user.id,
            recipientId,
            text,
            msgType,
            timestamp: new Date().toISOString()
        });

        document.getElementById('chat-input').value = '';
        await this.saveRoomState();
    },

    calculateEarnings() {
        const rate = parseFloat(document.getElementById('hourly-rate').value) || 0;
        const tbody = document.getElementById('finance-body');
        const schedules = this.activeRoom.cases[0]?.data || [];

        tbody.innerHTML = this.activeRoom.members.map(member => {
            const userShifts = schedules.filter(s => s.userId === member.userId);
            let totalHours = 0;
            
            userShifts.forEach(shift => {
                const [h1, m1] = shift.startTime.split(':').map(Number);
                const [h2, m2] = shift.endTime.split(':').map(Number);
                let duration = (h2 + m2/60) - (h1 + m1/60);
                if (duration < 0) duration += 24;
                totalHours += duration;
            });

            const earnings = member.userId === this.user.id ? `EUR ${(totalHours * rate).toFixed(2)}` : '<i>Private</i>';
            return `<tr><td>${member.displayName}</td><td>${totalHours.toFixed(1)} hrs</td><td>${earnings}</td></tr>`;
        }).join('');
    },

    renderMembers() {
        document.getElementById('member-list').innerHTML = this.activeRoom.members
            .map(m => `<li>${m.displayName} (@${m.username}) ${m.userId === this.activeRoom.hostId ? '(Admin)' : ''}</li>`)
            .join('');
    }
};

window.onload = () => app.initApp();