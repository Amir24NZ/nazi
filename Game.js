const player = document.getElementById("player");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

let isDragging = false;
let offsetX = 0;
let score = 0;

const books = [
  "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/book1.png",
  "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/book2.png",
  "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/book3.png",
  "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/book4.png"
];
const dropImg = "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/drop.png";

// به‌روز رسانی امتیاز
function updateScore(value) {
  score += value;
  if (score < 0) score = 0;
  scoreDisplay.textContent = `امتیاز: ${score}`;
  if (score >= 124) {
    window.location.href = "end.html";
  }
}

// بررسی برخورد
function isColliding(a, b) {
  return !(
    a.bottom < b.top ||
    a.top > b.bottom ||
    a.right < b.left ||
    a.left > b.right
  );
}

// ساخت آیتم جدید
function createItem() {
  const item = document.createElement("div");
  item.classList.add("item");

  // احتمال 80٪ کتاب - 20٪ اشک
  const isBook = Math.random() < 0.8;
  if (isBook) {
    const src = books[Math.floor(Math.random() * books.length)];
    item.dataset.type = "book";
    item.style.backgroundImage = `url(${src})`;
  } else {
    item.dataset.type = "drop";
    item.style.backgroundImage = `url(${dropImg})`;
  }

  // موقعیت افقی تصادفی
  const maxLeft = gameArea.clientWidth - 40;
  item.style.left = `${Math.floor(Math.random() * maxLeft)}px`;

  gameArea.appendChild(item);

  let topPos = 0;
  const fallSpeed = 2 + Math.random(); // سرعت تصادفی

  const interval = setInterval(() => {
    topPos += fallSpeed;
    item.style.top = `${topPos}px`;

    const playerRect = player.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    if (isColliding(playerRect, itemRect)) {
      if (item.dataset.type === "book") {
        updateScore(5);
      } else {
        updateScore(-5);
      }
      item.remove();
      clearInterval(interval);
    }

    if (topPos >= gameArea.clientHeight - 40) {
      if (item.dataset.type === "book") {
        updateScore(-3);
      }
      item.remove();
      clearInterval(interval);
    }
  }, 20);
}

// هر 1.5 ثانیه یه آیتم بساز
setInterval(createItem, 1500);

// درگ با تاچ برای گوشی
player.addEventListener("touchstart", function(e) {
  isDragging = true;
  offsetX = e.touches[0].clientX - player.offsetLeft;
});

document.addEventListener("touchmove", function(e) {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX - offsetX;
  const maxLeft = gameArea.clientWidth - player.offsetWidth;
  const clampedX = Math.max(0, Math.min(touchX, maxLeft));
  player.style.left = `${clampedX}px`;
});

document.addEventListener("touchend", function() {
  isDragging = false;
});
