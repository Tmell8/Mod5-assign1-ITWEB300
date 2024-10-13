function getTicket(ticketnum) {
  // Create an XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  
  // Define the URL for the AJAX request
  let url = `https://jscript.rdm/ticketrequest.asp/?ticketnumber=${ticketnum}`;
  
  // Set up the callback function to handle the response
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Parse the JSON response
          let ticketData = JSON.parse(xhr.responseText);
          
          // Update HTML elements with the ticket data
          document.getElementById('requestDate').textContent = ticketData.requestDate;
          document.getElementById('employeeId').textContent = ticketData.employeeId;
          document.getElementById('firstName').textContent = ticketData.firstName;
          document.getElementById('lastName').textContent = ticketData.lastName;
          document.getElementById('problemDescription').textContent = ticketData.problemDescription;
          document.getElementById('status').textContent = ticketData.status;
          document.getElementById('response').textContent = ticketData.response;
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
          // Handle error response
          console.error("Failed to retrieve the ticket data");
      }
  };
  
  // Open and send the request
  xhr.open('GET', url, true);
  xhr.send();
}

//This function sends a GET request to retrieve ticket information based on the provided ticket numbers. When a successful response is received, it will update elements on the HTML page with IDs such as requestDate, employeeId, firstName, lastName, problemDescription, status, and response. If the request fails, it should log an error.

// other example using AJAX and JvaScript adding a event listener!

document.getElementById('searchBox').addEventListener('input', function() {
    let query = this.value;

    if (query.length > 2) {
        let xhr = new XMLHttpRequest();
        let url = `https://example.com/search?q=${query}`;
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let results = JSON.parse(xhr.responseText);
                
                // Clear current search results
                document.getElementById('searchResults').innerHTML = '';
                
                // Display new results
                results.forEach(function(result) {
                    let li = document.createElement('li');
                    li.textContent = result.name;
                    document.getElementById('searchResults').appendChild(li);
                });
            }
        };
        
        xhr.open('GET', url, true);
        xhr.send();
    }
});

//When user types in search box the input event it triggers a Ajax request to the server with the search query. The server respondes wit ha search result in Json format. Displaying the new results on the page.
