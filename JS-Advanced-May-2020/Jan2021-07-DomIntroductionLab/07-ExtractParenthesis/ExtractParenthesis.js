function extract(content) {
    let txt = document.getElementById(content).innerText;
    
    let result = [];
    
    var newTxt = txt.split('(');
    for (var i = 1; i < newTxt.length; i++) {
        result.push(newTxt[i].split(')')[0]);
    }

    return result.join('; ');
}
