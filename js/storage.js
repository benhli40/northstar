// storage.js – handles localStorage access for goals

const STORAGE_KEY = 'northstar_goals';

export function saveGoals(goals) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
}

export function loadGoals() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function clearGoals() {
  localStorage.removeItem(STORAGE_KEY);
}
