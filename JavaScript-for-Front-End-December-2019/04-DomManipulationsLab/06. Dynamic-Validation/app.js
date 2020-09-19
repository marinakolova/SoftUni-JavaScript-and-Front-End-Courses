function validate() {    
    let emailElem = document.getElementById('email');
    emailElem.addEventListener('change', ()=>{
      let currentValue = emailElem.value;
      let regex =/^[a-z]+@[a-z]+\.[a-z]+$/gsi;
      if(regex.test(currentValue)){
          emailElem.classList.remove('error');
      }else{
          emailElem.classList.add('error');
      }
    });
}