// tags.js – handles tag filtering

export function getAllTags(goals) {
  const tagSet = new Set();
  goals.forEach(goal => {
    goal.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function renderTagFilters(goals, onFilterChange) {
  const container = document.getElementById('tag-filters');
  container.innerHTML = '';

  const tags = getAllTags(goals);

  // "All" button
  const allBtn = createTagButton('All', () => onFilterChange(null));
  container.appendChild(allBtn);

  tags.forEach(tag => {
    const tagBtn = createTagButton(tag, () => onFilterChange(tag));
    container.appendChild(tagBtn);
  });
}

function createTagButton(label, onClick) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.classList.add('tag-btn');
  btn.addEventListener('click', onClick);
  return btn;
}
