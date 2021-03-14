function solve() {
  let text = document.getElementById('input').value;
  let sentancesArr = text
    .split('.')
    .filter(x => x.length >= 1)
    .map(x => x.trim());

  let paragraphsCount = Math.ceil(sentancesArr.length / 3);
  
  let result = '';

  for (let i = 0; i < paragraphsCount; i++) {
    if (sentancesArr.length >= 3) {
      result += `<p>${sentancesArr.shift()}. ${sentancesArr.shift()}. ${sentancesArr.shift()}. </p>`;
    } else if (sentancesArr.length === 2) {
      result += `<p>${sentancesArr.shift()}. ${sentancesArr.shift()}. </p>`;
    } else if (sentancesArr.length === 1) {
      result += `<p>${sentancesArr.shift()}.</p>`;
    }      
  }

  document.getElementById('output').innerHTML = result;
}
