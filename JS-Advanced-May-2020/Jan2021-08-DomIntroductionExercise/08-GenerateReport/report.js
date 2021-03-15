function generateReport() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    let selected = Array.from(checkboxes)
        .map((x, i) => [x, i])
        .filter(x => x[0].checked)
        .map(x => [x[0].name, x[1]])

    let rows = document.getElementsByTagName("tr");

    let rowData = Array.from(rows)
        .slice(1)
        .map(x => Array.from(x.children).map(y => y.innerHTML))

    document.getElementById("output").value = JSON.stringify(
        rowData.map(x =>
            selected.reduce((a, v) => {
                const [sColName, sColIndex] = v
                a[sColName] = x[sColIndex]
                return a
            }, {})
        )
    )
}
