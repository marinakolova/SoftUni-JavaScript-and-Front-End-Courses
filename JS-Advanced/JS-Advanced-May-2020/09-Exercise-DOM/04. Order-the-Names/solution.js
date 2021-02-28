function solve() {
    let addButton = document.getElementsByTagName("button")[0];
    let inputTextElement = document.getElementsByTagName("input")[0];

    let orderListElement = document.getElementsByTagName("ol")[0];
    let listItemElements = orderListElement.getElementsByTagName("li");

    addButton.addEventListener("click", function () {
        let inputName = inputTextElement.value;

        if (inputName) {
            let currentName = "";
            currentName += inputName[0].toUpperCase();

            for (let i = 1; i < inputName.length; i++) {
                currentName += inputName[i].toLowerCase();
            }

            let index = currentName.charCodeAt(0) - 65;

            if (listItemElements[index].textContent.length === 0) {
                listItemElements[index].textContent += currentName;
            } else {
                listItemElements[index].textContent += ", " + currentName;
            }

            inputTextElement.value = null;
        }
    })
}
