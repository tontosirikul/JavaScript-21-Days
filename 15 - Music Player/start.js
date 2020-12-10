(() => {
  // เริ่มเขียนโค้ด
  const audioElem = document.querySelector("audio");
  const playBtnElem = document.querySelector(".play");
  const progressBarElem = document.querySelector(".progress-bar");
  const startTimeElem = document.querySelector(".start-time");
  const endTimeElem = document.querySelector(".end-time");

  function onClick() {
    if (audioElem.paused) {
      audioElem.play();
      playBtnElem.className = "pause";
    } else {
      audioElem.pause();
      playBtnElem.className = "play";
    }
  }

  // convert float to time
  function getDuration(time) {
    const minutes = Math.floor((time / 60) % 60).toString();
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  function onTimeUpdate() {
    startTimeElem.innerHTML = getDuration(audioElem.currentTime);
    progressBarElem.value = audioElem.currentTime;
  }

  function onLoadedData() {
    endTimeElem.innerHTML = getDuration(audioElem.duration);
    progressBarElem.max = audioElem.duration;
  }

  function onInput() {
    audioElem.currentTime = progressBarElem.value;
  }

  function onEnded() {
    playBtnElem.className = "play";
    audioElem.currentTime = 0;
  }

  function run() {
    playBtnElem.addEventListener("click", onClick);
    audioElem.addEventListener("timeupdate", onTimeUpdate);
    audioElem.addEventListener("loadeddata", onLoadedData);
    audioElem.addEventListener("ended", onEnded);

    progressBarElem.addEventListener("input", onInput);
  }
  run();
})();
