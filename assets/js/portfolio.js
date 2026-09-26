// Filtering is progressive enhancement: every project is visible without JavaScript.
const filters = document.querySelector('[data-filters]');
if (filters) {
  filters.hidden = false;
  const projects = [...document.querySelectorAll('[data-category]')];
  const count = document.querySelector('[data-count]');
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => { project.hidden = category !== 'all' && project.dataset.category !== category; });
    const visible = projects.filter(project => !project.hidden).length;
    count.textContent = `${visible} projects`;
  });
}
