import React from 'react';
import { useState,useEffect,useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/actions/fetchWeather';
import './WeatherApp.css';
import cloudy from '../Weather-sunny.png';
import sunny from '../sunnyimage.jpeg';
import rainy from '../rainy image.jpeg';
import cold from '../cold image.jpeg';


function WeatherApp() {
    const[city,setCity] = useState("");
    const weatherSelector = useSelector((state) =>state);
    const dispatch = useDispatch();
    const inputRef = useRef("");
    const WeatherInfoAction = (city) =>dispatch(fetchWeather(city));
    useEffect(() =>{
        WeatherInfoAction("chennai");

    },[]);

  const WeatherInfo = (e) =>{
    e.preventDefault();
        if(city === ""){
        alert("plese enter some location");
          
    }
else{
        WeatherInfoAction(city);
         console.log(weatherSelector.weatherinfo);
         inputRef.current.value = "";
        }
}
let weatherimage;
if(weatherSelector.weatherinfo && weatherSelector.weatherinfo.main){
    const images= Math.round(weatherSelector.weatherinfo.main.temp)

    if(images>25){
        weatherimage=sunny;
    }
    else if(images>=20 && images<=25){
        weatherimage=cloudy;
    }
    else if(images>=10 && images <=20){
        weatherimage = rainy;
    }
    else{
        weatherimage= cold;
    }
}

let details ="";
if(weatherSelector.weatherinfo && weatherSelector.weatherinfo.main){
    details =  
    <div className='details'>
        <img src = "{weatherimage}" alt ="sunnyimage" />
        <p className='location'>{weatherSelector.weatherinfo.name}</p>
        <p className='value'>{Math.round(weatherSelector.weatherinfo.main.temp)}&#176;C</p>
    </div>
}else{
    details = <p className='errormsg'>enter city name correctly</p>
}
   return (
    <div className='container'>
       <h1 className='heading'>Weather App</h1>
       <div className='weather'>
            <div className='search'>
                <input type ="text" className="textbox" placeholder='Enter City' ref= { inputRef} onChange={(event) =>setCity(event.target.value)}/>
                <button  className='button' onClick={WeatherInfo} >Get</button>
                </div>
                </div>

                {details}         
    </div>
  );
}
export default WeatherApp;