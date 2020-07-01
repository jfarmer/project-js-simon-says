const greenButton = document.querySelector(".simon-button.green");
const redButton = document.querySelector(".simon-button.red");
const yellowButton = document.querySelector(".simon-button.yellow");
const blueButton = document.querySelector(".simon-button.blue");

greenButton.addEventListener('click', function () {
  alert('You clicked the green button');
});

redButton.addEventListener('click', function () {
  alert('You clicked the red button');
});

yellowButton.addEventListener('click', function () {
  alert('You clicked the yellow button');
});

blueButton.addEventListener('click', function () {
  alert('You clicked the blue button');
});
