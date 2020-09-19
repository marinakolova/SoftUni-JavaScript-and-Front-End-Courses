function addItem() {
    let itemText = document.getElementById('newText').value;
    
    let newItem = document.createElement('li');
    newItem.textContent = itemText;
    
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.setAttribute('href', '#');
    deleteLink.addEventListener('click', (e)=> {
        e.target.parentNode.remove();
    })
    
    newItem.appendChild(deleteLink);
    
    document.getElementById('items').appendChild(newItem);
}