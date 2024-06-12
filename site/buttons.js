let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  var audio = document.getElementById("earth");
  audio.play();
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  var audio = document.getElementById("fire");
  audio.play();
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  var audio = document.getElementById("wind");
  audio.play();
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  var audio = document.getElementById("water");
  audio.play(); 
});
