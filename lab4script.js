function alertName() {
    const name = document.getElementById('name').value;
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Please enter your name.");
    }
}
let isBlue = true;
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;
}
function validateText() {
    const inputText = document.getElementById('inputText').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(inputText)) {
        alert("Your text contains special characters!");
    } else {
        alert("No special characters detected.");
    }
}
function addText() {
    const heading = document.getElementById('page-heading');
    heading.textContent += " Add Text";
}