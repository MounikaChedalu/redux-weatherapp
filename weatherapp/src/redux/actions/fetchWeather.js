export function fetchWeather(city){
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc9e4f95072d9afac4ce9a6a9426d5d8&units=metric`)
        .then(res =>{
            return res.json();
        })
        .then(JSONres =>{
            dispatch({type:'FETCH_WEATHER',payload:JSONres});
           
        })
        .catch(err =>{
            console.log(err);
        })
    }
}