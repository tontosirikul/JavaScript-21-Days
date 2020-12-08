(() => {
  // เริ่มเขียนโค้ด

  let currentIndex = 0;

  function displayImage(imageElems, newIndex) {
    last_index = imageElems.length - 1;
    //check for first index
    if (newIndex < 0) {
      newIndex = last_index;
    } else if (newIndex > last_index) {
      newIndex = 0;
    }
    const newImage = imageElems[newIndex];
    newImage.scrollIntoView({ behavior: "smooth" });

    // update index
    currentIndex = newIndex;
  }
  function run() {
    const imageElems = document.querySelectorAll("img");
    const previousBtnElem = document.querySelector(".previous");
    const nextBtnElem = document.querySelector(".next");

    previousBtnElem.addEventListener("click", () =>
      displayImage(imageElems, currentIndex - 1)
    );
    nextBtnElem.addEventListener("click", () =>
      displayImage(imageElems, currentIndex + 1)
    );
  }
  run();
})();
