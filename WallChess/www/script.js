document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  drawBoard();
});

document.getElementById("rules-btn").addEventListener("click", () => {
  alert("Rules:\n1. Move your pawn to reach the opposite side.\n2. Place walls to block opponent.\n3. First to reach wins!");
});

function drawBoard() {
  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d");
  const size = 600;
  const cells = 9; // Quoridor board is 9x9
  const cellSize = size / cells;

  ctx.fillStyle = "#f4d19b"; // board background
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;

  for (let i = 0; i <= cells; i++) {
    let pos = i * cellSize;
    ctx.beginPath();
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, pos);
    ctx.lineTo(size, pos);
    ctx.stroke();
  }
}
