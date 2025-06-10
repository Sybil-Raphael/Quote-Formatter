// Get references to the form and result paragraph
const form = document.getElementById('form'); // const is used because we don't reassign form
const result = document.getElementById('result'); // const is used because we don't reassign result

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the page from reloading

  // Get user inputs
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adjective = document.getElementById('adjective').value;

  // Create the sentence using template literals for streamlined formatting
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Display the sentence
  result.textContent = sentence;

  // Clear the input fields
  document.getElementById('noun').value = "";
  document.getElementById('verb').value = "";
  document.getElementById('adjective').value = "";
});
