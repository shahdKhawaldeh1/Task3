document.addEventListener("DOMContentLoaded", function() {
  const registrationForm = document.getElementById("registration-form");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const nameAlert = document.getElementById("nameAlert");
  const emailAlert = document.getElementById("emailAlert");
  const passAlert = document.getElementById("passAlert");
  const confirmpassAlert = document.getElementById("confirmpassAlert");

  registrationForm.addEventListener("submit", function(event) {
    let isValid = true;

    const pattern = /^.{8,}$/;
    if (pattern.test(usernameInput.value)){
      if (usernameInput.classList.contains('is-invalid')){
        usernameInput.classList.replace('is-invalid', 'is-valid');
      }
      nameAlert.innerHTML = '';
    } else {
      isValid = false;
      nameAlert.innerHTML = '*Username must be 8 characters';
      if (usernameInput.classList.contains('is-valid')){
        usernameInput.classList.replace('is-valid', 'is-invalid');
      }
      usernameInput.classList.add('is-invalid');
    }


    // check the email domain
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      isValid = false;
      emailAlert.innerHTML = '*Invalid email';
    } else {
      emailAlert.innerHTML = '';
    }


    // check the password 
    // at least 8 characters and contain at least one symbol and one number
    const passwordPattern = /^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
      isValid = false;
      passAlert.innerHTML = '*Password must be at least 8 characters and contain at least one symbol and one number.';
    } else {
      passAlert.innerHTML = '';
    }
  
    // match the password and confirm password
    if (confirmPasswordInput.value !== passwordInput.value) {
      isValid = false;
      confirmpassAlert.innerHTML = '*Passwords do not match.';
    } else {
      confirmpassAlert.innerHTML = '';
    }


    // store  in the local storage 
    if (isValid) {
      const userinfo = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };
      storeUser(userinfo);
      alert("Registration successful. You can now log in.");
    } else {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

  function storeUser(user) {
    let users;
    if (localStorage.getItem("users") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
});
