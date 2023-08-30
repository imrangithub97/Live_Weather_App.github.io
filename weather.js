let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "65c03264c049c0fd5878e58b8c575b53";

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);

    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if (jsonData.cod == 400) {
        alert("Please Enter Location")
        image.src = "Images/error-400.png"
        city.innerHTML = "search";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsonData.cod == 404) {
        alert("Please Enter Right Location")
        image.src = "Images/error-404.png"
        city.innerHTML = "search";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    
    city.innerHTML = jsonData.name;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        image.src = "Images/Clouds.png"
    } else if (type.innerHTML == "Clear") {
        image.src = "Images/Clears.png"
    } else if (type.innerHTML == "Rain") {
        image.src = "Images/rain.png"
    } else if (type.innerHTML == "Snow") {
        image.src = "Images/snow.png"
    } else if (type.innerHTML == "Haze") {
        image.src = "Images/haze.png"
    } else if (type.innerHTML == "Strom") {
        image.src = "Images/strom.png"
    } else if (type.innerHTML == "Dust/Wind") {
        image.src = "Images/wind.png"
    }
    input.value = ""
}
function myFun() {
    search = input.value;
    data(search)
}
