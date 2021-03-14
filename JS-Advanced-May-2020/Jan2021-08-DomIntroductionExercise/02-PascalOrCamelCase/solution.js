function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let span = document.getElementById('result');

  let arr = input.toLowerCase().split(' ');
  let result = '';

  if (currentCase === 'Camel Case') {
    result += arr[0];
  } else if (currentCase === 'Pascal Case') {
    result += arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  } else {
    span.innerText = 'Error!';
    return;
  }

  for (let i = 1; i < arr.length; i++) {
    result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);    
  }

  span.innerText = result;
}
