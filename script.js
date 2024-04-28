const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate login by logging the information to the console (replace with your actual logic)
  console.log(`Email: ${email}, Password: ${password}`);

  // You would typically perform actions based on the login response here (e.g., redirect, show error message)
  // For example, you might send this data to a server for authentication and handle the response accordingly.
  
  // Here's a basic example of showing a success message (replace with your actual logic)
  alert('Login successful!'); // This is for demonstration only, replace with more robust feedback
});
