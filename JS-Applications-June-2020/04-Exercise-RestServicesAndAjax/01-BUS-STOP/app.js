function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`; // http://localhost:8000/businfo/${stopId}
    // The webhost will respond with valid data to IDs 1287, 1308, 1327 and 2334.

    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener('readystatechange', () => {
        if (xmlHttpRequest.readyState === 4) {
            if (xmlHttpRequest.status === 200) {
                let response = JSON.parse(xmlHttpRequest.responseText);
                document.getElementById('stopName').innerText = response.name;

                let busesList = '';
                for (let i = 0; i < Object.keys(response.buses).length; i++) {
                    let currKey = Object.keys(response.buses)[i];
                    busesList += `<li>Bus ${currKey} arrives in ${response.buses[currKey]} minutes.</li>`;
                }
                document.getElementById('buses').innerHTML = busesList;
            } else {
                document.getElementById('stopName').innerText = 'Error';
                document.getElementById('buses').innerHTML = '';
            }
        }
    });

    xmlHttpRequest.open('GET', url);
    xmlHttpRequest.send();
}
