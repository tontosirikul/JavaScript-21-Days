(() => {
  // api key variable
  const KEY = "16e9c31f-f7c0-44ec-a859-33a82c60cff5";

  async function getAirQuality({ city, state, country }) {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
    );
    // destructure result
    const {
      data: { current },
    } = await response.json();
    const { weather, pollution } = current;
    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws,
    };
  }
  function displayAirQuality({
    city,
    state,
    country,
    aqi,
    temperature,
    humidity,
    wind,
  }) {
    const cityElem = document.querySelector(".city");
    const stateCountryElem = document.querySelector(".state-country");
    const aqiElem = document.querySelector(".aqi > h1");
    const temperatureElem = document.querySelector(".temperature");
    const humidityElem = document.querySelector(".humidity");
    const windElem = document.querySelector(".wind");

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temp: ${temperature}°C`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
  }
  function setAirQualityColor(aqi) {
    if (aqi <= 50) {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        "var(--good-aqi-color)"
      );
    } else if (aqi <= 100 && aqi > 50) {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        "var(--medium-aqi-color)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        "var(--bad-aqi-color)"
      );
    }
  }
  async function run() {
    const city = "Lat krabang";
    const state = "Bangkok";
    const country = "Thailand";

    // ยิง api เป็น Obj
    const { aqi, temperature, humidity, wind } = await getAirQuality({
      city,
      state,
      country,
    });

    displayAirQuality({
      city,
      state,
      country,
      aqi,
      temperature,
      humidity,
      wind,
    });
    setAirQualityColor(aqi);
  }
  run();
})();
