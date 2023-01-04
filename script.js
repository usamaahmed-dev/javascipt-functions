function addition() {
    let num1 = Number(prompt("Enter first value"));
    let num2 = Number(prompt("Enter second value"));

    document.getElementById("result").innerText = num1 + " + " + num2 + " = " + num1 + num2;
}

function subtraction() {
    let num1 = prompt("Enter first value");
    let num2 = prompt("Enter second value");

    document.getElementById("result").innerText = num1 + " - " + num2 + " = " + num1 - num2;
}

function multiplication() {
    let num1 = prompt("Enter first value");
    let num2 = prompt("Enter second value");

    document.getElementById("result").innerHTML = num1 + " x " + num2 + " = " + num1 * num2;
}

function division() {
    let num1 = prompt("Enter first value");
    let num2 = prompt("Enter second value");

    document.getElementById("result").innerHTML = num1 + " / " + num2 + " = " + num1 / num2;
}