function updateClock() {
    let hrs = document.getElementById("hrs");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");

    let date = new Date();

    hrs.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    mins.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    secs.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
}

setInterval(() => {
        updateClock()
}, 1000);
