import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './services/api-time';

function App() {

  const  [weather, setWeather] = useState(null)
  const city = 'Americana'

  async function handleGetWeather() {
    const response = await api.get(city)
    console.log(response.data)
    setWeather(response.data)

  }

  useEffect(() => {
    handleGetWeather()
  })
  
  return (
    <div id="app">
      <div id="container">

        {weather &&
          <main>

            <h1>{city}</h1>

            <section className="current-weather">
              <h2>Current Weather</h2>
              <p className="p-temp">{weather.temperature}</p>
              <p className="p-desc">{weather.description}</p>
            </section>

            <section className="forecast">
              <h2>Forecast</h2>
              <ol>
              {
                weather.forecast.map(day =>
                  <li>
                    <p>{day.temperature}</p>
                    <p>{day.wind}</p>
                  </li>  
                )
              }
              </ol>
            </section>

          </main>
        }
      </div>
    </div>
  );
}

export default App;
