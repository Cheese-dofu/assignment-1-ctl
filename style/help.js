localStorage.setItem("savedInput", input);
localStorage.setItem("savedResponse", response);
window.onload = function () {
    document.getElementById("userInput").value =
        localStorage.getItem("savedInput") || "";

    document.getElementById("result").textContent =
        localStorage.getItem("savedResponse") || "";
};