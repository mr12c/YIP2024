document.getElementById("queryForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const query = document.getElementById("query").value;
  
    // Create the request payload
    const data = {
        senderName: name,
        senderEmail: email,
        query: query
    };
  
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block"; // Show the spinner

    // Send the request using fetch
    fetch('http://localhost:3000/api/v1/mail/sendemail', {
        method: 'POST', // Using POST method
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data object to JSON
    })
    .then((response) => {
        if (!response.ok) {
            // Handle HTTP errors
            return response.json().then(err => { throw new Error(err.message); });
        }
        return response.json(); // Parse JSON response
    })
    .then((responseData) => {
        // Handle the server response
        alert('Query submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit query: ' + error.message);
    })
    .finally(() => {
        spinner.style.display = "none"; // Hide the spinner
        // Clear the input fields
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('query').value = "";
    });
});
