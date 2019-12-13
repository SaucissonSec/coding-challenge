function oubli() {
    document.getElementById("oubli").style.display = "block";
}
function checkLogin() {
    var pseudoChar = document.getElementById('pseudoLogin').value;
    var pseudoLength = pseudoChar.length;

    var mdpChar = document.getElementById('mdpLogin').value;
    var mdpLength = mdpChar.length;

    var errorCode = 0


    if (pseudoLength == 0) {
        errorCode = errorCode + 2;
    }
    if (mdpLength == 0) {
        errorCode = errorCode + 1;
    }
    
    if (errorCode == 0) {
        alert ("Succès de la connexion")
    }
    else if (errorCode == 1) {
        alert("Echec: Mot de passe manquant")
    }    
    else if (errorCode == 2) {
        alert("Echec: Pseudo manquant")
    }    
    else if (errorCode == 3) {
        alert("Echec: Champs vides")
    }
}

function checkRegister() {
    var pseudoChar = document.getElementById('pseudoRegister').value;
    var pseudoLength = pseudoChar.length;

    var mdpChar = document.getElementById('mdpRegister').value;
    var mdpLength = mdpChar.length;


    var emailChar = document.getElementById('emailRegister').value;
    var emailLength = emailChar.length;
    var errorCode = 0


    if (pseudoLength == 0) {
        errorCode = errorCode + 2;
    }
    if (mdpLength == 0) {
        errorCode = errorCode + 1;
    }
    if (emailLength == 0) {
        errorCode = errorCode + 4;
    }
    
    if (errorCode == 0) {
        alert ("Succès de la connexion")
    }
    else if (errorCode == 1) {
        alert("Echec: Mot de passe manquant")
    }    
    else if (errorCode == 2) {
        alert("Echec: Pseudo manquant")
    }    
    else if (errorCode == 4) {
        alert("Echec: Email manquant")
    }    
    else if (errorCode == 3 || errorCode == 5 || errorCode == 6 || errorCode == 7) {
        alert("Echec: Plusieurs champs vides")
    }
}
