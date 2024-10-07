function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;


    let bmi = weight / (height / 100) ** 2;
    let result = "Your BMI is " + bmi.toFixed(2);


    if (bmi < 18.5) {
        result = result + " (Underweight)";
    } else if (bmi >= 18.5 && bmi <= 25) {
        result = result + " (Normal)";
    } else if (bmi > 25) {
        result = result + " (Overweight)";
    } else if (bmi >= 30) {
        result = result + " (Obese)";
    } else {
        result = "Please Enter Your height and Weight";
    }

    document.getElementById("result").innerHTML = result;
}
