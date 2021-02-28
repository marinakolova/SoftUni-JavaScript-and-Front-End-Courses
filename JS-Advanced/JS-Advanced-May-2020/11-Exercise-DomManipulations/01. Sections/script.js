function create(words) {   
   for (const text of words) {
      let divElem = document.createElement('div');

      let paragraphElem = document.createElement('p');
      paragraphElem.textContent = text;
      paragraphElem.style.display = 'none';

      divElem.appendChild(paragraphElem);

      divElem.addEventListener('click',(e)=> {
          e.target.firstChild.style.display = 'inline-block'
          
      });

      document.getElementById('content').appendChild(divElem);
  }
}
