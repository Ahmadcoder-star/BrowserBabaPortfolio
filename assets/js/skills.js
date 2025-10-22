AOS.init({ duration: 1000, once: true });

// Animate progress bars & percentage counter
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.progress');
      const percentText = entry.target.querySelector('.percent');
      const value = +progress.getAttribute('data-value');

      progress.style.width = value + '%';

      let count = 0;
      const counter = setInterval(() => {
        if (count < value) {
          count++;
          percentText.textContent = count + '%';
        } else {
          clearInterval(counter);
        }
      }, 20);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

// Filter system
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.skill-card-wrapper');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

// Particles background
particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    size: { value: 3 },
    color: { value: "#00e0ff" },
    move: { speed: 1 },
    line_linked: { enable: true, color: "#00e0ff", opacity: 0.2 },
  }
});
