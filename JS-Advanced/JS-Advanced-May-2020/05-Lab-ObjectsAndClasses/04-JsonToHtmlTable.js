function solve(json) {
    let text = JSON.parse(json);

    let result = "";

    result += "<table>\n";
    result += "   <tr>";

    for (const key in text[0]) {
        if (text[0].hasOwnProperty(key)) {
            result += `<th>${key}</th>`;
        }
    }

    result += "</tr>\n";

    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        result += "   <tr>";

        for (const value in element) {
            let cellValue = String(element[value])
                .replace(/&/gim, '&amp;')
                .replace(/</gim, '&lt;')
                .replace(/>/gim, '&gt;')
                .replace(/"/gim, '&quot;')
                .replace(/'/gim, '&#39;');

            result += `<td>${cellValue}</td>`;
        }

        result += "</tr>\n"
    }

    result += "</table>";

    console.log(result);
}
