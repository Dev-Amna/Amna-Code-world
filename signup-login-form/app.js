const container = document.getElementById("container");
document.getElementById("showSignUp").addEventListener("click", () => {
  container.classList.add("show-signup");
});
document.getElementById("showLogin").addEventListener("click", () => {
  container.classList.remove("show-signup");
});

// You Add this logic your own 
// This can be 
// // Login form
// const loginForm = document.querySelector(".login-form");
// loginForm.onsubmit = (e) => {
//   e.preventDefault();
//   const email = loginForm.querySelector('input[type="email"]').value;
//   const password = loginForm.querySelector('input[type="password"]').value;
//   console.log("Login:", { email, password });
//   alert(`Logged in as ${email}`);
// };

// // Sign Up form
// const signUpForm = document.querySelector(".sign-up-form");
// signUpForm.onsubmit = (e) => {
//   e.preventDefault();
//   const name = signUpForm.querySelector('input[type="text"]').value;
//   const email = signUpForm.querySelector('input[type="email"]').value;
//   const password = signUpForm.querySelector('input[type="password"]').value;
//   console.log("Sign Up:", { name, email, password });
//   alert(`Account created for ${name}`);
// };
