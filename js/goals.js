import { saveGoals, loadGoals } from './storage.js';
import { createGoalElement, clearGoalList } from './ui.js';
import { renderProgress } from './progress.js';
import { renderTagFilters } from './tags.js';

document.addEventListener('DOMContentLoaded', () => {
  const goalInput = document.getElementById('goal-input');
  const tagInput = document.getElementById('tag-input');
  const addBtn = document.getElementById('add-goal');
  const goalsList = document.getElementById('goals');

  let goals = loadGoals(); // Load saved goals from localStorage
  let currentTag = null;   // Keeps track of the current filter selection

  function renderGoalList(goalsToRender) {
    clearGoalList(goalsList);

    goalsToRender.forEach((goal, index) => {
      const li = createGoalElement(goal, index, (i) => {
        goals[i].completed = !goals[i].completed;
        saveGoals(goals);
        applyFilter(currentTag); // Re-apply filter after toggle
      });

      goalsList.appendChild(li);
    });
  }

  function applyFilter(tag = null) {
    currentTag = tag;

    const filteredGoals = tag
      ? goals.filter(goal => goal.tags.includes(tag))
      : goals;

    renderGoalList(filteredGoals);
    renderProgress(filteredGoals);
  }

  addBtn.addEventListener('click', () => {
    const text = goalInput.value.trim();
    const tags = tagInput.value.split(',').map(t => t.trim()).filter(Boolean);

    if (!text) return;

    goals.push({ text, tags, completed: false });
    goalInput.value = '';
    tagInput.value = '';
    saveGoals(goals);

    renderTagFilters(goals, applyFilter); // Re-render tags
    applyFilter(currentTag);              // Re-apply filter after add
  });

  // Initial render
  renderTagFilters(goals, applyFilter);
  applyFilter(); // Shows all goals initially
});