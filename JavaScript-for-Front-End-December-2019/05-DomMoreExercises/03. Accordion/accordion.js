function toggle() {    
    let spanButton = document.getElementsByClassName('button')[0];
    let extraDiv = document.getElementById('extra');
      if(spanButton.textContent === 'More'){
        extraDiv.style.display = 'block';
        spanButton.textContent = 'Less'
      }else{
        extraDiv.style.display = 'none';
        spanButton.textContent = 'More'
      }
}