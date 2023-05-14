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
  