// simuliranje brojaca posjeta stranici
document.addEventListener("DOMContentLoaded", () => {
    let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
    visitCount++;
    localStorage.setItem("visitCount", visitCount);

    document.getElementById("counter").innerText = `Visits: ${visitCount}`;
});
