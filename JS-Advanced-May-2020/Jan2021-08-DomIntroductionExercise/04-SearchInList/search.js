function search() {
   let searched = document.getElementById('searchText').value;
   let listItems = document.getElementById('towns').children;
   let matchesCount = 0;

   Array.from(listItems).map(x => {
      if (x.innerHTML.includes(searched)) {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
         matchesCount += 1;
      }
   });

   document.getElementById('result').innerHTML = `${matchesCount} matches found`;
}
