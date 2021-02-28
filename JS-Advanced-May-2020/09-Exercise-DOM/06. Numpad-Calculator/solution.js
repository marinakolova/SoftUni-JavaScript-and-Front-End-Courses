function solve() {  
    let clearBtn = document.querySelector('#calculator > div.top > button');
   
    clearBtn.addEventListener('click', () => {
      document.getElementById('expressionOutput').textContent = '';
      document.getElementById('resultOutput').textContent = '';
    });
   
    let equalBtn = document.querySelector('#calculator > div.keys > button:nth-child(15)');
   
    equalBtn.addEventListener('click', () => {
      let expression = document.getElementById('expressionOutput').textContent;
      let charCode = expression.charCodeAt(expression.length - 1);
   
      document.getElementById('resultOutput').textContent = '';
   
      if (charCode >= 48 && charCode <= 57) {
        document.getElementById('resultOutput').textContent = eval(expression);
      }
      else {
        document.getElementById('resultOutput').textContent = 'NaN';
      }
    });
   
    let allBtns = document.querySelectorAll('#calculator > div.keys > button');
    allBtns = Array.from(allBtns).filter(b => b.value !== '=');
   
    allBtns.forEach(button => {
      button.addEventListener('click', () => {
        let mathOperators = ['+', '-', '*', '/'];
   
        if (mathOperators.includes(button.value)) {
          document.getElementById('expressionOutput').textContent += ` ${button.value} `;
        }
        else {
          document.getElementById('expressionOutput').textContent += button.value;
        }
      });
    });
}
