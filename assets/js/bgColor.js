export function bgcolor(newTemp, allTimes) {
    let bgColor = document.getElementsByClassName('weather');
    let logoTemp = document.createElement('img');
    logoTemp.classList.add('logotemp');

    let i = 0;

    let bg = bgColor[bgColor.length - 1];

    if (allTimes[0].weather[0].main == "Clouds") {
        bg.style.background = 'url(/assets/img/clouds.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/cloudslogo.png');

    }

    else if (allTimes[0].weather[0].main == "Thunderstorm") {
        bg.style.background = 'url(/assets/img/thunderstorm.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/thunderstormlogo.png');
    }
    else if (allTimes[0].weather[0].main == "Drizzle") {
        bg.style.background = 'url(/assets/img/rain.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/rainlogo.png');
    }
    else if (allTimes[0].weather[0].main == "Rain") {
        bg.style.background = 'url(/assets/img/rain.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/rainlogo.png');
    }
    else if (allTimes[0].weather[0].main == "Snow") {
        bg.style.background = 'url(/assets/img/snow.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/snowlogo.png');
    }
    else if (allTimes[0].weather[0].main == "Mist") {
        bg.style.background = 'url(/assets/img/mist.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/mistlogo.png');
    }
    else if (allTimes[0].weather[0].main == "Clear") {
        bg.style.background = 'url(/assets/img/clearSky.jpg)';
        bg.style.backgroundSize = 'cover';
        logoTemp.setAttribute('src', '/assets/img/sunlogo.png');
    }

    newTemp.appendChild(logoTemp);
}