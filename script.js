// select all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

 // add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // prevent default jump-to-section behavior
        event.preventDefault();
  
      // get the target section from the link href attribute
      const targetId = link.getAttribute('href');   
  
      // smoothly scroll to the target section using scrollIntoView method
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
     
   const form = document.querySelector('form');
   const nameInput = document.querySelector('#name');
   const emailInput = document.querySelector('#email');
   const messageInput = document.querySelector('#message');
   const errorContainer = document.querySelector('#error-msg');
 
   form.addEventListener('submit', (event) => {
    let errorMessages = [];

     // Check if name input is empty
       if (nameInput.value === '') {
     errorMessages.push('Name is required');
}
// Check if email input is empty and valid
if (emailInput.value === '') {
    errorMessages.push('Email is required');
  } else if (!isValidEmail(emailInput.value)) {
    errorMessages.push('Please enter a valid email address');
  }
  // Check if message input is empty
  if (messageInput.value === '') {
    errorMessages.push('Message is required');
  }

  // Display error messages if any exist
  if (errorMessages.length > 0) {
    event.preventDefault(); // Prevent form submission

    const errorHTML = errorMessages.map(msg => `<li>${msg}</li>`).join('');
    errorContainer.innerHTML = `<ul>${errorHTML}</ul>`;
  }
});

// Helper function to validate email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}