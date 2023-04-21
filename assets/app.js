const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "f778cc95e6bde9064241d8969dc9abff"


const input = document.querySelector("input")
const searchBtn = document.querySelector("button")
const weatherPics = document.querySelector("main")





const checkWeather = async (city) => {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
        var data = await response.json()

        if(response.status == 200){
                
          
        const cityName = data.name
        document.querySelector(".city").innerHTML = cityName

        // document.querySelector(".city").innerHTML = data.name 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".speed").innerHTML = data.wind.speed + "KM/HR"


        // the background images
        const bgPics = ["/assets/img/clear.jpeg", "/assets/img/cloud.jpeg", "/assets/img/drizzle.jpeg", "/assets/img/mist.jpeg", "/assets/img/rain.jpeg", "/assets/img/snow.jpeg"]
        // console.log(bgPics)

        if(data.weather[0].main == "Clear"){
                weatherPics.style.backgroundImage = `url(${bgPics[0]})`
        }
        else if(data.weather[0].main == "Clouds"){
                weatherPics.style.backgroundImage = `url(${bgPics[1]})`
        }
        else if(data.weather[0].main == "Drizzle"){
                weatherPics.style.backgroundImage = `url(${bgPics[2]})`
        }
        else if(data.weather[0].main == "Mist"){
                weatherPics.style.backgroundImage = `url(${bgPics[3]})`
        }
        else if(data.weather[0].main == "Rain"){
                weatherPics.style.backgroundImage = `url(${bgPics[4]})`
        }
        else if(data.weather[0].main == "Snow"){
                weatherPics.style.backgroundImage = `url(${bgPics[5]})`
        }
        
        

        }else{
                // will handled error later
        }




}


searchBtn.addEventListener("click", () => {
        checkWeather(input.value)
})
