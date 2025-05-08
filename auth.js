
const validUsername = "subodhwadekar123@gmail.com";
const validPassword = "7116";

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  
  if (username === validUsername && password === validPassword) {
    
    window.location.href = 'dashboard.html';
  } else {
    
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = "Invalid username or password!";
    errorMsg.style.display = "block";
  }
});
