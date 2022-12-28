
// adding eventlistener to the button / detecting button press
var numOfBtns = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
        // this.style.color = "white";

        // console.log(this);
        // console.log(this.innerHTML);

        // alert("clicked");
    });
}


// adding eventlistener to the keyboard / detecting keyboard press
document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    
    btnAnimation(e.key);
    // console.log(e);
    // alert("Key pressed");
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default: console.log(btnInnerHTML);
            break;
    }

}

function btnAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.toggle("pressed");
    setTimeout(() => {
        activeBtn.classList.toggle("pressed");
    }, 200);
}

// // constructor function
// function Employee(name, age, city, origin) {
//     this.name = name,
//     this.age = age,
//     this.city = city,
//     this.origin = origin,
//     this.employeeTransfer = function () {
//         return `${this.name} has been transferred from ${this.city} to another office branch in a different city.`
//     }
// }

// // create objects from the constuctor function above
// var employee1 = new Employee("Emeka Mmaduka", 33, "Awka", "Nigeria");
// var employee2 = new Employee("Joy Okeke", 30, "Enugu", "Nigeria");
// var employee3 = new Employee("Amada Amelia", 25, "Georgia", "US");
// console.log(employee1);
// console.log(employee2);
// console.log(employee3);
// console.log(employee1.name);
// console.log(employee2.name);
// console.log(employee3.name);
// console.log(employee1.employeeTransfer());
// console.log(employee2.employeeTransfer());
// console.log(employee3.employeeTransfer());



// // eg of higher order functions and passing functions as arguments
// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function minus(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function calculator(a, b, operator) {
//     return operator(a, b);
// }

// alert(calculator(4, 5, multiply));