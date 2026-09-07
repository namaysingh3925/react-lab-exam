import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [weather, setWeather] = useState([]);

  useEffect(() => {

    const weatherData = [
      {
        city: "Bengaluru",
        temperature: "28°C",
        condition: "Sunny"
      },
      {
        city: "Mumbai",
        temperature: "31°C",
        condition: "Cloudy"
      },
      {
        city: "Delhi",
        temperature: "35°C",
        condition: "Hot"
      },
      {
        city: "Chennai",
        temperature: "30°C",
        condition: "Humid"
      }
    ];

    setWeather(weatherData);

  }, []);

  return (
    <div className="container">

      <h1>Weather Information Dashboard</h1>

      {weather.map((item, index) => (
        <div className="card" key={index}>

          <h2>{item.city}</h2>

          <p>Temperature: {item.temperature}</p>

          <p>Condition: {item.condition}</p>

        </div>
      ))}

    </div>
  );
}

export default App;
