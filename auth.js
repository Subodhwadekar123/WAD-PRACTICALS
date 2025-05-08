document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    // Dummy check – replace with real validation as needed
    if (username === "abcd" && password === "1234") {
      window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
      const errorMsg = document.getElementById("error-msg");
      errorMsg.textContent = "Invalid username or password!";
      errorMsg.style.display = "block";
    }
  })
  