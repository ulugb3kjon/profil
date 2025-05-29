const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let squares = [];

for (let i = 0; i < 250; i++) {
  squares.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speed: Math.random() * 1.5 + 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00f0ff';

  for (let square of squares) {
    ctx.fillRect(square.x, square.y, square.size, square.size);
    square.y += square.speed;
    if (square.y > canvas.height) {
      square.y = 0;
      square.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
