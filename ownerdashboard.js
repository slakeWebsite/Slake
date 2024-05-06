
    // Function to retrieve meals from local storage and display them on the dashboard
// Function to retrieve meals from local storage and display them on the dashboard
function displayMeals() {
    // Retrieve meals from local storage
    let meals = JSON.parse(localStorage.getItem('meals')) || [];

    // Loop through the meals
    meals.forEach(function(meal) {
        // Create meal card
        let mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');
        
        // Construct meal card content
        let mealContent = `
            <img class="meal-image" src="${meal.photo}" alt="Meal Image">
            <div class="meal-details">
                <h2 class="meal-title">${meal.name}</h2>
                <p class="meal-description">${meal.description}</p>
                <div class="meal-info">
                    <p class="meal-price">${meal.price} SR</p>
                    <p class="meal-calories">${meal.calories} CL</p>
                </div>
            </div>
        `;

        // Set the innerHTML of meal card
        mealCard.innerHTML = mealContent;

        // Determine where to append the meal card based on its type
        let sectionId;
        switch (meal.type) {
            case 'Main dish':
                sectionId = 'MainDishes';
                break;
            case 'Kids meal':
                sectionId = 'kidsmeal';
                break;
            case 'Side dishes':
                sectionId = 'SideDishes';
                break;
            default:
                // If meal type is not recognized, append to main dishes by default
                sectionId = 'MainDishes';
        }

        // Append the meal card to the appropriate section
        let section = document.getElementById(sectionId);
        section.querySelector('.body-card').appendChild(mealCard);
    });
}

// Call displayMeals function when the page loads
window.onload = function() {
    displayMeals();
};

    