(() => {
  // start coding
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    // current date time
    const now = new Date().getTime();
    // goal date time
    const newYear = new Date("December 31, 2020 23:59:59").getTime();
    // remaining date time
    const unixTimeLeft = newYear - now;

    setElementInnerText("days", Math.floor(unixTimeLeft / DAY));
    setElementInnerText("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
    setElementInnerText("minutes", Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElementInnerText(
      "seconds",
      Math.floor((unixTimeLeft % MINUTE) / SECOND)
    );
  }
  function run() {
    countDown();
    // call countDown every 1 sec
    setInterval(countDown, SECOND);
  }
  run();
})();
