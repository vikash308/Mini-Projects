const playPauseBtn = document.getElementById("playPauseBtn");
  const playIcon = document.getElementById("playIcon");

  let isPlaying = false;

  playPauseBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
      
    } else {
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  });