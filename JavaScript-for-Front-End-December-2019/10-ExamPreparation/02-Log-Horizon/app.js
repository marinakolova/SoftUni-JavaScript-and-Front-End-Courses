function solve() {

    //Login Functionality

    let loggedUser = "Anonymous";

    let inputField = document.getElementById("username");
    let heading = document.getElementById("username-heading");

    let loginButton = document.getElementById("login");
    loginButton.addEventListener("click", login);

    let logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", logout);

    function login() {
        let username = inputField.value;

        if (username == null || username == "") {
            return;
        }

        heading.textContent = username;
        inputField.setAttribute("style", "display: none;");
        heading.setAttribute("style", "display: inline;");

        loggedUser = username;

        loginButton.setAttribute("style", "display: none;");
        logoutButton.setAttribute("style", "display: inline;");
    };

    function logout() {

        loggedUser = "Anonymous";

        heading.setAttribute("style", "display: none;");
        inputField.value = null;
        inputField.setAttribute("style", "display: inline;");

        logoutButton.setAttribute("style", "display: none;");
        loginButton.setAttribute("style", "display: inline;");
    };

    //Log Message Functionality

    let logMessageButton = document.getElementById("log-message");
    logMessageButton.addEventListener("click", logMessage);

    function logMessage() {

        //get message text

        let textInputFieldValue = document.getElementById("message-text").value;
        let msgText = textInputFieldValue;
        if (textInputFieldValue = null || textInputFieldValue == "") {
            return;
        }

        //get message type and the background style for it

        let selectedRadioButtonValue = document.querySelector('input[name="type"]:checked').value;
        let bgStyle = "";
        switch (selectedRadioButtonValue) {
            case "Success":
                bgStyle = "bg-success";
                break;
            case "Info":
                bgStyle = "bg-info";
                break;
            case "Error":
                bgStyle = "bg-danger";
                break;
        }

        //get the logger

        let logger = loggedUser;

        //create the message box

        let messageBox = document.createElement("div");
        messageBox.className = `row ${bgStyle} rounded py-3 px-2 mx-auto mb-3 text-white text-center`;

        //first column

        let firstCol = document.createElement("div");
        firstCol.className = "col-4 border-right border-dark";        

        let firstColContent = document.createElement("h2");
        firstColContent.className = "d-inline";
        firstColContent.textContent = selectedRadioButtonValue + ": " + msgText;
        firstCol.appendChild(firstColContent);
        messageBox.appendChild(firstCol);

        //second column

        let secondCol = document.createElement("div");
        secondCol.className = "col-4 border-right border-dark";        

        let secondColContent = document.createElement("h2");
        secondColContent.className = "d-inline";
        secondColContent.textContent = logger;
        secondCol.appendChild(secondColContent);
        messageBox.appendChild(secondCol);

        //third column

        let thirdCol = document.createElement("div");
        thirdCol.className = "col-4";        

        let thirdColContent = document.createElement("h2");
        thirdColContent.className = "d-inline archive-btn";
        thirdColContent.textContent = "Archive";
        thirdCol.appendChild(thirdColContent);
        messageBox.appendChild(thirdCol);

        document.getElementById("messages").appendChild(messageBox);

        //make the input field empty, hide the no messages line and display the logged message
        document.getElementById("message-text").value = null;
        document.getElementById("no-messages").setAttribute("style", "display: none;");
        document.getElementById("messages").setAttribute("style", "display: inline;");

        //Archive Messages

        let archiveButtons = document.querySelectorAll(".archive-btn");

        [...archiveButtons].forEach(archiveBtn => {
            archiveBtn.addEventListener("click", archiveMessage);
        });

        function archiveMessage() {
            this.parentElement.parentElement.parentElement.removeChild(messageBox);

            if (document.getElementById("messages").childElementCount == 0) {                
                document.getElementById("messages").setAttribute("style", "display: none;");
                document.getElementById("no-messages").setAttribute("style", "display: inline;");
            };
        };
    };
}