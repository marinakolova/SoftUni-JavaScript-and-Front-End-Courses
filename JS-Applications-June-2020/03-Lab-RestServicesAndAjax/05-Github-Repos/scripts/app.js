function loadRepos() {
	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;

	const xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.addEventListener('readystatechange', () => {
		if (xmlHttpRequest.readyState === 4) {
			if (xmlHttpRequest.status === 200) {
				let response = JSON.parse(xmlHttpRequest.responseText);
				let result = '';
				response.forEach(repo => {
					result += `<li>
					<a href="${repo.html_url}">
						${repo.full_name}
					</a>
				</li>`;
					document.getElementById('repos').innerHTML = result;
				});
			} else {
				document.getElementById('repos').innerHTML = `<li>
				<a href="{repo.html_url}">
					{repo.full_name}
				</a>
			</li>`;
			}
		}
	});

	xmlHttpRequest.open('GET', url);
	xmlHttpRequest.send();
}
