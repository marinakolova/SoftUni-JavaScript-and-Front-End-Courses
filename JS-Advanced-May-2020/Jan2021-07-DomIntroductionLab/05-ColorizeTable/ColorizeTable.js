function colorize() {
    let tableRows = Array.from(document.getElementsByTagName("tr"));

    for (let i = 1; i < tableRows.length; i += 2) {
        tableRows[i].style.backgroundColor = "teal";
        
    }
}
