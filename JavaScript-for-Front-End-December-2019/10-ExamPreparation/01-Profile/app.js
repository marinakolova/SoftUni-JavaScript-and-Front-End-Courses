function solve() {
    
    //Personal Data Functionality
    
    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let phoneNumber = document.querySelector("#phone-number");
    let uclNum = document.querySelector("#ucl-num");

    firstName.addEventListener("click", changeValue);
    lastName.addEventListener("click", changeValue);
    phoneNumber.addEventListener("click", changeValue);
    uclNum.addEventListener("click", changeValue);

    function changeValue() {
        let input = document.createElement("input");
        input.value = this.textContent;
        input.className = "form-control";

        let idToSet = this.id;

        if (idToSet == "ucl-num") {
            input.setAttribute("type", "number");
        }

        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                let p = document.createElement("p");
                p.id = idToSet;
                p.textContent = input.value;
                this.parentElement.appendChild(p);
                this.parentElement.removeChild(input);
            }
        });
        
        this.parentElement.appendChild(input);
        this.parentElement.removeChild(this);
    };

    //Team and Position Functionality

    let teamRow = document.getElementById("team-row");

    let firstOption = document.getElementById("first-position");
    let secondOption = document.getElementById("second-position");
    let thirdOption = document.getElementById("third-position");

    teamRow.addEventListener("click", checkSelected);

    function checkSelected() {
        let checkedTeamId = document.querySelector('input[name="team"]:checked').id;
        
        switch(checkedTeamId) {
            case "support":
                firstOption.textContent = "Tech Support";
                secondOption.textContent = "Medical Support";
                thirdOption.textContent = "Assistant Support";
                break;
            case "crm":
                firstOption.textContent = "Community Manager";
                secondOption.textContent = "Customer Care Manager";
                thirdOption.textContent = "Lead Administrative Officer";
                break;
            case "marketing":
                firstOption.textContent = "PR Manager";
                secondOption.textContent = "Social Media Manager";
                thirdOption.textContent = "Marketing Specialist";
                break;
            case "development":
                firstOption.textContent = "Junior Developer";
                secondOption.textContent = "Regular Developer";
                thirdOption.textContent = "Senior Developer";
                break;
            case "other":
                firstOption.textContent = "Team Lead";
                secondOption.textContent = "Regular Employee";
                thirdOption.textContent = "Intern";
                break;
        }
    };

    //Buttons Functionality

    let buttons = document.querySelectorAll(".btn");

    [...buttons].forEach(btn => {
        btn.addEventListener("click", resetData);
    });

    function resetData() {
        document.getElementById("first-name").textContent = "Pesho";
        document.getElementById("last-name").textContent = "Peshov";
        document.getElementById("phone-number").textContent = "555-333-4545";
        document.getElementById("ucl-num").textContent = "9311124003";

        document.getElementById("other").checked = true;
    };
}