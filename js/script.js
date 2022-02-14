alert("This code helps you to calculte de Body Mass Index");


weight = prompt("Please enter your weight in kilograms:");
height = prompt("Please enter your height in meters:");

let bodyMassIndex = (weight / (height * height)).toFixed(2);
alert("Your BMI is " + bodyMassIndex);

let local = document.getElementById("geolocation");

document.getElementById("bmi").innerHTML = "Your BMI result is: " + bodyMassIndex + ".";

if (bodyMassIndex < 18.5) {
    alert("You're underweight.");
} else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
    alert("Your weight is considered normal.");
} else if (bodyMassIndex >= 25.0 && bodyMassIndex <= 29.9) {
    alert("You're overweight.");
} else if (bodyMassIndex >= 30.0) {
    alert("You're obese.");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        local.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    local.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
