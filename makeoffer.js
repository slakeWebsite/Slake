// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const deleteButton = document.querySelector(".Delete-Selected");
    const offerCheckboxes = document.querySelectorAll(".offer-checkbox");
    const submitButton = document.querySelector(".create-offer");
    const offerNameInput = document.getElementById("fname");
    const offerDescriptionInput = document.getElementById("subject");
    const offerPhotoInput = document.getElementById("mealPhoto");
    const offersAvContainer = document.querySelector(".offersAv");

    // Function to handle delete action
    deleteButton.addEventListener("click", function() {
        // Get all offer checkboxes
        const offerCheckboxes = document.querySelectorAll(".offer-checkbox:checked");

        // Check if any offer is selected
        if (offerCheckboxes.length === 0) {
            alert("Please select at least one offer");
        } else {
            // Ask for confirmation before deleting
            if (confirm("Are you sure you want to delete the selected offers?")) {
                // Remove selected offer cards from the DOM
                offerCheckboxes.forEach(function(checkbox) {
                    const offerCard = checkbox.closest('.offer-card');
                    if (offerCard) {
                        offerCard.remove();
                    }
                });
            }
        }
    });

 // Function to handle form submission
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission
           // Validate form fields
    if (offerNameInput.value.trim() === "" || offerDescriptionInput.value.trim() === "" || offerPhotoInput.value.trim() === "") {
        alert("Please fill in all fields");
    } else if (!/^[A-Za-z]/.test(offerNameInput.value.trim())) {
        alert("Offer name must start with a letter");
    } else {
            // Create new offer card
            const newOfferCard = document.createElement("div");
            newOfferCard.classList.add("offer-card");
            newOfferCard.innerHTML = `
                <div class="offer-sections">
                    <img src="${offerPhotoInput.value}" alt="" class="offer-img">
                </div>
                <div class="offer-sections">
                    <p class="offer-name">${offerNameInput.value}</p>
                    <p class="offer-p">${offerDescriptionInput.value}</p>
                </div>
                <div class="offer-sections">
                    <label>
                        <input type="checkbox" class="offer-checkbox">
                    </label>
                </div>
            `;
            // Insert new offer card after the last offer card
            const offersButton = document.getElementById('offers-page-button');
if (offersButton) {
    offersAvContainer.insertBefore(newOfferCard, offersButton);
} else {
    
    offersAvContainer.appendChild(newOfferCard);
}

            
            // Clear form fields
            offerNameInput.value = "";
            offerDescriptionInput.value = "";
            offerPhotoInput.value = "";
        }
    });
});