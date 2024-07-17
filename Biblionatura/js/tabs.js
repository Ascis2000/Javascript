
 
var contador = 1;
 
function MO_miMenu(){
	myApp.nm.dMenu.onclick = function(){ 
		
		if(contador == 1){
			contador = 0;
			myApp.nm.dNav.style.left = "0px";
			myApp.nm.dMenu.getElementsByTagName("SPAN")[1].className = "icon_menu_close";
			
		} else {
			contador = 1;
			myApp.nm.dNav.style.left = "-1000px";
			myApp.nm.dMenu.getElementsByTagName("SPAN")[1].className = "icon_menu_open";
		}
	}
};

function set_tabs(){

	var tabs = document.getElementsByClassName("tabs");
	var arr_tabs = ['dAlimento', 'dGrupo', 'dSistemas', 'dCuracion'];
	
	for (var i=0; i < tabs.length; i++) {
		dato = eval("i");
		tabs[i].setAttribute("data-valor", arr_tabs[i]);
		tabs[i].className = tabs[i].className.replace(" active", "");

		tabs[i].onclick = function(e){ 
			showContentTab(e, this.getAttribute('data-valor'))
		}
	}
}

function showContentTab(evt, dtValor) {
	var contentTabs, tabs;
	contentTabs = document.getElementsByClassName("contentTabs");
	
	for (var i = 0; i < contentTabs.length; i++) {
		contentTabs[i].style.display = "none";
	}
	
	tabs = document.getElementsByClassName("tabs");
	for (i = 0; i < tabs.length; i++) {
		tabs[i].className = tabs[i].className.replace(" active", "");
	}
	document.getElementById(dtValor).style.display = "block";
	evt.currentTarget.className += " active";
}






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