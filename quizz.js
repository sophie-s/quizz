var valider = document.getElementById("envoyer");

var btOui = document.getElementById("boutonOui");
var btNon = document.getElementById("boutonNon");

var bonneReponse = "1";

valider.onclick=function() {
    if(btOui.checked && btOui.value == bonneReponse) {
        alert("Bonne réponse!");
    }else if (btNon.checked && btNon.value == bonneReponse){
        alert("Bonne réponse!");
    }else{
        alert("Mauvaise réponse...");
    }
};
