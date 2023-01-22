// This JavaScript file is for handling form submissions, validation, and any other interactivity on the website

// Select the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the values of the form fields
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const days = document.querySelectorAll('input[name="days"]:checked');
    const volunteer = document.querySelector('#volunteer').checked;

    // Send an email to JJ with the RSVP information
    sendEmail(name, email, days, volunteer);

    // Display a message to the user
    alert(`Thank you for your RSVP, ${name}! You have selected to attend on ${getDaysAttending(days)} and ${volunteer ? 'have offered to help with cooking and cleaning.' : 'have not offered to help with cooking and cleaning.'}`);
});

