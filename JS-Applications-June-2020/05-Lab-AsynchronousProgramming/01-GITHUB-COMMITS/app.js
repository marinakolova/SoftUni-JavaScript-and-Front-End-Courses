function loadCommits() {
    // TODO: Try it with Fetch API

    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener('readystatechange', () => {
        if (xmlHttpRequest.readyState === 4) {
            if (xmlHttpRequest.status === 200) {
                let response = JSON.parse(xmlHttpRequest.responseText);
                let result = '';
                response.forEach(element => {
                    result += `<li>${element.commit.author.name}: ${element.commit.message}</li>`;
                    document.getElementById('commits').innerHTML = result;
                });
            } else {
                document.getElementById('commits').innerHTML = `<li>Error: ${xmlHttpRequest.status} (${xmlHttpRequest.statusText})</li>`;
            }
        }
    });

    xmlHttpRequest.open('GET', url);
    xmlHttpRequest.send();
}
