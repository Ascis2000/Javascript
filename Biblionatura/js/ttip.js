
function mostrarTooltip(elemento,mensaje){

    // Si no existe aun el tooltip se crea
    if (!document.getElementById(elemento.id+"tp") ){
        // Dimensiones del elemento al que se quiere añadir el tooltip
        anchoElemento = elemento.offsetWidth;
        altoElemento = elemento.offsetHeight;
        
        // Coordenadas del elemento al que se quiere añadir el tooltip
        coordenadaXElemento = elemento.offsetLeft;
        coordenadaYElemento = elemento.offsetTop;

        // Coordenadas en las que se colocara el tooltip
        x = coordenadaXElemento + anchoElemento/2 + 20;
        y = coordenadaYElemento + altoElemento/2 + 10;

        // Crea el tooltip con sus atributos
        var tooltip = document.createElement('div');
        tooltip.id = elemento.id + "tp";
        tooltip.className = 'toolTip';
        tooltip.innerHTML = mensaje;
        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";
		tooltip.style.display = "block";

        // Añade el tooltip
        document.body.appendChild(tooltip); 
    }

    // Cambia la opacidad del tooltip y lo muestra o lo oculta (Si el raton esta encima del elemento se muestra el tooltip y sino se oculta)
    $('#'+elemento.id).hover(
        function(){
            tooltip.style.display = "block";
            $('#'+tooltip.id).animate({"opacity" : 1});

        },
        function(){
            $('#'+tooltip.id).animate({"opacity" : 0});
            setTimeout(
                function (){
                    tooltip.style.display = "none";
                }, 
                400
            );
            
        }
    );     
}