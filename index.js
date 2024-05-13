var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomSrc1 = "images/"  + randomImage1;
var randomSrc2 = "images/"  + randomImage2;
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomSrc1);
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomSrc2);

   var winnerCond = document.querySelector("h1");

if(randomNumber1>randomNumber2){
    winnerCond.innerHTML="Player1 wins!!";
   }else if (randomNumber1 == randomNumber2){
       
       winnerCond.innerHTML="Draw!!";
   } else{
       winnerCond.innerHTML="Player2 wins!!";
   }