document.getElementById("number-form").onsubmit = function(e) {
  e.preventDefault();
  const p1 = parseFloat(document.getElementById("player1").value);
  const p2 = parseFloat(document.getElementById("player2").value);

  // Only numbers allowed
  if (isNaN(p1) || isNaN(p2)) {
    alert("Please enter valid numbers for both players.");
    return;
  }

  let result;
  if (p1 > p2) result = "Player 1 wins!";
  else if (p2 > p1) result = "Player 2 wins!";
  else result = "It's a tie!";

  document.getElementById("result-message").textContent = result;
  document.getElementById("result-section").style.display = "";
  document.getElementById("number-form").style.display = "none";
};

document.getElementById("restart-btn").onclick = function() {
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  document.getElementById("result-section").style.display = "none";
  document.getElementById("number-form").style.display = "";
};
