\  document.addEventListener("DOMContentLoaded", function () {
    var mealForm = document.getElementById('mealForm');
    mealForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleFormSubmission();
    });

    function handleFormSubmission() {
        var timeValue = document.getElementById('Time').value;
        var carbohydratesValue = document.getElementById('carbohydrates').value;
        var proteinValue = document.getElementById('protein').value;
        var caloriesValue = document.getElementById('calories').value;

        // Validate form data
        if (timeValue.trim() === '' || isNaN(carbohydratesValue) || isNaN(proteinValue) || isNaN(caloriesValue)) {
            alert('Please fill in all the fields with valid numeric values.');
            return;
        }

        // Additional validation (you can customize this based on your requirements)
        if (carbohydratesValue <= 0 || proteinValue <= 0 || caloriesValue <= 0) {
            alert('Please enter values greater than zero for Carbohydrates, Protein, and Calories.');
            return;
        }

        var mealDetails = {
            time: timeValue,
            carbohydrates: carbohydratesValue,
            protein: proteinValue,
            calories: caloriesValue
        };

        console.log('Meal Details:', mealDetails);
    }
    alert('Meal Details Saved!');
});