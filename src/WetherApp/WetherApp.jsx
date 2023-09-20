import React, { useEffect, useState } from "react";
import "./WetherApp.css";
const WetherApp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("delhi");

  const inputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const apicall = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?delhi&units=metric&appid=36c9f09bc27d0a08247d60b86b58cce2`;
      const apiData = (await fetch(url)).json();
      setCity(apiData);
      console.log(apiData.main);
    };
    apicall();
  }, [search]);

  return (
    <>
      <div className="container_fluid">
        <div className="row mx-auto bg-warning">
          <div className="col-md-10 text-center text-white d-flex align-items-center  mx-auto wether-column">
            <div className="wether-box mx-auto ">
              <input
                onChange={inputChange}
                value={search}
                className="wether-input m-3 p-2 "
                type="search"
                placeholder="location..."
              />
              {!city ? (
                <h3>Data not found</h3>
              ) : (
                <div>
                  <div className="wether-animation-box1 mx-auto m-5"></div>
                  <h1 className="wether-heading text-capitalize my-4">
                    {search}
                  </h1>
                  <h2 className="wether_degree m-2">{city.main.temp}°C</h2>
                  <p>min : 20.4 °C | max : 25.4 °C</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WetherApp;
