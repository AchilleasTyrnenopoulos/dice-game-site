//generate random number
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

//array with dices pics
var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

//set img's src attribute
document.querySelector(".img1").setAttribute("src", dices[randomNumber1]);
document.querySelector(".img2").setAttribute("src", dices[randomNumber2]);

//anounce winner or draw
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}

