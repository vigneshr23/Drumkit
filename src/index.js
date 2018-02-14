function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;

  audio.currentTime = 0;
  audio.play();
  console.log(audio);
}

const keys = document.querySelectorAll(".keys");
  console.log(keys);
  keys.forEach(function(key) {
    console.log(key);
    //key.
  });
window.addEventListener('keydown', playSound);