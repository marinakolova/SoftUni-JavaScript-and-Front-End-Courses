function increment(selector) {
  const container = document.querySelector(selector);
  const fragment = document.createDocumentFragment();

  const textArea = document.createElement('textarea');
  textArea.value = 0;
  textArea.className = 'counter';
  textArea.setAttribute('disabled', true);

  let list = document.createElement('ul');
  list.className = 'results';

  const incrementBtn = document.createElement('button');
  incrementBtn.textContent = 'Increment';
  incrementBtn.className = 'btn';
  incrementBtn.setAttribute('id', 'incrementBtn');

  const addBtn  = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.className = 'btn';
  addBtn.setAttribute('id', 'addBtn');

  // add our elements to the DOM:
  fragment.appendChild(textArea);
  fragment.appendChild(incrementBtn);
  fragment.appendChild(addBtn);
  fragment.appendChild(list);
  container.appendChild(fragment);
  
  document.getElementById('incrementBtn').addEventListener('click', plusOne);
  document.getElementById('addBtn').addEventListener('click', listIncr);
  
  function plusOne() {
    textArea.value = +textArea.value + 1;
  }
  
  function listIncr() {
    const li = document.createElement('li');
    li.textContent = textArea.value;
    list.appendChild(li);
  }
}
