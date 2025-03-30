// progress.js – handles progress calculation and rendering

export function calculateProgress(goals) {
  const completed = goals.filter(g => g.completed).length;
  const total = goals.length;
  return { completed, total };
}

export function renderProgress(goals) {
  const { completed, total } = calculateProgress(goals);
  const display = document.getElementById('progress-display');

  if (display) {
    display.textContent = `${completed} of ${total} goals completed`;
  }
}
