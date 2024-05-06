
/* myApp
** 
** Propiedades: 6
**    - btn_limpiar
**    - btn_codificar
**    - btn_decodificar

**    - txtTextoCode
**    - lbl_textoCodificado
**    - lbl_textoDecodificado

** Métodos: 5
**    - iniciar()
**    - limpiarDatos()
**    - codificarDecodificar()
**    - codificar()
**    - decodificar()
*/

/*
** Si myApp ya está definida y tiene un valor verdadero (no es null, undefined, 0, false, 
** o una cadena vacía), la expresión myApp || {} devuelve myApp. 
** Si myApp no está definida o es falsa, devuelve un nuevo objeto vacío {}.
*/
var myApp = myApp || {};

// método 'iniciar' del objeto 'myApp'
myApp.iniciar = function(){
    
    $this = this; // myApp

    // botones
    $this.btn_limpiar = getElById("btn_limpiar");
    $this.btn_codificar = getElById("btn_codificar");
    $this.btn_decodificar = getElById("btn_decodificar");

    $this.txtTextoCode = getElById("txtTextoCode");
    $this.lbl_textoCodificado = getElById("lbl_textoCodificado");
    $this.lbl_textoDecodificado = getElById("lbl_textoDecodificado");

    // funcionalidad para el botón 'btn_codificar'
    $this.btn_codificar.addEventListener("click", function() {
        $this.codificarDecodificar('codificar');
    });

    // funcionalidad para el botón 'btn_decodificar'
    $this.btn_decodificar.addEventListener("click", function() {
        $this.codificarDecodificar('decodificar');
    });

    // funcionalidad para el botón 'btn_limpiar'
    $this.btn_limpiar.addEventListener("click", function() {
        $this.limpiarDatos();
    });
}

// método 'limpiarDatos' del objeto 'myApp'
myApp.limpiarDatos = function(){
    
    $this = this; // myApp

    $this.txtTextoCode.value = "";
    $this.lbl_textoCodificado.innerHTML = "---";
    $this.lbl_textoDecodificado.innerHTML = "---";
}

// método 'codificarDecodificar' del objeto 'myApp'
myApp.codificarDecodificar = function( modo ){

    $this = this; // myApp
    let txtCode = "";
    let txtCodeValue = $this.txtTextoCode.value;

    if(txtCodeValue == ""){
        alert("El campo a codificar no puede estar vacio");
    }
    else{
        txtCode = $this.codificar( txtCodeValue ); // codificamos el texto

        // CODIFICAR
        // Mostramos el texto codificado
        if(modo == 'codificar'){
            $this.lbl_textoCodificado.innerHTML = "El texto codificado con el valor '" + txtCodeValue + "' es:<br/>" +
            "<b>" + txtCode + "</b>";
        }

        // DECODIFICAR
        // Mostramos el texto decodificado
        else if(modo == 'decodificar'){
            $this.lbl_textoDecodificado.innerHTML = "El texto decodificado con el valor '" + txtCode + "' es:<br/>" +
            "<b>" + $this.decodificar( txtCode ) + "</b>";
        }
    }
}

// método 'codificar' del objeto 'myApp'
// método para Codificar los caracteres
myApp.codificar = function( texto ) {

    let codificarTexto = "";

    // instanciamos el objeto 'MapaChars'
    // para acceder a sus propiedades y métodos
    const mChars = new MapaChars();
    let mapa = mChars.getMapa(); // obtenemos el mapa de caracteres

    // bucle que recorre cada carácter del texto.
    for (let char of texto) { 

        /* 
        Para cada carácter 'char' de la cadena 'texto', buscamos su equivalente 
        codificado en la mapa[char] y lo asignamos a 'codificarTexto'.
        Si no encuentra su equivalente, entonces dejamos el carácter original 'char'.
        */
        codificarTexto += mapa[char] || char;
    }
    return codificarTexto; // devolvemos el resultado
}

// método 'decodificar' del objeto 'myApp'
// método para Decodificar los caracteres
myApp.decodificar = function( texto ) {

    // Definimos variables que utilizaremos mas adelante
    let escapedCod, regex;
    let decodedText = texto;
    let mapaInvertido = {}; // declaramos el objeto

    // instanciamos el objeto 'MapaChars'
    // para acceder a sus propiedades y métodos
    const mChars = new MapaChars();
    let mapa = mChars.getMapa(); // obtenemos el mapa de caracteres
    
    // recorremos el objeto clave-valor para intercambiarlo por valor-clave
    // y asignarselo al nuevo objeto 'mapaInvertido'
    for (const key in mapa) {
        const valor = mapa[key]; // el valor es ahora la clave
        mapaInvertido[valor] = key; // la clave es ahora el valor
    }

    // bucle que recorre el objeto 'mapaInvertido'.
    for (let cod in mapaInvertido) {

        /* 
        Escapamos cualquier caracter especial en la clave cod, 
        utilizando el método replace() con una expresión regular. 
        La expresión regular /[.*+?^${}()|[\]\\]/g busca cualquier caracter especial 
        y lo reemplaza con su versión escapada (precedida por \). 
        Con esto evitamos que los caracteres especiales 
        interfieran con la expresión regular cuando la utilicemos.
        */
        escapedCod = cod.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
        
        /* 
        Utilizamos la expresión regular para hacer un reemplazo global 
        de todas las ocurrencias de la clave 'cod'
        con su valor del objeto (mapaInvertido[cod]). 
        */
        regex = new RegExp(escapedCod, 'g');
        decodedText = decodedText.replace(regex, mapaInvertido[cod]);
    }
    return decodedText; // devolvemos el resultado
}


