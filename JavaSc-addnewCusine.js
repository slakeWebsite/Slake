
function validateForm() {
    // Get form inputs
    let mealName = document.getElementById('mealName').value.trim();
    let mealPrice = document.getElementById('mealPrice').value.trim();
    let mealCalories = document.getElementById('mealCalories').value.trim();
    let mealDescription = document.getElementById('mealDescription').value.trim();
    let mealPhoto = document.getElementById('mealPhoto').value.trim(); // Get the file input value
	

    // Array to store names of empty fields
    let emptyFields = [];

    // Check if mealName starts with a digit
    if (/^\d/.test(mealName)) {
        alert('Meal name cannot start with a number.');
        return false;
    }

    // Check for empty fields
    if (!mealName) {
        emptyFields.push('Meal Name');
    }
    if (!mealPrice) {
        emptyFields.push('Meal Price');
    }
    if (!mealCalories) {
        emptyFields.push('Meal Calories');
    }
    if (!mealDescription) {
        emptyFields.push('Meal Description');
    }
    if (!mealPhoto) {
        emptyFields.push('Meal Photo');
    }

    // If any fields are empty, display alert with empty fields
    if (emptyFields.length > 0) {
        let emptyFieldsString = emptyFields.join(', ');
        alert('Please fill in the following fields: ' + emptyFieldsString);
        return false;
    }

    // Check if mealPrice and mealCalories are numbers
    if (isNaN(mealPrice) || isNaN(mealCalories)) {
        alert('Price and calories must be numbers.');
        return false;
    }

    // Validation successful
    return true;
}

// Function to extract form data and store it in local storage
function extractFormData() {
    if (validateForm()) {
        // Get form inputs
        let mealName = document.getElementById('mealName').value.trim();
        let mealPrice = document.getElementById('mealPrice').value.trim();
        let mealCalories = document.getElementById('mealCalories').value.trim();
        let mealDescription = document.getElementById('mealDescription').value.trim();
        let mealPhoto = document.getElementById('mealPhoto').value.trim(); // You may need to handle file uploads differently
        let mealType = document.getElementById('typeOfMeal').value;
        // Create meal object
        let meal = {
            name: mealName,
            price: mealPrice,
            calories: mealCalories,
            description: mealDescription,
            photo: mealPhoto,
            type: mealType, // Include the selected type of meal
        };

        // Retrieve existing meals from local storage
        let existingMeals = JSON.parse(localStorage.getItem('meals')) || [];

        // Add new meal to existing meals
        existingMeals.push(meal);

        // Store updated meals in local storage
        localStorage.setItem('meals', JSON.stringify(existingMeals));

         alert('Meal ' +mealName +' added successfully!');
// Reload the page to reflect the changes
window.location.reload();
        // Reset the form
        document.getElementById('contactForm').reset();
    }
}

// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    extractFormData(); // Validate form and store data
});

// Function to clear form inputs
function clearForm() {
    // Get form inputs
    let mealName = document.getElementById('mealName');
    let mealPrice = document.getElementById('mealPrice');
    let mealCalories = document.getElementById('mealCalories');
    let mealDescription = document.getElementById('mealDescription');
    let mealPhoto = document.getElementById('mealPhoto');

    // Reset input values
    mealName.value = '';
    mealPrice.value = '';
    mealCalories.value = '';
    mealDescription.value = '';
    mealPhoto.value = '';
}
// Attach event listener to Cancel button
document.getElementById('cancelBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button action
    clearForm(); // Clear form inputs
});



