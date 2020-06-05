btn.onclick = function(){
    let city = input.value;
    console.log(city);
    let xhr = new XMLHttpRequest();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`;
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.responseText;
            // console.log(response);
            let results = JSON.parse(response);
            console.log(results);
            result.innerHTML +=
                `
                <div>
                    <h2>${results.name}</h2>
                    <p>clouds ${results.clouds.all}</p>
                    <p>feels_like ${results.main.feels_like}</p>
                    <p>humidity ${results.main.humidity}</p>
                    <p>pressure ${results.main.pressure}</p>
                    <p>temp ${results.main.temp}</p>
                    <p>weather ${results.weather[0].main}</p>
                    <p>weather ${results.weather[0].description}</p>
                    <p>wind ${results.wind.speed}</p>
                </div>   
                `
        }
    };
    xhr.onerror = function() {
        alert(`Network Error`);
    };
};
