function division(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    var result = number1 / number2;
document.getElementById("result").innerHTML = result;

}
function grammes(){
    var grammes = document.getElementById("grammes").value;
    var kilo = grammes / 1000;
    document.getElementById("kilo").innerHTML = kilo;
}
function yuan(){
    var yuan = document.getElementById("yuan").value;
    var euro = yuan * 0.13;
    document.getElementById("euro").innerHTML = euro;
}
function arrondi(){
    var decimal = document.getElementById("decimal").value;
    var entier = Math.round(decimal)
    document.getElementById("entier").innerHTML = entier;
}