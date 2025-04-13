const reasons = [
  "My day starts with your text🌞",
  "You support me in every situation 🛡️",
  "You care for me more than you do to yourself 😍",
  "You're my favorite person ❤️",
  "You're my biggest cheerleader 📣",
  "You are cutest girl ✨",
  "You always believe in me, no matter what's the situation 💪",
  "You are my chhutku teddy bear 🧸",
  "You make love feel magical 🪄",
  "Your smile converts my sad face into happy 🌞 ",
  "Your presence in video calls also feels like I'm with you ✨",
  "You make me complete 💑"
];

const images = Array.from({ length: reasons.length }, (_, i) => `images${i + 1}.jpg`);
const container = document.getElementById('cardsContainer');
const progressBar = document.getElementById('progressBar');
const music = document.getElementById('bgMusic');

reasons.forEach((reason, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  if (index === 0) card.classList.add('active');

  card.innerHTML = `
    <div class="inner-card">
      <div class="front">
        <img src="${images[index]}" alt="Image ${index + 1}" />
      </div>
      <div class="back">${reason}</div>
    </div>
  `;

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    // Unlock next only on first flip
    if (!card.dataset.flippedOnce) {
      card.dataset.flippedOnce = true;
      unlockNextCard(index);
    }
  });

  container.appendChild(card);
});

function unlockNextCard(index) {
  const cards = document.querySelectorAll('.card');
  if (index + 1 < cards.length) {
    cards[index + 1].classList.add('active');
  }

  const progress = ((index + 1) / reasons.length) * 100;
  progressBar.style.width = `${progress}%`;

  if (index + 1 === reasons.length) {
    setTimeout(() => {
      alert("I LOVE YOU CHHUTKU ❤️");
    }, 500);
  }
}

// Music toggle
document.getElementById('toggleMusic').addEventListener('click', () => {
  if (music.paused) music.play();
  else music.pause();
});

// Floating Heart Particles
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 20;
  const size = Math.random() * 20 + 10;
  const speed = Math.random() * 1 + 0.5;
  hearts.push({ x, y, size, speed });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    ctx.font = `${heart.size}px serif`;
    ctx.fillStyle = 'rgba(255, 100, 130, 0.7)';
    ctx.fillText('❤️', heart.x, heart.y);
    heart.y -= heart.speed;
    if (heart.y < -20) {
      hearts.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(drawHearts);
}
setInterval(createHeart, 200);
drawHearts();
