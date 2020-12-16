(() => {
  // เริ่มเขียนโค้ด
  const KEY = "9WdH1oGxMvZVlCTbJiSCdJ_CTl2JiJoGdypkikFKFTM";
  const loaderElem = document.querySelector(".loader");
  let page = 1;

  function showLoader() {
    loaderElem.classList.add("visible");
  }

  function hideLoader() {
    loaderElem.classList.remove("visible");
  }

  // told js this is async function
  async function displayImages() {
    showLoader();

    // wait for fetch to finished
    const result = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
    );
    const images = await result.json();

    const galleryElem = document.querySelector(".gallery");

    images.forEach((image) => {
      const imageElem = document.createElement("img");
      imageElem.src = image.urls.small;
      galleryElem.appendChild(imageElem);
    });

    hideLoader();
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      page += 1;
      displayImages();
    }
  }

  function run() {
    document.addEventListener("scroll", onScroll);
    displayImages();
  }
  run();
})();
