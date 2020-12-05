(() => {
  // เริ่มเขียนโค้ด
  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll("section"));
    sectionElems.forEach((sectionElem) => {
      const imageElem = sectionElem.querySelector("img");
      const textElem = sectionElem.querySelector(".text");

      const scrollPosition = window.pageYOffset;
      const revealPosition = imageElem.offsetTop + imageElem.offsetHeight / 10;

      if (scrollPosition >= revealPosition) {
        textElem.classList.add("reveal");
      }
    });
  }
  function run() {
    document.addEventListener("scroll", onScroll);
  }
  run();
})();
