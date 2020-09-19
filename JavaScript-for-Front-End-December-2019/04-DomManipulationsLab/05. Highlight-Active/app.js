function focus() {
    let divElements = document.querySelectorAll('div div');
    for (const divElem of divElements) {
      divElem.addEventListener('focus', function(){
          divElem.classList.add('focused');
      });
      divElem.addEventListener('blur', function(){
          divElem.classList.remove('focused');
      });      
    }
}