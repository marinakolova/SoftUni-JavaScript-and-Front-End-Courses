function addItem() {
    let itemText = document.getElementById('newItemText').value;
    
    let newItem = document.createElement('li');
    newItem.textContent = itemText;
    
    document.getElementById('items').appendChild(newItem);
}
