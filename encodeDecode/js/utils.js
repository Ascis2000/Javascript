
var cLog = function (...args) {
    console.log.apply(console, args);
}

var getElById = function(id){
    var objeto = document.getElementById(id);

    if (!objeto) {
        console.error("El objeto con id '" + id + "' no existe");
        return null;
    }
    return objeto;
}

var qSel = function(selector, context = document) {
    return context.querySelector(selector);
}

var invertirString = function (cad) {
    return cad.split("").reverse().join("");
}

