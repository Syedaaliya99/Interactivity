document.addEventListener("DOMContentLoaded", function () {
    // Get input elements
    var quantityPerTimeInput = document.getElementById('quantityPerTime');
    var frequencyOfIntakeInput = document.getElementById('frequencyOfIntake');
    var totalWaterIntakeInput = document.getElementById('totalWaterIntake');

    // Add event listeners for input changes
    quantityPerTimeInput.addEventListener('input', updateTotalWaterIntake);
    frequencyOfIntakeInput.addEventListener('input', updateTotalWaterIntake);

    // Function to update total water intake
    function updateTotalWaterIntake() {
        var quantityPerTime = parseFloat(quantityPerTimeInput.value) || 0;
        var frequencyOfIntake = parseInt(frequencyOfIntakeInput.value) || 0;

        // Calculate total water intake and display it
        totalWaterIntakeInput.value = (quantityPerTime * frequencyOfIntake).toFixed(2);
    }

    // Initial calculation when the page loads
    updateTotalWaterIntake();
});
