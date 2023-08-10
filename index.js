var randomnumber1 = Math.floor(Math.random()*6)+1;

var radsrc = "images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",radsrc);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var radsrc2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",radsrc2);

if (randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Won !";
}
else if (randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Won !";
}
else
{
    document.querySelector("h1").innerHTML = "Draw !";
}