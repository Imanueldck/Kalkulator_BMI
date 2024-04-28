// script.js
document.getElementById("calculateBtn").addEventListener("click", function () {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100; // convert to meters
  var bmi = weight / (height * height);
  var resultElement = document.getElementById("result");

  if (isNaN(bmi)) {
    resultElement.innerHTML = '<div class="alert alert-danger">Mohon masukkan berat dan tinggi yang valid.</div>';
  } else {
    var bmiCategory = "";
    if (bmi < 18.5) {
      bmiCategory = "Berat badan kurang";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = "Normal (ideal)";
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = "Kelebihan berat badan";
    } else {
      bmiCategory = "Obesitas";
    }

    resultElement.innerHTML = '<div class="alert alert-success">BMI Anda: ' + bmi.toFixed(2) + " (" + bmiCategory + ")</div>";
  }
});
