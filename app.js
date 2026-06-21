function init() {
    renderNav();
    renderCommands();

    document.getElementById('searchInput').addEventListener('input', (e) => {
        renderCommands(document.querySelector('.category-pill.active')?.dataset.category || 'all', e.target.value.toLowerCase());
    });
}

function renderNav() {
    const nav = document.getElementById('categoryNav');
    const categories = Object.keys(allCommands);

    
    const allCount = Object.values(allCommands).flat().length;
    nav.innerHTML = `<div class="category-pill active" data-category="all">
        all <span>${allCount}</span>
    </div>`;

    categories.forEach(cat => {
        nav.innerHTML += `<div class="category-pill" data-category="${cat}">
            ${cat} <span>${allCommands[cat].length}</span>
        </div>`;
    });

    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderCommands(e.currentTarget.dataset.category, document.getElementById('searchInput').value.toLowerCase());
        });
    });
}

function renderCommands(category = 'all', searchQuery = '') {
    const grid = document.getElementById('commandsGrid');
    grid.innerHTML = '';

    let cmdsToRender = [];
    if (category === 'all') {
        cmdsToRender = Object.values(allCommands).flat();
    } else {
        cmdsToRender = allCommands[category] || [];
    }

    if (searchQuery) {
        cmdsToRender = cmdsToRender.filter(c =>
            c.name.toLowerCase().includes(searchQuery) ||
            c.description.toLowerCase().includes(searchQuery)
        );
    }

    cmdsToRender.forEach(cmd => {
        let argsHTML = '';
        if (cmd.arguments === 'none') {
            argsHTML = `<span class="pill">none</span>`;
        } else {
            
            const argsList = cmd.arguments.match(/<[^>]+>|\[[^\]]+\]|\S+/g) || [];
            argsHTML = argsList.map(arg => `<span class="pill">${arg.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`).join('');
        }

        grid.innerHTML += `
            <div class="command-card">
                <div class="card-header">
                    <div>
                        <div class="card-title">${cmd.name}</div>
                        <div class="card-description">${cmd.description}</div>
                    </div>
                    <button class="copy-btn" onclick="navigator.clipboard.writeText(',${cmd.name}')" title="Copy command">
                        <i class="fa-regular fa-copy"></i>
                    </button>
                </div>
                <div class="card-section">
                    <h4>arguments</h4>
                    <div class="pills-container">
                        ${argsHTML}
                    </div>
                </div>
                <div class="card-section">
                    <h4>permissions</h4>
                    <div class="pills-container">
                        <span class="pill permissions-pill">${cmd.permissions}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', init);
