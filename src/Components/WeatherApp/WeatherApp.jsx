import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from '../Assets/loupe.png'
import sun from '../Assets/sun.png'
import cloud from '../Assets/cloudy.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'

const WeatherApp = () => {
let api_key = '2f87eeb2b5450ad6354d1a65846ff57a';
const [wicon ,setWicon] = useState(sun)


 const search =async ()=>{
    const element = document.getElementsByClassName('city-name')
    if(element[0].value ===''){
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let responce = await fetch(url);
    let data = await responce.json();
    const humid = document.getElementsByClassName('humidity-p')
    const windsp = document.getElementsByClassName('windspeed') 
    const temperature = document.getElementsByClassName('weather-temp')
    const location = document.getElementsByClassName('weather-location')

    
    if(data.weather[0].icon=='01d' || data.weather[0].icon == '01n' || data.weather[0].icon=='02d' || data.weather[0].icon == '02n'){
        setWicon(sun)
    }
    else if(data.weather[0].icon=='03d' || data.weather[0].icon == '03n' || data.weather[0].icon=='04d' || data.weather[0].icon == '04n'){
        setWicon(cloud)
    }
    else if(data.weather[0].icon=='09d' || data.weather[0].icon == '09n'){
        setWicon(drizzle)
    }
    else if(data.weather[0].icon=='10d' || data.weather[0].icon == '10n' || data.weather[0].icon=='11d' || data.weather[0].icon == '11n'){
        setWicon(rain)
    }
    else if(data.weather[0].icon=='13d' || data.weather[0].icon == '13n' || data.weather[0].icon=='50d' || data.weather[0].icon == '50n'){
        setWicon(snow)
    }

    humid[0].innerHTML = data.main.humidity+ '%';
    windsp[0].innerHTML = data.wind.speed + ' Km/H';
    temperature[0].innerHTML =data.main.temp + '°c';
    location[0].innerHTML = data.name;
 }
  return (
    <div className='container'>
        
        <div className='top-bar'>
            <input type='text' className='city-name' placeholder='Search city'/>
            <div className='search-icon' onClick={()=>{search()}}>
                <img src={search_icon} alt='icon' />
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon}/>
        </div>
        <div className='weather-temp'>0°c</div>
        <div className='weather-location'>City</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity} className='icon' />
                <div className='data'>
                    <div className='humidity-p'>0%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind} className='icon' />
                <div className='data'>
                    <div className='windspeed'>0kmph</div>
                    <div className='text'>Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp