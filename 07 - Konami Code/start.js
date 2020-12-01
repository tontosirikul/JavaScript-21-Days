(() => {
  // if user activates konami code, start the falling snow
  // create array for key
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  let index = 0;

  function onKeyDown(event) {
    // check for konami code
    event.key === konamiCode[index] ? index++ : (index = 0);

    if (konamiCode.length === index) {
      startSnowing();
    }
  }

  function run() {
    document.addEventListener("keydown", onKeyDown);
  }
  run();
})();
