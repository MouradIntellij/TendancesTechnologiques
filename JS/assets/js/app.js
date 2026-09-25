// Navigation
const buttons = document.querySelectorAll('.category-btn');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        document
            .querySelector(`[data-section="${btn.dataset.category}"]`)
            .classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Copier le code
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const code = btn.nextElementSibling.textContent;
        navigator.clipboard.writeText(code);
        btn.textContent = '✓ Copié';
        setTimeout(() => (btn.textContent = 'Copier'), 1500);
    });
});

// Recherche
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();

    sections.forEach(section => {
        section.style.display = section.textContent.toLowerCase().includes(value)
            ? 'block'
            : 'none';
    });
});
