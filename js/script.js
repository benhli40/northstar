// script.js – Northstar global initializer

document.addEventListener('DOMContentLoaded', () => {
  console.log('🌟 Northstar is ready.');

  // Theme toggle
  const themeToggle = document.getElementById('toggle-theme');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('northstar_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('northstar_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  // Optional weekly reset hook
  const resetBtn = document.getElementById('reset-week');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all goals for the new week?')) {
        localStorage.removeItem('northstar_goals');
        location.reload();
      }
    });
  }
});
