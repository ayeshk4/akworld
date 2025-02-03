const words = ["","Developer..", "Designer..","Learner..","Tech Enthusiast..","Math Enthusiast.."];
const typewriter = document.querySelector(".typewriter");

let i = 0; // Tracks the current word
let j = 0; // Tracks the current character of the word
let isDeleting = false; // Tracks whether we are deleting or typing
const speed = 100; // Speed of typing (ms per character)
const pause = 1500; // Pause between words

function type() {
  const currentWord = words[i];
  const displayedText = isDeleting
    ? currentWord.substring(0, j--) // Remove characters
    : currentWord.substring(0, j++); // Add characters

  typewriter.textContent = displayedText;

  // Handle the typing/deleting logic
  if (!isDeleting && j > currentWord.length) {
    isDeleting = true;
    setTimeout(type, pause); // Pause before deleting
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length; // Move to the next word
    setTimeout(type, speed);
  } else {
    setTimeout(type, isDeleting ? speed / 2 : speed); // Speed up deleting
  }
}

type(); // Calling function to trigger typewritter
