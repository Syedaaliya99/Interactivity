document.addEventListener("DOMContentLoaded", function () {
   
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const waterIntake = document.getElementById("waterIntake").value;
        const sleepHours = document.getElementById("sleepHours").value;
        const sleepMinutes = document.getElementById("sleepMinutes").value;
        const exerciseHours = document.getElementById("exerciseHours").value;
        const exerciseMinutes = document.getElementById("exerciseMinutes").value;
        const caloriesGained = document.getElementById("caloriesGained").value;
        const caloriesBurned = document.getElementById("caloriesBurned").value;

        
        console.log("Water Intake:", waterIntake, "Litre");
        console.log("Sleep:", sleepHours, "Hrs", sleepMinutes, "Mins");
        console.log("Exercise:", exerciseHours, "Hrs", exerciseMinutes, "Min");
        console.log("Calories Gained:", caloriesGained, "kcal");
        console.log("Calories Burned:", caloriesBurned, "kcal");
    });
});
