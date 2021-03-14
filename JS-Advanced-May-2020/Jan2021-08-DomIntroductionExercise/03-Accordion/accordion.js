function toggle() {
    let span = document.getElementsByClassName('button')[0];
    let div = document.getElementById('extra');

    if (span.textContent === 'More') {
        div.style.display = 'block';
        span.textContent = 'Less';
    } else {
        div.style.display = 'none';
        span.textContent = 'More';
    }
}
