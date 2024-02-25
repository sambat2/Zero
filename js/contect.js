document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var email = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Perform any additional validation here

    // Simulate sending the data to a server (replace with actual server-side code)
    var responseMessage = `Thank you, ${name}! Your message has been sent.`;

    // Display response message
    document.getElementById("response").innerText = responseMessage;

    // Clear form fields
    document.getElementById("contact").reset();
});