const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");


const user = {
  username: "admin",
  password: "1234"
};



loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 🚨 stop page refresh

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (
    enteredUsername === user.username &&
    enteredPassword === user.password
  ) {
    message.textContent = "✅ Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Invalid username or password";
    message.style.color = "red";
  }
});



event.preventDefault();


