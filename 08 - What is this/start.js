(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  function printName() {
    console.log(this);
    console.log(`My name is ${this.name}`);
  }
  // 2. How to know what is "this"?
  // object.function
  //// 2.1 Invoker object
  const tanhapon = { name: "Tanhapon", printName };
  const napasorn = { name: "Napasorn", printName };
  printName();
  tanhapon.printName();
  napasorn.printName();
  //// 2.2 Global object (window, global)
  name = "Global";
  printName();
  // 2.3 Constructor function
  function Person(name) {
    this.name = name;
    this.printName = printName;
  }

  const tanhapon = new Person("Tanhapon");
  tanhapon.printName();
  // 3. call(), apply(), and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(
      `My name is ${this.name}, I'm ${nationality} and liveing in ${city}`
    );
  }
  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);

    const printTanhaponName = printName.bind(this);
    printTanhaponName("Thai", "Buriram");
  }

  const tanhapon = new Person("Tanhapon", "Thai", "Buriram");
})();
