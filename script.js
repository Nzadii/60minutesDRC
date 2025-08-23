const video = document.getElementById("promo-video");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", function () {
  video.muted = false;
  video.play();
  overlay.classList.add("hidden"); // Fade out overlay
});
