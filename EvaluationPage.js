
      // Function to handle form submission
      function submitForm(event) {
          event.preventDefault(); // Prevent default form submission
  
          var firstRatingSelected = false;
          // Check if any star is selected in the first section
          document.querySelectorAll('.first-evaluation-rating .star').forEach((star) => {
              if (star.dataset.start === "true") {
                  firstRatingSelected = true;
              }
          });

          var secondRatingSelected = false;
          // Check if any star is selected in the second section
          document.querySelectorAll('.second-evaluation-rating .star').forEach((star) => {
              if (star.dataset.start === "true") {
                  secondRatingSelected = true;
              }
          });
  
          if (!firstRatingSelected && !secondRatingSelected) {
              alert("Please select a rating score to evaluate restaurant...");
              return;
          }

          // Get the selected restaurant from the dropdown
          var selectedRestaurant = document.getElementById('list-evaluationpage').value;

          // Prepare the alert message
          var alertMessage = "Thank you for your feedback!\n";

          if (firstRatingSelected) {
              var firstUserRating = document.querySelectorAll('.first-evaluation-rating .star[data-start="true"]').length;
              alertMessage += "Your rating for restaurant Burgerizzer is " + firstUserRating + ".\n";
          }

          if (secondRatingSelected) {
              var secondUserRating = document.querySelectorAll('.second-evaluation-rating .star[data-start="true"]').length;
              alertMessage += "Your rating for restaurant " + selectedRestaurant + " is " + secondUserRating + ".\n";
          }

          alert(alertMessage);

          // Redirect to the home page
          window.location.href = 'index.html';
      }
  
      // Attach event listener to the submit button
      document.getElementById('doneButton').addEventListener('click', submitForm);
  
      // Function to handle rating the restaurant by clicking stars
      function rateRestaurant(rating, setId) {
          // Reset all stars in the specified set to empty
          document.querySelectorAll('.' + setId + '-evaluation-rating .star').forEach((star) => {
              star.innerHTML = '&#9734;';
              star.dataset.start = "false";
          });
  
          // Fill stars up to the selected rating in the specified set
          for (let i = 0; i < rating; i++) {
              document.querySelectorAll('.' + setId + '-evaluation-rating .star')[i].innerHTML = '&#9733;';
              document.querySelectorAll('.' + setId + '-evaluation-rating .star')[i].dataset.start = "true";
          }
      }
  