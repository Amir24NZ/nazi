const startDialogueBtn = document.getElementById('start-dialogue-btn');
const dialogueText = document.getElementById('dialogue-text');
const startGameBtn = document.getElementById('start-game-btn');

const dialogue = " سلام... من نازی‌ام (ملقب به هیتلر 😁). من توی دنیایی هستم که کتابامو توش گم کرم... کمکم کن 124 تا کتابمو پیدا کنم تا از این دنیا خلاض بشم.... راستی مراقب باش کتاب ها پایین نیفته یا به اشک ها برخورد نکنی چون کارمون خیلی سخت میشه...";
let index = 0;

startDialogueBtn.addEventListener('click', () => {
  startDialogueBtn.style.display = 'none';
  dialogueText.style.display = 'block';
  typeDialogue();
});

function typeDialogue() {
  if (index < dialogue.length) {
    dialogueText.innerHTML += dialogue.charAt(index);
    index++;
    setTimeout(typeDialogue, 70);
  } else {
    startGameBtn.style.display = 'block';
  }
}

startGameBtn.addEventListener('click', () => {
  window.location.href = "Game.html"; // اینجا فایل HTML بازی رو باز می‌کنه
});

