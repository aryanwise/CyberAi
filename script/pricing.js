function showRegisterForm(plan) {
    const formContainer = document.getElementById('registerForm');
    formContainer.style.display = 'block';

    const formTitle = formContainer.querySelector('h3');
    formTitle.textContent = `Enter your details to get the payment link for the ${plan}`;
}

const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you! The payment link will be sent to your email.');
    // Here you would typically handle form submission, e.g., via AJAX
    registrationForm.reset();
    document.getElementById('registerForm').style.display = 'none';
});