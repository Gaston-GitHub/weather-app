import './App.css';
import './index.css';
import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys';


class App extends Component {

    state = {
      temperature: "",
      description: "",
      humidity: "",
      wind_speed: "",
      city: "",
      country: "",
      error: null,

    };


    getWeather =async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        console.log(cityValue, countryValue);
        console.log(city, country)

        if (cityValue && countryValue) {

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&APPID=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        console.log(this.state)

        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          error: null,

        }, () => console.log(this.state))

        } else {
          this.setState({error: 'Please enter a city and a country'})
        }

        
      }

    render() {
      return (
        <div className="container mx-auto">
          
              <WeatherForm getWeather={this.getWeather} />
              <WeatherInfo {...this.state} />


        </div>
      )
    }
}
  


export default App;
