function skip() {
    document.getElementById("question").style.display = "none";
    document.getElementById("if-oui").style.display = "none";
    document.getElementById("if-non").style.display = "none";
} 
function oui() {
    document.getElementById("question").style.display = "none";
    document.getElementById("if-oui").style.display = "block";
    document.getElementById("if-non").style.display = "none";
}
function non() {
    document.getElementById("question").style.display = "none";
    document.getElementById("if-oui").style.display = "none";
    document.getElementById("if-non").style.display = "block";
}