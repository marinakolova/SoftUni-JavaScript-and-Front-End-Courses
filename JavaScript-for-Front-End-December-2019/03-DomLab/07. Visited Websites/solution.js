function solve() {
  let sites = document.querySelectorAll('.link-1');
 
  for (let site of sites){
    let theLink = site.children[0];
    let theCounter = site.children[1];
    theLink.addEventListener('click', clickEvent);
  };
 
  function clickEvent() {
    let theCounter = this.parentElement.children[1];
    let text = theCounter.innerHTML.toString();
    let number = text.match(/\d+/)[0];
    text = text.replace(number, (+number + 1).toString());
    theCounter.innerHTML = text;
  };
}