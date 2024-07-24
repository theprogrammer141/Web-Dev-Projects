let gamePattern = [];
let userClickedPattern = [];

let gameStart = false;
let level = 0;

let buttonColors = ["red", "blue", "green", "yellow"];

document.addEventListener("keypress", () =>{
    if(!gameStart){
        document.querySelector("h1").innerText = "Level" + "  " + level;
        nextSequence();
        gameStart = true;
    }
});

for(let i = 0; i < document.querySelectorAll(".button").length; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", () =>{
        let userChosenColor = document.querySelectorAll(".button")[i].getAttribute("id");
        userClickedPattern.push(userChosenColor);

        checkAnswer(userClickedPattern.length-1);
    });
}

function nextSequence(){
    level++;
    document.querySelector("h1").innerText = "Level" + "  " + level;

    var randomNumber = Math.round(Math.random() * 3);
    
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    let chosenButton = document.querySelector("#" + randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(chosenButton);
    animatePress(chosenButton);
}

function playSound(name){    
    if(name === document.querySelector("#green")){
        let greenSound = new Audio("./Sounds/green.mp3");
        greenSound.play();
    }
    else if(name === document.querySelector("#red")){
        let redSound = new Audio("./Sounds/red.mp3");
        redSound.play();
    }
    else if(name === document.querySelector("#yellow")){
        let yellowSound = new Audio("./Sounds/yellow.mp3");
        yellowSound.play();
    }
    else if(name === document.querySelector("#blue")){
        let blueSound = new Audio("./Sounds/blue.mp3");
        blueSound.play();
    }

    if(name === document.querySelector("#green").addEventListener("click", function(){
        let greenSound = new Audio("./Sounds/green.mp3");
        greenSound.play();
    }));
    else if(name === document.querySelector("#red").addEventListener("click", function(){
        let redSound = new Audio("./Sounds/red.mp3");
        redSound.play();
    }));
    else if(name === document.querySelector("#yellow").addEventListener("click", function(){
        let yellowSound = new Audio("./Sounds/yellow.mp3");
        yellowSound.play();
    }));
    else if(name === document.querySelector("#blue").addEventListener("click", function(){
        let blueSound = new Audio("./Sounds/blue.mp3");
        blueSound.play();
    }));    
}

function animatePress(currentColor){
        if(currentColor === document.querySelector("#green").addEventListener("click", function(){
            document.querySelector("#green").classList.add("pressed");
            setTimeout(() =>{
                document.querySelector("#green").classList.remove("pressed");
            }, 200);
        }));
        else if(currentColor === document.querySelector("#red").addEventListener("click", function(){
            document.querySelector("#red").classList.add("pressed");
            setTimeout(() =>{
                document.querySelector("#red").classList.remove("pressed");
            }, 200);
        }));
        else if(currentColor === document.querySelector("#yellow").addEventListener("click", function(){
            document.querySelector("#yellow").classList.add("pressed");
            setTimeout(() =>{
                document.querySelector("#yellow").classList.remove("pressed");
            }, 200);
        }));
        else if(currentColor === document.querySelector("#blue").addEventListener("click", function(){
            document.querySelector("#blue").classList.add("pressed");
            setTimeout(() =>{
                document.querySelector("#blue").classList.remove("pressed");
            }, 200);            
        }));
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() =>{
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    }
    else{
        let wrongAnswer = new Audio("./Sounds/wrong.mp3");
        wrongAnswer.play();

        document.body.classList.add("game-over");
        setTimeout(() =>{
            document.body.classList.remove("game-over");
        },200);

        document.querySelector("h1").innerText = "Game Over, Press any key to restart!";

        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    gameStart = false;
}

