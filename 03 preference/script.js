
        function validateForm() {
            var age = document.getElementsByName("age")[0].value;
            var height = document.getElementsByName("height")[0].value;
            var weight = document.getElementsByName("weight")[0].value;

            if (age === "" || height === "" || weight === "") {
                alert("Please fill in all fields");
                return false;
            }

            if (age < 1 || age > 100 || height < 1 || height > 15 || weight < 1 || weight > 200) {
                alert("Please enter valid values for age, height, and weight");
                return false;
            }

            return true;
        }
  
