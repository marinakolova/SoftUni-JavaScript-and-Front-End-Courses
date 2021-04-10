function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   const xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.addEventListener('readystatechange', () => {
      if (xmlHttpRequest.readyState === 4) {
         if (xmlHttpRequest.status === 200) {
            document.getElementById('res').textContent = xmlHttpRequest.responseText;
         } else {
            console.log(`Status code: ${xmlHttpRequest.status}`)
         }
      }
   });

   xmlHttpRequest.open('GET', url);
   xmlHttpRequest.send();
}
