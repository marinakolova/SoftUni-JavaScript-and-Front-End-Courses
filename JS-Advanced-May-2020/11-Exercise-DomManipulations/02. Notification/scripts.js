function notify(message) {    
    let notificationElem = document.getElementById('notification');
    notificationElem.innerHTML = message;
    notificationElem.style.display = 'block';
    setTimeout(function() { 
        notificationElem.style.display = 'none'; 
    }, 2000);
}
