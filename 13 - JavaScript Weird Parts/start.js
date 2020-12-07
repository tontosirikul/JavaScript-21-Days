(() => {
  // เริ่มเขียนโค้ด
  // 1. NaN (Not a number)
  // It would say false to prevent missed calculation
  if (Nan / Nan === 1) {
    console.log("It should not be true");
  }
  // checking for Nan
  const result = 1 / "hello";
  if (Number.isNaN(result)) {
    console.log("NaN");
  }
  // 2. Type Coercion
  if (1 < 2 < 3) {
    console.log("inside");
  }
  if (3 > 2 > 1) {
    // 3>2 = True --> True(1) > 1 ? == False
    console.log("True");
  }
  // js change string to number
  console.log(2 - "1");
  // js change number to string
  console.log(2 + "1");
  // use this to ensure type
  console.log(2 + Number.parseInt("1", 10));
  // true = 1 + true = 1 = 2
  console.log(true + true);
  // 3. Interpreter & Compiler
  function getPerson() {
    return {
      name: "Tanhapon",
    };
  }
  console.log(getPerson);
  // 4. Checking Object Type
  const person = {};
  // const person = null;
  if (typeof person == "object" && person != null) {
    console.log("Yes, object.");
  } else {
    console.log("No, It's null.");
  }
})();
