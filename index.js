let choices = ["Rock", "Paper", "Scissors"];
let picks = document.getElementById("picks");
let result = document.getElementById("result");

let RNG = function() {
  return Math.round(Math.random() * 2);
};

let playerChoice = function(e) {
  let player = e.target.id;
  return player;
}

let computerChoice = function() {
  let computer = RNG();
  return computer;
}

let showChoices = function(player, computer) {
  let text = "The Player chose: " + choices[player] + ". The Computer chose: " + choices[computer] + ".";
  picks.innerHTML = text;
}

let game = function(e) {
  let player = playerChoice(e);
  let computer = computerChoice();
  let display = result.style.display;
  showChoices(player, computer);

  if (player === computer) {
    result.innerHTML = "Draw!";
  } else if (player === computer+1 || player === computer-2) {
    result.innerHTML = "Player Wins!";
  } else {
    result.innerHTML = "Computer Wins!";
  };
}

let animate = function() {
  let display = result.style.display;

  if (display == "none") {
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }
}

setInterval(animate, 500);
document.addEventListener("click", game);
