function sumTable() {
    let tableCols = Array.from(document.getElementsByTagName("td"));
    let sum = 0;
    for (let i = 1; i < tableCols.length; i += 2) {
        sum += Number(tableCols[i].innerText);        
    }
    document.getElementById('sum').innerText = sum;
}
