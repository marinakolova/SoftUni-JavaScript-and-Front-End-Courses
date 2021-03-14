function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searched = document.getElementById('searchField').value;

      document.getElementById('searchField').value = '';
      Array.from(document.querySelector('tbody').children).map(x => {
         if (x.classList.contains('select')) {
            x.classList.remove('select');
         }
      });

      Array.from(document.querySelector('tbody').children).map(x => {
         if (x.innerHTML.includes(searched)) {
            x.classList.add('select');
         }
      });
   }
}
