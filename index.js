var player1 = prompt("what is your first Player's name?");
var player2 = prompt("what is the second Player's name?");

document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;

document.addEventListener("keypress", function(){

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomImage1 = "dice" + randomNumber1 + ".png";
  document.querySelector("img.img1").setAttribute("src", randomImage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  randomImage2 = "dice" + randomNumber2 + ".png";
  document.querySelector("img.img2").setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = player1 + " wins";
  } else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = player2 + " wins";
  } else{
    document.querySelector("h1").innerHTML = "it's a draw";
  };
});
