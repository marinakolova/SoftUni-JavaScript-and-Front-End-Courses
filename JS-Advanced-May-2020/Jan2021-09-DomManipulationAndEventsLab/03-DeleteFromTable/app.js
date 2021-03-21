function deleteByEmail() {
    let searchedEmail = document.getElementsByTagName('input')[0].value;
       
    let rows = document.getElementsByTagName('tr');
    let matches = [];
    
    for(let index = 1; index < rows.length; index++) {
        let emailColl = rows[index].children[1];
        if(searchedEmail === emailColl.textContent) {
            matches.push(emailColl);
        }
    }
    
    for (const elem of matches) {
        elem.parentElement.remove();
    }
    
    if(matches.length > 0) {
        document.getElementById('result').innerHTML = 'Deleted.';
    } else {
        document.getElementById('result').innerHTML = 'Not found.';
    }
}
