// ui.js – Handles DOM rendering for Northstar

export function createGoalElement(goal, index, onToggle) {
  const li = document.createElement('li');
  li.classList.add('goal-item');

  const textSpan = document.createElement('span');
  textSpan.innerHTML = `${goal.text} <em>[${goal.tags.join(', ')}]</em>`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = goal.completed;

  checkbox.addEventListener('change', () => {
    onToggle(index); // callback to update logic
  });

  li.appendChild(textSpan);
  li.appendChild(checkbox);

  return li;
}

export function clearGoalList(container) {
  container.innerHTML = '';
}
