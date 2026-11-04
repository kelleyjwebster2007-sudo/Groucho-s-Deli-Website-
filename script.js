document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', () => {
      item.classList.toggle('open');
      const isOpen = item.classList.contains('open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });
});
