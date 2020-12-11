(() => {
  // เริ่มเขียนโค้ด
  // 1. Class vs Prototype
  class Person {}
  const tanhapon = new Person();
  console.log(tanhapon);

  // 2. What's prototype?
  const name = "tanhapon";
  console.log(name.__proto__);
  const arr = [];
  console.log(arr.__proto__);

  // 3. Prototype chain
  const name = "tanhapon";
  console.log(name.__proto__);
  // name doesn't have method toLocaleString but it can find from __proto__
  console.log(name.toLocaleString());

  // 4. Extend a prototype
  const name = "tanhapon";
  function sayHello(val) {
    console.log(`Hello${val}`);
  }
  // extend prototype (add method)
  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello("world");
})();
