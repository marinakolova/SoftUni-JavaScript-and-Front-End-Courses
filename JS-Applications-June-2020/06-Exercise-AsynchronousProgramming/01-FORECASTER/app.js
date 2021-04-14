import el from './dom.js';
import * as data from './fetch.js';
// import * as data from './data.js';

const symbols = {
    'Sunny': '&#x2600;', // ☀
    'Partly sunny': '&#x26C5;', // ⛅
    'Overcast': '&#x2601;', // ☁
    'Rain': '&#x2614;', // ☂
    'Degrees': '&#176;' // °
};

window.addEventListener('load', () => {
    const input = document.getElementById('location');
    const mainDiv = document.getElementById('forecast');
    const todayDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    document.getElementById('submit').addEventListener('click', getForecast);

    async function getForecast() {
        todayDiv.innerHTML = `<div class="label">Current conditions</div>`;
        upcomingDiv.innerHTML = `<div class="label">Three-day forecast</div>`;
        mainDiv.style.display = 'none';

        const locationName = input.value;
        let code = '';

        try {
            code = await data.getCode(locationName);
        } catch (error) {
            todayDiv.innerHTML = 'Error';
            upcomingDiv.innerHTML = '';
            mainDiv.style.display = 'block';
        }

        const todayP = data.getToday(code);
        const upcomingP = data.getUpcoming(code);

        const [today, upcoming] = [
            await todayP,
            await upcomingP
        ];

        const symbolSpan = el('span', '', { className: 'condition symbol' });
        symbolSpan.innerHTML = symbols[today.forecast.condition];

        const degreesSpan = el('span', '', { className: 'forecast-data' });
        degreesSpan.innerHTML = `${today.forecast.low}${symbols.Degrees}/${today.forecast.high}${symbols.Degrees}`;

        todayDiv.appendChild(el('div', [
            symbolSpan,
            el('span', [
                el('span', today.name, { className: 'forecast-data' }),
                degreesSpan,
                el('span', today.forecast.condition, { className: 'forecast-data' })
            ], { className: 'condition' })
        ], {
            className: 'forecast'
        }));

        const forecastInfoDiv = el('div', upcoming.forecast.map(renderUpcoming), { className: 'forecast-info' });
        upcomingDiv.appendChild(forecastInfoDiv);

        mainDiv.style.display = 'block';
    }

    function renderUpcoming(forecast) {
        const symbolSpan = el('span', '', { className: 'symbol' });
        symbolSpan.innerHTML = symbols[forecast.condition];

        const degreesSpan = el('span', '', { className: 'forecast-data' });
        degreesSpan.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;

        const result = el('span', [
            symbolSpan,
            degreesSpan,
            el('span', forecast.condition, { className: 'forecast-data' })
        ], {
            className: 'upcoming'
        });

        return result;
    }
});
