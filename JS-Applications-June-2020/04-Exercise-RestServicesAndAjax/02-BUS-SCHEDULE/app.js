function solve() {
    const infoBox = document.querySelector('#info .info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let currentId = 'depot';
    let stopName = '';

    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
        // http://localhost:8000/schedule/{currentId}

        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.addEventListener('readystatechange', () => {
            if (xmlHttpRequest.readyState === 4) {
                if (xmlHttpRequest.status === 200) {
                    let response = JSON.parse(xmlHttpRequest.responseText);
                    stopName = response.name;
                    infoBox.innerText = `Next stop ${stopName}`;
                    departBtn.disabled = true;
                    arriveBtn.disabled = false;
                    currentId = response.next;
                } else {
                    infoBox.innerText = 'Error';
                    departBtn.disabled = true;
                    arriveBtn.disabled = true;
                }
            }
        });

        xmlHttpRequest.open('GET', url);
        xmlHttpRequest.send();
    }

    function arrive() {
        infoBox.innerText = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();