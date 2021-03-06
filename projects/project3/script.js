window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var getWeatherButton = document.getElementById('get-weather');
var recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = true;

//var words; //= document.querySelector('.words');
var p = document.createElement('p');


// работаем с этой функцией, сюда засунем распознавание речи
function choiseCityOrLocation() {
    alert('For choice your city use a voice after this message');
    recognition.start();
    recognition.addEventListener('result', function (event) {
    p.innerText = Array
        .from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (result) {
            return result.transcript;
        })



    if(event.results[0].isFinal) {
        p = document.createElement('p');

    } console.log(p);
})

    // var locationQuestion = prompt('Enter city name', '');
    // if (locationQuestion === null) {
    //     alert('Weather will be show from your location');
    //     getLocationCoords();
    // } else {
    //     getWeatherDataCityName(locationQuestion);
    // }

}

function getWeatherDataCityName(cityName) {
    try {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=08d1316ba8742c08076e7425c28c2614')
            .then(function responseShow(response) {
                return response.json();
            })
            .then(function (data) {
                displayData(data);
            })

// catch не работает, не ловит ошибку из response
    } catch (e) {
        if (e instanceof TypeError) {
            alert(e);
        }
    }
}


function getLocationCoords() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}

function getWeatherData(latitude, longitude) {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
}

function displayData(data) {
    temperature.innerText = transformKelvinToCelcius(data.main.temp) + '\u2103';
    windSpeed.innerText = data.wind.speed + ' km/h';
    humidity.innerText = data.main.humidity + ' %';
    pressure.innerText = data.main.pressure + ' GPa';
}

function transformKelvinToCelcius(Kelvin) {
    return Math.round(Kelvin - 273);
}

getWeatherButton.addEventListener('click', choiseCityOrLocation);





// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//
// var recognition = new SpeechRecognition();
// recognition.lang = 'en-US';
// recognition.interimResults = true;
//
// var words = document.querySelector('.words');
// var p = document.createElement('p');
// words.appendChild(p);
//
// recognition.addEventListener('result', function (event) {
//     p.innerText = Array
//         .from(event.results)
//         .map(function (result) {
//             return result[0];
//         })
//         .map(function (result) {
//             return result.transcript;
//         })
//
//     if(event.results[0].isFinal) {
//         p = document.createElement('p');
//         words.appendChild(p);
//     }
// })
//
// // recognition.addEventListener('end', recognition.start);
// // recognition.start();