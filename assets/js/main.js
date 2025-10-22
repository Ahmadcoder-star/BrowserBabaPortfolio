// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Typing Text
const typedText = document.getElementById("typed-text");
const words = ["Frontend Developer", "UI Designer", "Creative Coder","Photo Editor"];
let i = 0;
setInterval(() => {
  typedText.textContent = words[i];
  i = (i + 1) % words.length;
}, 2000);
