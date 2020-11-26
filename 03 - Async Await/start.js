(() => {
  // เริ่มเขียนโค้ด
  // 1. How Asynchronous code works in JavaScript
  // function simulateAsyncAPI(text, timeout) {
  //   setTimeout(() => console.log(text), timeout);
  // }
  // simulateAsyncAPI("a", 1000);
  // simulateAsyncAPI("b", 500);
  // simulateAsyncAPI("c", 100);
  // 2. Callback
  // function simulateAsyncAPI(text, timeout, callback) {
  //   setTimeout(() => {
  //     console.log(text);
  //     if (callback) {
  //       callback();
  //     }
  //   }, timeout);
  // }
  // // Callback hell ( a lot of loop)
  // simulateAsyncAPI("A", 1000, () => {
  //   simulateAsyncAPI("B", 500, () => {
  //     simulateAsyncAPI("C", 100);
  //   });
  // });
  // 3. Promise
  // function simulateAsyncAPI(text, timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === "B") return reject("B got rejected");
  //       console.log(text);
  //       // tell promise that the work is done
  //       resolve();
  //     }, timeout);
  //   });
  // }
  // // no need to pass callback
  // // need chaining, which hard to see
  // simulateAsyncAPI("A", 1000).then(() => {
  //   return simulateAsyncAPI("B", 500).then(() => {
  //     return simulateAsyncAPI("C", 100).catch((error) => {
  //       console.error(error);
  //     });
  //   });
  // });
  // 4. Async/Await
  // function simulateAsyncAPI(text, timeout) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (text === "B") return reject("B got rejected");
  //       console.log(text);
  //       // tell promise that the work is done
  //       resolve();
  //     }, timeout);
  //   });
  // }
  // async function run() {
  //   try {
  //     await simulateAsyncAPI("A", 1000);
  //     await simulateAsyncAPI("B", 500);
  //     await simulateAsyncAPI("C", 100);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // run();
})();
