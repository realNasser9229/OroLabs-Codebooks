document.addEventListener('DOMContentLoaded', () => {
    const addCodeBtn = document.getElementById('add-code');
    const cellsContainer = document.getElementById('cells');

    // Add new code cell
    addCodeBtn.addEventListener('click', () => {
        const newCell = document.createElement('div');
        newCell.className = 'cell code-cell';
        newCell.innerHTML = `
            <div class="cell-gutter">
                <button class="play-btn" title="Run cell">▶</button>
            </div>
            <div class="cell-content">
                <div class="code-editor" contenteditable="true" spellcheck="false">
<pre><code># Enter code here...</code></pre>
                </div>
            </div>
        `;
        cellsContainer.appendChild(newCell);
    });

    // Simulate cell execution UI
    cellsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('play-btn')) {
            const btn = e.target;
            const originalBg = btn.style.background;
            
            // Visual feedback for running
            btn.style.background = '#2ea043'; // Green
            btn.style.color = '#ffffff';
            
            setTimeout(() => {
                btn.style.background = originalBg;
                btn.style.color = '#ccc';
            }, 600);
        }
    });
});
