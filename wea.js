function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '79eb67a2842d6c9383fd44f80e4b4cd1'; // Replace 'YOUR_API_KEY' with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Update weather information in the UI
            
            const temperatureElement = document.querySelector('.temperature');
            const descriptionElement = document.querySelector('.description');
            const humidityElement = document.querySelector('.info-humidity span');
            const windElement = document.querySelector('.info-wind span');
            const weatherIcon = document.querySelector('.weather img');
            const cityname = document.querySelector('.city');
          
            temperatureElement.innerHTML = `${data.main.temp}<span>°C</span>`;
            descriptionElement.textContent = data.weather[0].description;
            humidityElement.textContent = `${data.main.humidity}%`;
            windElement.textContent = `${data.wind.speed} m/s`;
            
            cityname.textContent=city;
            // Set weather icon
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            weatherIcon.src = iconUrl;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching weather data. Please try again.');
        });
}
