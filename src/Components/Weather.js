import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const display = useSelector(selectDisplay);
  const { latlng } = display.capitalInfo;
  const [latitude, longitude] = latlng;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://weatherapi-com.p.rapidapi.com/current.json",
          {
            params: { q: `${latitude}, ${longitude}` },
            headers: {
              "X-RapidAPI-Key": "79ccfaed23msh682b7ea8536df9ap1dae16jsn6b9c2dd76294",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
          }
        );
        console.log(response.data);
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <div>
      <table className="overview-table">
        <tbody>
          <tr>
            <td>Conditions: </td>
            <td>{weather?.current?.condition?.text}</td>
          </tr>
          <tr>
            <td>Temperature: </td>
            <td>{weather?.current?.temp_f} degrees Fahrenheit</td>
          </tr>
          <tr>
            <td>Feels Like: </td>
            <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
          </tr>
          <tr>
            <td>Humidity: </td>
            <td>{weather?.current?.humidity}%</td>
          </tr>
          <tr>
            <td>Wind Speed: </td>
            <td>
              {weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
