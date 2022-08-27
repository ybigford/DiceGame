
//player 1

let randomNum1 = Math.floor(Math.random() * 6) + 1;

let randomImage = "dice" + randomNum1 + ".png";

let randomImageSource = "images/" + randomImage;

let image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomImageSource);




//player 2"

let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//who wins?

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

else if (randomNum2 > randomNum1) {

    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}


//button

let btn = document.querySelector('btn');

document.addEventListener("click", randomdices);
    
function randomdices() {

    location.reload();

}


    