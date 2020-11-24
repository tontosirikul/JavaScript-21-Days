(() => {
  // start coding
  function setup() {
    // access to element of canvas  by canvas DOM
    // returb element of falling-snow-canvas
    const canvas = document.getElementById("falling-snow-canvas");
    // set height and width of canvas by window's size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // return obj to use (canvas, context and number of snow balls)
    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowBalls: 250,
    };
  }
  // function for random position of the snow (used in createSnowBalls)
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function createSnowBalls(canvas, numberOfSnowBalls) {
    // ES6 array, which return x and y by using map
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        // random value of snow
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speedX: random(-5, 5),
        speedY: random(1, 3),
      };
    });
  }
  // function to draw snowball which receive canvasContext and each snowball
  function drawSnowBall(canvasContext, snowBall) {
    // tell canvas we gonna start drawing
    canvasContext.beginPath();
    // draw a circle by passing x y size and start stop angle
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
    // fill color
    canvasContext.fillStyle = `rgba(255, 255,255, ${snowBall.opacity})`;
    canvasContext.fill();
  }
  function moveSnowBall(canvas, snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;

    // if snowball is out of window send it back
    if (snowBall.x > canvas.width) {
      snowBall.x = 0;
    } else if (snowBall.x < 0) {
      snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height) {
      snowBall.y = 0;
    }
  }
  function run() {
    // keep setup return into const var
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    // calling createSnowBalls and passing value
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    // draw the snowballs
    setInterval(() => {
      // clear every 50 sec
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
    }, 50);
  }
  // run the script
  run();
})();
