// Initial chatbot state
let chatbotState = {
    waitingFor: null,
};

// Show the chatbot window when the button is clicked
document.getElementById('chatbotButton').addEventListener('click', function () {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
});

// Close the chatbot window when clicking outside or on the button again
document.addEventListener('click', function (event) {
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotButton = document.getElementById('chatbotButton');

    if (!chatbotWindow.contains(event.target) && !chatbotButton.contains(event.target)) {
        chatbotWindow.style.display = 'none';
    }
});

// Send a message
document.getElementById('sendMessage').addEventListener('click', function () {
    sendMessage();
});

// Send message when Enter is pressed
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

let currentStep = '';

function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    var userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = userInput;
    document.getElementById('chatbotMessages').appendChild(userMessageDiv);

    document.getElementById('userInput').value = '';
    document.getElementById('chatbotMessages').scrollTop = document.getElementById('chatbotMessages').scrollHeight;

    setTimeout(function () {
        handleUserResponse(userInput);
    }, 500);
}

function handleUserResponse(userInput) {
    let botResponse = '';
    if (currentStep === '') {
        if (userInput.toLowerCase().includes('service')) {
            currentStep = 'service-selection';
            botResponse = 'Which service would you like to know more about? <br>';
            botResponse += '<input type="checkbox" id="serviceA" name="service" value="Service A"> Service A<br>';
            botResponse += '<input type="checkbox" id="serviceB" name="service" value="Service B"> Service B<br>';
            botResponse += '<input type="checkbox" id="serviceC" name="service" value="Service C"> Service C<br>';
            botResponse += '<button onclick="submitServiceSelection()">Submit</button>';
        } else if (userInput.toLowerCase().includes('pricing')) {
            currentStep = 'pricing-selection';
            botResponse = 'Which service pricing would you like to know more about? <br>';
            botResponse += '<input type="checkbox" id="pricingA" name="pricing" value="Pricing A"> Service A<br>';
            botResponse += '<input type="checkbox" id="pricingB" name="pricing" value="Pricing B"> Service B<br>';
            botResponse += '<input type="checkbox" id="pricingC" name="pricing" value="Pricing C"> Service C<br>';
            botResponse += '<button onclick="submitPricingSelection()">Submit</button>';
        } else if (userInput.toLowerCase().includes('contact')) {
            botResponse = "You can contact us via our contact form or email us directly at company@mail.com.";
        } else {
            botResponse = "I'm not sure how to answer that. Could you please clarify your question from: <br><b>Pricing, Services, Contact, About ?</b>";
        }
    }

    if (botResponse) {
        addBotMessage(botResponse);
    }
}

function submitServiceSelection() {
    const selectedServices = [];
    if (document.getElementById('serviceA').checked) selectedServices.push('Service A');
    if (document.getElementById('serviceB').checked) selectedServices.push('Service B');
    if (document.getElementById('serviceC').checked) selectedServices.push('Service C');

    if (selectedServices.length > 0) {
        let botResponse = '';
        selectedServices.forEach(service => {
            if (service === 'Service A') {
                botResponse += `Service A is [brief information]. For more details, check out the <a href="/structure/pricing-a.html">Service A page</a>.<br>`;
            } else if (service === 'Service B') {
                botResponse += `Service B is [brief information]. For more details, check out the <a href="/structure/pricing-b.html">Service B page</a>.<br>`;
            } else if (service === 'Service C') {
                botResponse += `Service C is [brief information]. For more details, check out the <a href="/structure/pricing-c.html">Service C page</a>.<br>`;
            }
        });
        addBotMessage(botResponse);
        currentStep = ''; // Reset to initial step
    } else {
        addBotMessage("Please select at least one service.");
    }
}

function submitPricingSelection() {
    const selectedPricings = [];
    if (document.getElementById('pricingA').checked) selectedPricings.push('Pricing A');
    if (document.getElementById('pricingB').checked) selectedPricings.push('Pricing B');
    if (document.getElementById('pricingC').checked) selectedPricings.push('Pricing C');

    if (selectedPricings.length > 0) {
        let botResponse = '';
        selectedPricings.forEach(pricing => {
            if (pricing === 'Pricing A') {
                botResponse += `Pricing for Service A is [brief pricing details]. For more details, check out the <a href="/structure/pricing-a.html">Pricing A page</a>.<br>`;
            } else if (pricing === 'Pricing B') {
                botResponse += `Pricing for Service B is [brief pricing details]. For more details, check out the <a href="/structure/pricing-b.html">Pricing B page</a>.<br>`;
            } else if (pricing === 'Pricing C') {
                botResponse += `Pricing for Service C is [brief pricing details]. For more details, check out the <a href="/structure/pricing-c.html">Pricing C page</a>.<br>`;
            }
        });
        addBotMessage(botResponse);
        currentStep = ''; // Reset to initial step
    } else {
        addBotMessage("Please select at least one pricing option.");
    }
}

function addBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot-message';
    botMessageDiv.innerHTML = message;
    document.getElementById('chatbotMessages').appendChild(botMessageDiv);
    document.getElementById('chatbotMessages').scrollTop = document.getElementById('chatbotMessages').scrollHeight;
}