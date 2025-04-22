const dialogueElement = document.getElementById("dialogue");
const characterImage = document.getElementById("character");
const nextButton = document.getElementById("next-btn");

const dialogues = [
  {
    text: "وای باورم نمیشه بعد مدت ها...",
    img: "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/naziH.png"
  },
  {
    text: "وااااای باورم نمیشه... ما بردیم...",
    img: "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/naziE.png"
  },
  {
    text: "هوف... چه داستانی شدا... من موندم با اینهمه کتاب... اینارو کی بخونه...",
    img: "https://raw.githubusercontent.com/Amir24NZ/nazi/refs/heads/main/img/naziE.png"
  }
];

let currentDialogue = 0;

nextButton.addEventListener("click", () => {
  currentDialogue++;
  if (currentDialogue < dialogues.length) {
    characterImage.src = dialogues[currentDialogue].img;
    dialogueElement.textContent = dialogues[currentDialogue].text;
  } else {
    nextButton.style.display = "none";
    dialogueElement.textContent = "END : created by amir nz";
  }
});
