(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    "BMW",
    "Maserati",
    "Mercedes Benz",
    "Ferrari",
    "Toyota",
    "Honda",
    "Hyundai",
  ];
  const searchElem = document.querySelector(".search");

  function clearResults() {
    const ulElem = document.querySelector(".results");
    if (ulElem) {
      document.body.removeChild(ulElem);
    }
  }

  function selectCarBrand(event) {
    searchElem.value = event.target.innerText;
    clearResults();
  }

  function onInput(event) {
    clearResults();
    const inputText = event.target.value.toLowerCase();
    const matchCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().startsWith(inputText)
    );

    if (matchCarBrands.length == 0) {
      clearResults;
    } else {
      const ulElem = document.createElement("ul");
      ulElem.classList.add("results");

      matchCarBrands.forEach((carBrand) => {
        const liElem = document.createElement("li");
        liElem.innerText = carBrand;
        liElem.onclick = selectCarBrand;
        ulElem.appendChild(liElem);
      });
      document.body.appendChild(ulElem);
    }
  }

  function run() {
    searchElem.addEventListener("input", onInput);
    document.addEventListener("click", clearResults);
  }
  run();
})();
