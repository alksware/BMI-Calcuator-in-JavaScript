function BMICalculator() {
    alert("Please enter your body information correctly for better results.");
    const weight = parseFloat(prompt("Enter your weight (KG):"));
    const height = parseFloat(prompt("Enter your height (M):"));
    const BMI = weight / (height * height);
    alert("Your Body Mass Index (BMI): " + BMI);
    console.log(BMI);
    if (BMI < 18.5) {
        var weakMessage = alert("Result: You are underweight.");
        console.log(weakMessage);
    } else if (BMI > 18.5 && BMI < 25) {
        var healthyMessage = alert("Result: You are in a healthy weight range.");
        console.log(healthyMessage);
    } else if (BMI > 25 && BMI < 30) {
        var overweightMessage = alert("Result: You are overweight.");
        console.log(overweightMessage);
    } else if (BMI > 30 && BMI < 35) {
        var obeseMessage1st = alert("Result: You are in the 1st degree of obesity.");
        console.log(obeseMessage1st);
    } else if (BMI > 35 && BMI < 40) {
        var obeseMessage2nd = alert("Result: You are in the 2nd degree of obesity. You should see a doctor and maintain regular exercise.");
        console.log(obeseMessage2nd);
    } else if (BMI > 40 && BMI < 45) {
        var obeseMessage3rd = alert("Result: You are in the 3rd degree of obesity. You should see a doctor and maintain regular exercise. The situation is serious and may require medical intervention.");
        console.log(obeseMessage3rd);
    } else {
        loginErrorMessage = alert("Please enter a valid input.");
        console.log(loginErrorMessage);
    }
}

BMICalculator();

/*
Result interpretation:
If BMI < 18.5: Underweight
If 18.5 < BMI < 25: Normal weight
If 25 < BMI < 30: Overweight
If 30 < BMI < 35: 1st degree of obesity
If 35 < BMI < 40: 2nd degree of obesity
If 40 < BMI < 45: 3rd degree of obesity
*/
