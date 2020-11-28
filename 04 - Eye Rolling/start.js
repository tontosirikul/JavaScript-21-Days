(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyElem = document.querySelector("body");
    // get .eye class
    const eyeElems = document.querySelectorAll(".eye");

    // page X and Y give us mouse position
    function onMouseMove({ pageX, pageY }) {
      // get position of each eye
      eyeElems.forEach((eyeElem) => {
        // get distance from top left to an eye
        const { left, top } = eyeElem.getBoundingClientRect();
        // from left side of the eye plus half of the eye
        const eyeCenterX = left + eyeElem.offsetWidth / 2;
        const eyeCenterY = top + eyeElem.offsetHeight / 2;
        // mouse x and mouse y with offset
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
        // cal rad to degree
        const angle = ((radian * 180) / Math.PI) * -1;
        // use style method move
        eyeElem.style.transform = `rotate(${angle}deg)`;
      });
    }
    // mouse move is built-in parameter
    bodyElem.addEventListener("mousemove", onMouseMove);
  }
  run();
})();
