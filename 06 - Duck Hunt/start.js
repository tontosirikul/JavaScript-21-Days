(() => {
  // เริ่มเขียนโค้ด
  function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function createDucks() {
    const ducks = [...Array(5)].map(() => {
      return {
        // fly from left to right
        x: random(0, window.innerWidth),
        // fly from buttom
        y: window.innerHeight,
        sp,
      };
    });
    console.log(ducks);
  }
  function run() {
    createDucks();
  }
  run();
})();
