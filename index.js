let apikey = "335a12159a0b77ca4a9f5285adf215cf";
let api = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=335a12159a0b77ca4a9f5285adf215cf";
let weather = document.querySelector("#weather");
let screen = document.querySelector("#screen")

async function call() {
   let Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${screen.value}&appid=335a12159a0b77ca4a9f5285adf215cf`)
   let data =  await Response.json()
   
   document.querySelector("#temp").innerHTML = data.main.temp;
   document.querySelector("#coun").innerHTML = data.name;
   document.querySelector("#hum").innerHTML = data.main.humidity;
   document.querySelector("#speed").innerHTML = data.wind.speed
   
   if(data.weather[0].main == "Clear"){
        weather.src = "clear.png";
   }
   else if(data.weather[0].main == "Clouds"){
        weather.src = "clouds.png";
   }
   else if(data.weather[0].main == "Drizzle"){
        weather.src = "drizzle.png";
   }
   else if(data.weather[0].main == "Smoke"){
        weather.src = "mist.png";
   }
   else if(data.weather[0].main == "Rain"){
        weather.src = "rain.png";
   }
}

