var noOfDrumButtons = document.querySelectorAll(".drum").length;
var buttons= document.querySelectorAll(".drum");
var buttonDict = {}; // Create an empty dictionary

// Populate dictionary with button text as key and button element as value
buttons.forEach(button => {
    buttonDict[button.innerHTML.trim()] = button;
});
for (var i=0 ; i < noOfDrumButtons ;i++){
    buttons[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        this.classList.add("lifted"); // Add lift effect

        // Remove lift effect after 2 seconds
        setTimeout(() => {
            this.classList.remove("lifted");
        }, 500);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonDict[event.key].classList.add("lifted"); // Add lift effect

    // Remove lift effect after 2 seconds
    setTimeout(() => {
        buttonDict[event.key].classList.remove("lifted");
    }, 500);
})
function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        default:
            console.log("hello")
    }
}