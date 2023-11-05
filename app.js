const API_KEY = `3fb7ce2f4e6b32f038e86986499af9cd`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


 


 //this function will fetch city Weather details through api bye searching its name 
 const getWeather = async (city)=>{
    weather.innerHTML = `<h2>Loading.....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` 
    const response = await fetch(url)
    const data = await response.json()
    return showWeather(data)

 }
 const showWeather = (data) => {
    console.log(data);
    if(data.cod == "404"){      //if tere is city name not return properly then this function exicute
        weather.innerHTML = `<h2>City Not Found</h2>`
       return;
    }
    weather.innerHTML = `         
         <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} °C</h2>
            <h4>${data.weather[0].main}</h4>
           
        </div>
    `
 }


//search function
 form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
 )
