var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomimage = "dice" + randomNumber1 + ".png";
var randomsrc = "images/" + randomimage

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsrc);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomimage1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimage1 );

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw";
}