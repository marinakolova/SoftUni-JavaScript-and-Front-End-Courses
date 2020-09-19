function extractText() {
    let listItems = document.querySelectorAll("#items li");
    let text = "";

    for (const el of listItems) {
        text += el.textContent + "\n";
    }

    document.getElementById("result").value = text;
}