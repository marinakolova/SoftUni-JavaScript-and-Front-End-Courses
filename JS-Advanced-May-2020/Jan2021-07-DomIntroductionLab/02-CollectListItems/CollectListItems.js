function extractText() {
    let list = document.getElementById('items');
    let text = list.children[0].innerText;

    for (let i = 1; i < list.childElementCount; i++) {
        text += '\n';
        text += list.children[i].innerText;        
    }

    let textArea = document.getElementById('result');
    textArea.value = text;
}
