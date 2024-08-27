// Register button functionality

document.querySelector('.register-btn').addEventListener('click', function () {
    let userFirstName = prompt('Enter your First name:');
    let userLastName = prompt('Enter your Last name:');
    let userEmail = prompt('Enter your email:');
    if (userName && userEmail) {
        alert('Thank you for registering, ' + userName + '!');
        document.querySelector('.service-form').style.display = 'block';
    } else {
        alert('Please enter your details to proceed.');
    }
});
// JavaScript to show the service form when the Register button is clicked
document.querySelector('.register-btn').addEventListener('click', function () {
    document.querySelector('.service-form').style.display = 'block'; // Show the service form
    document.querySelector('.service-start').style.display = 'none'; // Hide the original message and button
});