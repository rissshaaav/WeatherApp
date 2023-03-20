import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AirConditions from './components/AirConditions/AirConditions';
import Glance from './components/Glance/Glance';
import Searchbar from './components/Searchbar/Searchbar';
import SideNav from './components/SideNav/SideNav';
import TodaysForecast from './components/TodaysForecast/TodaysForecast';
import WeekForecast from './components/WeekForecast/WeekForecast';

function App() {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('Muzaffarpur');
    const apiKey = '560b8061ef91f0291908c8f0b0ee4b97';

  const cityNameHandler = (cityName) => {
    setCity(cityName);
  }

  const apiCall = async() =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const req = axios.get(url);
      const res = await req;
      setWeather({
          descp: res.data.weather[0].description,
          temp: parseFloat(res.data.main.temp-273.15).toFixed(2),
          city: res.data.name,
          humidity: res.data.main.humidity,
          press: res.data.main.pressure,
          real_feel: parseFloat(res.data.main.feels_like-273.15).toFixed(2),
          wind_speed: res.data.wind.speed
      })
  }
  useEffect(() => {
      apiCall();
  },[city])

  console.log(weather.realFeel);
  console.log('weather '+ weather.descp);
  console.log('temp '+ weather.temp);
  console.log('humidity '+ weather.humidity);
  console.log('pressure '+ weather.press);

  return (
    <div className="App">
      <Searchbar cityNameHandler={cityNameHandler} className='app-item'/>
      <SideNav className='app-item'/>
      <Glance city={city} temp={weather.temp} className='app-item'/>
      <TodaysForecast className='app-item'/>
      <AirConditions real_feel={weather.real_feel} wind_speed={weather.wind_speed} className='app-item'/>
      <WeekForecast className='app-item'/>
    </div>
  );
}

export default App;
