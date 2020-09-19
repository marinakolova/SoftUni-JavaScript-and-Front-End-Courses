function solve() {
    let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", postQuote);

    function postQuote() {
        let quoteText = document.getElementById("quote-text").value;
        let authorName = document.getElementById("author-name").value;
        let imgUrl = document.getElementById("img-url").value;

        if (quoteText == null || quoteText == "") {
            return;
        }

        //empty the text fields
        document.getElementById("quote-text").value = null;
        document.getElementById("author-name").value = null;
        document.getElementById("img-url").value = null;

        //make the quote box
        let quoteBox = document.createElement("div");
        quoteBox.className = "row m-3 p-3 border rounded";

        //image
        let imgCol = document.createElement("div");
        imgCol.className = "col-4";
        let theImg = document.createElement("img");
        theImg.className = "img-fluid img-thumbnail";
        theImg.setAttribute("src", imgUrl);
        imgCol.appendChild(theImg);

        //quote
        let quoteCol = document.createElement("div");
        quoteCol.className = "col-6";

        let p = document.createElement("p");
        p.textContent = quoteText;
        quoteCol.appendChild(p);

        let authr = document.createElement("p");
        authr.className = "font-italic text-secondary";
        authr.textContent = authorName;
        quoteCol.appendChild(authr);

        //button
        let favBtn = document.createElement("input");
        favBtn.className = "btn btn-small btn-dark fav-btn";
        favBtn.setAttribute("style", "display: inline;");
        favBtn.setAttribute("value", "★");
        favBtn.setAttribute("type", "submit");
        quoteCol.appendChild(favBtn);

        //go back button
        let backBtn = document.createElement("input");
        backBtn.className = "btn btn-small btn-dark back-btn";
        backBtn.setAttribute("style", "display: none;");
        backBtn.setAttribute("value", "★");
        backBtn.setAttribute("type", "submit");
        quoteCol.appendChild(backBtn);

        //display the quote box
        if (imgUrl != null && imgUrl != "") {
            quoteBox.appendChild(imgCol);
        }; 
        quoteBox.appendChild(quoteCol);

        let postedQuotes = document.getElementById("posted-quotes");
        postedQuotes.appendChild(quoteBox);


        //move to favourite
        let favButtons = document.querySelectorAll(".fav-btn");

        [...favButtons].forEach(favBtn => {
            favBtn.addEventListener("click", moveToFav);
        });

        function moveToFav() {

            let moved = this.parentElement.parentElement.parentElement.removeChild(quoteBox);

            let favSection = document.getElementById("fav-quotes");
            favSection.appendChild(moved);

            //switch buttons
            let favBtnToHide = moved.querySelectorAll(".fav-btn");
            [...favBtnToHide].forEach(favBtn => {
                favBtn.setAttribute("style", "display: none;");
            });

            let backBtnToShow = moved.querySelectorAll(".back-btn");
            [...backBtnToShow].forEach(backBtn => {
                backBtn.setAttribute("style", "display: inline;");
            });            
        };

        //move back

        let backButtons = document.querySelectorAll(".back-btn");

        [...backButtons].forEach(backBtn => {
            backBtn.addEventListener("click", moveBack);
        });

        function moveBack() {

            let movedBack = this.parentElement.parentElement.parentElement.removeChild(quoteBox);

            let quotesSection = document.getElementById("posted-quotes");
            quotesSection.appendChild(movedBack);

            //switch buttons again
            let backBtnToHide = movedBack.querySelectorAll(".back-btn");
            [...backBtnToHide].forEach(backBtn => {
                backBtn.setAttribute("style", "display: none;");
            });

            let favBtnToShow = movedBack.querySelectorAll(".fav-btn");
            [...favBtnToShow].forEach(favBtn => {
                favBtn.setAttribute("style", "display: inline;");
            });
        };
    }
}