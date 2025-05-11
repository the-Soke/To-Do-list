const loginForm = document.getElementById('authForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Auto-login without checking database
  if (username && password) {
    localStorage.setItem('todoUser', username);
    window.location.href = 'index.html';
  } else {
    alert('Please fill all fields!');
  }
});
