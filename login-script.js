document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginEmailInput = document.getElementById("login-email");
    const loginPasswordInput = document.getElementById("login-password");

    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      const enteredEmail = loginEmailInput.value;
      const enteredPassword = loginPasswordInput.value;

      const storedUsers = retrieveUsers();
      const matchedUser = storedUsers.find(user => user.email === enteredEmail && user.password === enteredPassword);

      if (matchedUser) {
        alert("Logged in successfully!");
        // Here you can redirect to another page or perform other actions
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    });

    // Retrieving stored user data from local storage
    function retrieveUsers() {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        return JSON.parse(storedUsers);
      } else {
        return [];
      }
    }
  });