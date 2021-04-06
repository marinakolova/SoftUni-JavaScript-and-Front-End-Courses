function validate() {
    const input = document.getElementById("email");

    function isValidEmail(str) {
        return /^[a-z]+@[a-z]+\.[a-z]+/g.test(str);
    }

    function applyStyle(e, email) {
        e.className = isValidEmail(email) ? "" : "error";
    }
    
    input.addEventListener("change", e => applyStyle(e.target, e.target.value));
}
