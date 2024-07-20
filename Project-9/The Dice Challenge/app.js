let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageNumber1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomImageNumber1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

let randomNumber2 = Math.ceil(Math.random() * 6);

let randomImageNumber2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomImageNumber2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

function winner(){
    let winner = document.querySelector("h1");
    if(randomImageNumber1 > randomImageNumber2){
        winner.innerText = "Player 1 wins!";
    }
    else if(randomImageNumber2 > randomImageNumber1){
        winner.innerText = "Player 2 wins!";
    }
    else if(randomImageNumber1 == randomImageNumber2){
        winner.innerText = "Draw!";
    }
}

winner();