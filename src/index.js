function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;

  resetTransition();

  audio.currentTime = 0;
  audio.play();
  document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add("playing");
  console.log(audio);
}

function resetTransition() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.classList.remove("playing");
  });
}

  
window.addEventListener('keydown', playSound);