const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();

  if (username && password) {
    localStorage.setItem('todoUser', username);
    window.location.href = 'index.html';
  } else {
    alert('Please fill in all fields!');
  }
});
