
   
        document.addEventListener("DOMContentLoaded", function () {
            function calculateDuration() {
                var startHours = parseInt(document.getElementsByName("sleepStartHours")[0].value) || 0;
                var startMinutes = parseInt(document.getElementsByName("sleepStartMinutes")[0].value) || 0;
                var endHours = parseInt(document.getElementsByName("sleepEndHours")[0].value) || 0;
                var endMinutes = parseInt(document.getElementsByName("sleepEndMinutes")[0].value) || 0;
                if (isNaN(startHours) || isNaN(startMinutes) || isNaN(endHours) || isNaN(endMinutes)) {
                    startHours = startMinutes = endHours = endMinutes = 0;
                }
        
                var startTimestamp = startHours * 60 + startMinutes;
                var endTimestamp = endHours * 60 + endMinutes;
        
                var durationMinutes = (endTimestamp - startTimestamp + 1440) % 1440;
        
                var durationHours = Math.floor(durationMinutes / 60);
                var remainingMinutes = durationMinutes % 60;
        
                document.getElementsByName("sleepDurationHours")[0].value = durationHours;
                document.getElementsByName("sleepDurationMinutes")[0].value = remainingMinutes;
            }
        
            function validateForm() {
                var requiredFields = ['sleepStartHours', 'sleepStartMinutes', 'sleepEndHours', 'sleepEndMinutes'];
                for (var i = 0; i < requiredFields.length; i++) {
                    var field = requiredFields[i];
                    if (!document.getElementsByName(field)[0].value) {
                        alert("Please fill in all fields.");
                        return false;
                    }
                }
                return true;
            }
        
            document.querySelector('input[value="Save"]').addEventListener("click", function () {
                calculateDuration();
            });
        
            document.querySelector('input[value="Next"]').addEventListener("click", function (event) {
                if (!validateForm()) {
                    event.preventDefault();
                }
            });
        

            var inputFields = document.querySelectorAll('input[type="number"]');
            for (var i = 0; i < inputFields.length; i++) {
                inputFields[i].addEventListener('input', calculateDuration);
            }
        });
        
