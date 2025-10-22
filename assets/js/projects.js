const searchInput = document.getElementById('projectSearch');
const projects = document.querySelectorAll('.project-card');

searchInput.addEventListener('keyup', () => {
    const value = searchInput.value.toLowerCase();
    projects.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? 'block' : 'none';
    });
});
