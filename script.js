// --- CORE OS OBJECT ---
const NOVA = {
    windows: [],
    activeWindow: null,
    zIndex: 100,
    desktopIcons: [
        { id: 'my-computer', name: 'My Computer', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>', app: 'sysinfo' },
        { id: 'file-explorer', name: 'File Explorer', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>', app: 'file-manager' },
        { id: 'terminal', name: 'Terminal', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>', app: 'terminal' },
        { id: 'settings', name: 'Settings', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>', app: 'settings' }
    ],
    taskbarApps: [
        { id: 'file-explorer', name: 'Files', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>' },
        { id: 'terminal', name: 'Terminal', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>' },
        { id: 'settings', name: 'Settings', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>' }
    ]
};

// --- INITIALIZATION ---
window.onload = () => {
    setTimeout(() => {
        document.getElementById('boot-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('boot-screen').style.display = 'none';
            document.getElementById('login-screen').style.display = 'flex';
        }, 800);
    }, 2500);

    setInterval(updateClock, 1000);
    updateClock();
    renderDesktopIcons();
    renderTaskbar();
};

NOVA.login = function() {
    const nameInput = document.getElementById('login-name').value || 'User';
    document.getElementById('login-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        
        const toast = document.createElement('div');
        toast.style.cssText = 'position:absolute; top:20px; left:50%; transform:translateX(-50%); background:rgba(20,22,32,0.8); padding:10px 20px; border-radius:20px; border:1px solid rgba(255,255,255,0.1); z-index:9999; animation: fadeUp 0.5s forwards;';
        toast.innerText = `Welcome back, ${nameInput}`;
        document.getElementById('desktop').appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }, 800);
};

// --- DESKTOP ICONS & CONTEXT MENU ---
function renderDesktopIcons() {
    const container = document.getElementById('desktop-icons');
    container.innerHTML = '';
    NOVA.desktopIcons.forEach((icon, index) => {
        const el = document.createElement('div');
        el.className = 'desktop-icon';
        el.dataset.id = icon.id;
        el.style.top = `${20 + (index * 100)}px`;
        el.style.left = `20px`;
        el.innerHTML = `${icon.icon}<span>${icon.name}</span>`;
        
        el.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
            el.classList.add('selected');
        };

        el.ondblclick = () => openApp(icon.app, icon.name);

        let pressTimer;
        el.oncontextmenu = (e) => {
            e.preventDefault();
            showContextMenu(e.clientX, e.clientY, icon.id);
        };
        el.onpointerdown = (e) => {
            if (e.pointerType === 'mouse') return;
            pressTimer = setTimeout(() => {
                showContextMenu(e.clientX, e.clientY, icon.id);
            }, 500);
        };
        el.onpointerup = () => clearTimeout(pressTimer);

        let isDragging = false, offsetX, offsetY;
        el.onpointerdown = (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            offsetX = e.clientX - el.getBoundingClientRect().left;
            offsetY = e.clientY - el.getBoundingClientRect().top;
            el.setPointerCapture(e.pointerId);
            el.style.zIndex = 100;
        };
        el.onpointermove = (e) => {
            if (!isDragging) return;
            el.style.left = `${e.clientX - offsetX}px`;
            el.style.top = `${e.clientY - offsetY}px`;
        };
        el.onpointerup = (e) => {
            isDragging = false;
            el.releasePointerCapture(e.pointerId);
            el.style.zIndex = '';
        };

        container.appendChild(el);
    });
}

function showContextMenu(x, y, iconId) {
    const menu = document.getElementById('context-menu');
    menu.innerHTML = `
        <div class="ctx-item" onclick="openApp('${NOVA.desktopIcons.find(i => i.id === iconId).app}')">Open</div>
        <div class="ctx-item" onclick="alert('Rename feature active')">Rename</div>
        <div class="ctx-sep"></div>
        <div class="ctx-item" onclick="removeIcon('${iconId}')">Remove from Desktop</div>
        <div class="ctx-item" onclick="alert('Properties opened')">Properties</div>
    `;
    menu.style.display = 'flex';
    menu.style.left = `${Math.min(x, window.innerWidth - 200)}px`;
    menu.style.top = `${Math.min(y, window.innerHeight - 150)}px`;
    
    const closeMenu = () => { menu.style.display = 'none'; document.removeEventListener('click', closeMenu); };
    setTimeout(() => document.addEventListener('click', closeMenu), 10);
}

function removeIcon(id) {
    NOVA.desktopIcons = NOVA.desktopIcons.filter(i => i.id !== id);
    renderDesktopIcons();
}

document.getElementById('desktop').oncontextmenu = (e) => {
    if (e.target.id === 'desktop' || e.target.id === 'desktop-icons') {
        e.preventDefault();
        const menu = document.getElementById('context-menu');
        menu.innerHTML = `
            <div class="ctx-item" onclick="alert('Display Settings')">Display Settings</div>
            <div class="ctx-item" onclick="alert('Personalize')">Personalize</div>
            <div class="ctx-sep"></div>
            <div class="ctx-item" onclick="alert('Refreshed')">Refresh</div>
        `;
        menu.style.display = 'flex';
        menu.style.left = `${e.clientX}px`;
        menu.style.top = `${e.clientY}px`;
    }
};

// --- WINDOW MANAGER ---
function openApp(appId, title = 'Application') {
    const container = document.getElementById('windows-container');
    const winId = `win-${Date.now()}`;
    
    const existingWin = NOVA.windows.find(w => w.appId === appId);
    if (existingWin) {
        focusWindow(existingWin.id);
        return;
    }

    const win = document.createElement('div');
    win.className = 'window';
    win.id = winId;
    win.style.width = '700px';
    win.style.height = '500px';
    win.style.left = `${Math.random() * 100 + 50}px`;
    win.style.top = `${Math.random() * 100 + 50}px`;
    win.style.zIndex = ++NOVA.zIndex;

    let contentHTML = '';
    if (appId === 'file-manager') contentHTML = getFileManagerHTML();
    else if (appId === 'terminal') contentHTML = getTerminalHTML();
    else if (appId === 'settings') contentHTML = `<div style="padding:20px;"><h2>Settings</h2><p>Theme settings go here.</p></div>`;
    else if (appId === 'sysinfo') contentHTML = `<div style="padding:20px;"><h2>System Info</h2><p>NOVA OS v1.0</p><p>Memory: Virtual</p></div>`;

    win.innerHTML = `
        <div class="window-header" id="header-${winId}">
            <div class="window-controls">
                <div class="close-btn" onclick="closeWindow('${winId}')"></div>
                <div class="min-btn" onclick="minimizeWindow('${winId}')"></div>
                <div class="max-btn" onclick="maximizeWindow('${winId}')"></div>
            </div>
            <div class="window-title">${title}</div>
        </div>
        <div class="window-content">${contentHTML}</div>
    `;

    container.appendChild(win);
    NOVA.windows.push({ id: winId, appId, element: win, isMaximized: false });
    focusWindow(winId);

    if (appId === 'file-manager') initFileManager(winId);
    if (appId === 'terminal') initTerminal(winId);

    const header = document.getElementById(`header-${winId}`);
    let isDragging = false, startX, startY, startLeft, startTop;

    header.onpointerdown = (e) => {
        if (e.target.classList.contains('window-controls') || e.target.classList.contains('close-btn') || e.target.classList.contains('min-btn') || e.target.classList.contains('max-btn')) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = win.offsetLeft;
        startTop = win.offsetTop;
        header.setPointerCapture(e.pointerId);
        focusWindow(winId);
    };

    header.onpointermove = (e) => {
        if (!isDragging) return;
        win.style.left = `${startLeft + (e.clientX - startX)}px`;
        win.style.top = `${startTop + (e.clientY - startY)}px`;
    };

    header.onpointerup = (e) => {
        isDragging = false;
        header.releasePointerCapture(e.pointerId);
    };

    win.onmousedown = () => focusWindow(winId);
}

function focusWindow(id) {
    NOVA.windows.forEach(w => {
        if (w.id === id) {
            w.element.style.zIndex = ++NOVA.zIndex;
            w.element.style.opacity = '1';
        } else {
            w.element.style.opacity = '0.95';
        }
    });
}

function closeWindow(id) {
    const win = NOVA.windows.find(w => w.id === id);
    if (win) {
        win.element.style.animation = 'windowOpen 0.2s reverse forwards';
        setTimeout(() => {
            win.element.remove();
            NOVA.windows = NOVA.windows.filter(w => w.id !== id);
        }, 200);
    }
}

function minimizeWindow(id) {
    const win = NOVA.windows.find(w => w.id === id);
    if (win) win.element.style.display = 'none';
}

function maximizeWindow(id) {
    const win = NOVA.windows.find(w => w.id === id);
    if (!win) return;
    if (win.isMaximized) {
        win.element.style.width = '700px';
        win.element.style.height = '500px';
        win.element.style.left = '50px';
        win.element.style.top = '50px';
        win.element.style.borderRadius = '12px';
        win.isMaximized = false;
    } else {
        win.element.style.width = '100vw';
        win.element.style.height = 'calc(100vh - 50px)';
        win.element.style.left = '0';
        win.element.style.top = '0';
        win.element.style.borderRadius = '0';
        win.isMaximized = true;
    }
}

// --- FILE MANAGER ---
function getFileManagerHTML() {
    return `
        <div class="fm-container">
            <div class="fm-sidebar">
                <div class="fm-nav active">📁 Home</div>
                <div class="fm-nav">🖼️ Images</div>
                <div class="fm-nav">🎵 Music</div>
                <div class="fm-nav">📄 Documents</div>
            </div>
            <div class="fm-main">
                <div class="fm-toolbar">
                    <button class="fm-btn" onclick="selectDirectory()">Select Folder</button>
                </div>
                <div id="file-list" class="file-grid">
                    <p style="color:var(--text-muted); font-size:12px; grid-column: 1/-1;">Select a folder to view real files.</p>
                </div>
            </div>
        </div>
    `;
}

async function selectDirectory() {
    try {
        const dirHandle = await window.showDirectoryPicker();
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = '<p style="color:var(--text-muted);">Loading...</p>';
        
        let html = '';
        for await (const entry of dirHandle.values()) {
            let icon = '📄';
            if (entry.kind === 'directory') icon = '📁';
            else if (entry.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) icon = '🖼️';
            else if (entry.name.match(/\.(mp3|wav|ogg)$/i)) icon = '🎵';
            else if (entry.name.match(/\.(mp4|webm)$/i)) icon = '🎬';

            html += `
                <div class="file-item" onclick="alert('Opening ${entry.name}')">
                    <div style="font-size: 30px;">${icon}</div>
                    <span>${entry.name}</span>
                </div>
            `;
        }
        fileList.innerHTML = html || '<p style="color:var(--text-muted); grid-column: 1/-1;">Folder is empty.</p>';
    } catch (err) {
        console.error(err);
        document.getElementById('file-list').innerHTML = `<p style="color:#ff5f56; grid-column: 1/-1;">Access denied or cancelled.</p>`;
    }
}

// --- TERMINAL ---
function getTerminalHTML() {
    return `
        <div class="term-container" id="term-body">
            <div>NOVA Terminal v1.0.0</div>
            <div>Type 'help' for commands.</div>
            <div id="term-output"></div>
            <div class="term-input-line">
                <span>user@nova:~$</span>
                <input type="text" id="term-input" autocomplete="off" autofocus>
            </div>
        </div>
    `;
}

function initTerminal(winId) {
    const input = document.getElementById('term-input');
    const output = document.getElementById('term-output');
    const body = document.getElementById('term-body');

    input.onkeydown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            input.value = '';
            if (!cmd) return;

            const cmdLine = document.createElement('div');
            cmdLine.innerHTML = `<span style="color:#fff;">user@nova:~$</span> ${cmd}`;
            output.appendChild(cmdLine);

            const res = document.createElement('div');
            if (cmd === 'help') res.innerText = 'Available commands: help, clear, date, whoami, echo';
            else if (cmd === 'clear') output.innerHTML = '';
            else if (cmd === 'date') res.innerText = new Date().toString();
            else if (cmd === 'whoami') res.innerText = 'user';
            else if (cmd.startsWith('echo ')) res.innerText = cmd.slice(5);
            else res.innerText = `Command not found: ${cmd}`;
            
            if (res.innerText) output.appendChild(res);
            body.scrollTop = body.scrollHeight;
        }
    };
}

// --- TASKBAR & CLOCK ---
function renderTaskbar() {
    const taskbar = document.getElementById('taskbar');
    NOVA.taskbarApps.forEach(app => {
        const el = document.createElement('div');
        el.className = 'dock-icon';
        el.innerHTML = app.icon;
        el.title = app.name;
        el.onclick = () => openApp(app.id, app.name);
        taskbar.insertBefore(el, document.getElementById('clock'));
    });
}

function updateClock() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('date').innerText = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
}
