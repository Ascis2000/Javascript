
var myApp = {};

myApp.nm = {

	dMenu: "",

	dAlimento: "",
	dGrupo: "",
	dCuracion: "",
	dSistemas: "",
	
	inp_food: "",
	inp_gFood: "",
	inp_sistemas: "",
	inp_pcurativas: "",
	
	arrActual: []
}

function findResultado(wordToMatch, atributo) {

	var mArr = "";
	var datos = myDDBB_Data.filter( function( mDB ){

		if(typeof mDB[atributo] == 'string'){
			const regex = new RegExp(wordToMatch, 'gi');
			return mDB[atributo].match(regex);
			//return mDATOS.food.match(regex) || mDATOS.pcurativas.match(regex) || mDATOS.vitamina.match(regex);
		}
		else {
			mArr = "";
			
			mDB[atributo].filter(function( n ){

				const regex = new RegExp(wordToMatch, 'gi');

				if( n.match(regex) != null){
					mArr = n;
					return n;
				}
			});
			return mArr;
		}
	});
	return datos;
}

function get_myDDBB_Data(eTargetValue, vCampo)
{
	var html;
	var mcFood = (vCampo == 'food') ? "matched" : "";
	var mcGrupo = (vCampo == 'grupo') ? "matched" : "";
	var mcSistemas = (vCampo == 'sistemas') ? "matched" : "";
	var mcPcurativas = (vCampo == 'pcurativas') ? "matched" : "";
	
	var cont = 0;
	var matchedArray = findResultado(eTargetValue, vCampo);
	myApp.nm.arrActual = matchedArray;
	console.log("arrActual=" + myApp.nm.arrActual);
	
	if(matchedArray.length == 0){
		cont = 0;

		html = '';
		html += '<tr>';
		html += '<td colspan="12" class="tdBody" align="center">';
		html += '	<div class="div_alerta">';
		html += '		<div>&nbsp;</div>';
		html += '		<div>No se han encontrado datos</div>';
		html += '	</div>';
		html += '</td>';
		html += '</tr>';
	}
	else {
		
		html = matchedArray.map(function(mDATOS){
			var data = "";
			var saltoLinea = "";
			var html_sistemas = "";
			var html_pcurativas = "";
			var html_descripcion = "";

			mcFood = (eTargetValue == "") ? "" : mcFood;
			mcGrupo = (eTargetValue == "") ? "" : mcGrupo;
			mcSistemas = (eTargetValue == "") ? "" : mcSistemas;
			mcPcurativas = (eTargetValue == "") ? "" : mcPcurativas;
			
			cont++;
			var resultado = "";
			const regex = new RegExp(eTargetValue, 'gi');
			
			data = mDATOS.sistemas.sort(simpleCompare());
			data.map(function( dt, index, arr ){
				saltoLinea = (index >= arr.length - 1) ? "": "<br>";
				html_sistemas += dt.replace(regex, "<span class='"+ mcSistemas +"'>"+ eTargetValue +"</span>") + saltoLinea;
				return html_sistemas;
			});
			
			data = mDATOS.pcurativas.sort(simpleCompare());
			data.map(function( dt, index, arr ){
				saltoLinea = (index >= arr.length - 1) ? "": "<br>";
				html_pcurativas += dt.replace(regex, "<span class='"+ mcPcurativas +"'>"+ eTargetValue +"</span>") + saltoLinea;
				return html_pcurativas;
			});
			
			data = mDATOS.descripcion.sort(simpleCompare());
			data.map(function( dt, index, arr ){
				saltoLinea = (index >= arr.length - 1) ? "": "<br>";
				html_descripcion += dt + saltoLinea;
				return html_descripcion;
			});

			var vFood = mDATOS.food.replace(regex, "<span class='"+ mcFood +"'>"+ eTargetValue +"</span>");
			var vGroup = mDATOS.grupo.replace(regex, "<span class='"+ mcGrupo +"'>"+ eTargetValue +"</span>");

			resultado += '<tr>';
			resultado += '	<td>'+ cont +'</td>';
			resultado += '	<td>'+ vFood +'</td>';
			resultado += '	<td>'+ vGroup +'</td>';
			resultado += '	<td>'+ html_sistemas +'</td>';
			resultado += '	<td>'+ html_pcurativas +'</td>';
			resultado += '	<td><span class="">'+ mDATOS.fibras +'</span></td>';
			resultado += '	<td><span class="">'+ mDATOS.grasas +'</span></td>';
			resultado += '	<td><span class="">'+ mDATOS.minerales +'</span></td>';
			resultado += '	<td><span class="">'+ mDATOS.proteinas +'</span></td>';
			resultado += '	<td><span class="">'+ mDATOS.vitaminas +'</span></td>';
			resultado += '	<td><span class="" style="float:left; width:100%; height:100px; overflow:auto;">'+ html_descripcion +'</span></td>';
			//resultado += '	<td><img src="img/'+ mDATOS.img +'" width="60" /></td>';
			resultado += '</tr>';

			return resultado;
		}).join('');
	}

	return {
		html: html,
		contador: cont,
	};
}

function ordenarTabladatos(e) {

	var getDATA;
	var dAlimento = document.getElementById('dAlimento');
	var dCuracion = document.getElementById('dCuracion');
	var dGrupo = document.getElementById('dGrupo');

	//dAlimento.getElementsByTagName("TBODY")[0].innerHTML = getDATA.html;
}

function mostrarResultadoBusqueda(e) {

	var getDATA;

	if(e.target.className == 'inp_food')
	{
		getDATA = get_myDDBB_Data(e.target.value, 'food');

		myApp.nm.dAlimento.getElementsByTagName("TBODY")[0].innerHTML = getDATA.html;
		myApp.nm.dAlimento.getElementsByClassName("dataMatched")[0].innerHTML = getDATA.contador;
	}
	else if(e.target.className == 'inp_gFood')
	{
		getDATA = get_myDDBB_Data(e.target.value, 'grupo');

		myApp.nm.dGrupo.getElementsByTagName("TBODY")[0].innerHTML = getDATA.html;
		myApp.nm.dGrupo.getElementsByClassName("dataMatched")[0].innerHTML = getDATA.contador;
	}
	else if(e.target.className == 'inp_sistemas')
	{
		getDATA = get_myDDBB_Data(e.target.value, 'sistemas');

		myApp.nm.dSistemas.getElementsByTagName("TBODY")[0].innerHTML = getDATA.html;
		myApp.nm.dSistemas.getElementsByClassName("dataMatched")[0].innerHTML = getDATA.contador;
	}
	else if(e.target.className == 'inp_pcurativas')
	{
		getDATA = get_myDDBB_Data(e.target.value, 'pcurativas');

		myApp.nm.dCuracion.getElementsByTagName("TBODY")[0].innerHTML = getDATA.html;
		myApp.nm.dCuracion.getElementsByClassName("dataMatched")[0].innerHTML = getDATA.contador;
	}
}

window.onload = function(){

	myApp.nm.dMenu = document.getElementsByTagName("HEADER")[0].getElementsByTagName("DIV")[0];
	myApp.nm.dNav = document.getElementsByTagName("HEADER")[0].getElementsByTagName("NAV")[0];

	myApp.nm.dAlimento = document.getElementById('dAlimento');
	myApp.nm.dGrupo = document.getElementById('dGrupo');
	myApp.nm.dSistemas = document.getElementById('dSistemas');
	myApp.nm.dCuracion = document.getElementById('dCuracion');
	
	myApp.nm.inp_food = myApp.nm.dAlimento.getElementsByClassName("contentBuscador")[0].getElementsByTagName("INPUT")[0];
	myApp.nm.inp_gFood = myApp.nm.dGrupo.getElementsByClassName("contentBuscador")[0].getElementsByTagName("INPUT")[0];
	myApp.nm.inp_sistemas = myApp.nm.dSistemas.getElementsByClassName("contentBuscador")[0].getElementsByTagName("INPUT")[0];
	myApp.nm.inp_pcurativas = myApp.nm.dCuracion.getElementsByClassName("contentBuscador")[0].getElementsByTagName("INPUT")[0];
	
	myApp.nm.inp_food.value = "";
	myApp.nm.inp_gFood.value = "";
	myApp.nm.inp_sistemas.value = "";
	myApp.nm.inp_pcurativas.value = "";
	
	//myApp.nm.inp_food.addEventListener('change', mostrarResultadoBusqueda);
	myApp.nm.inp_food.addEventListener('keyup', mostrarResultadoBusqueda);

	//myApp.nm.inp_gFood.addEventListener('change', mostrarResultadoBusqueda);
	myApp.nm.inp_gFood.addEventListener('keyup', mostrarResultadoBusqueda);
	
	//myApp.nm.inp_sistemas.addEventListener('change', mostrarResultadoBusqueda);
	myApp.nm.inp_sistemas.addEventListener('keyup', mostrarResultadoBusqueda);
	
	//myApp.nm.inp_pcurativas.addEventListener('change', mostrarResultadoBusqueda);
	myApp.nm.inp_pcurativas.addEventListener('keyup', mostrarResultadoBusqueda);

	MO_miMenu();
	set_tabs();

	myApp.nm.dAlimento.style.display = "block";
	document.getElementsByClassName("tabs")[0].className += " active";

	myDDBB_Data.sort(compare('food', 'pcurativas'));
}

function simpleCompare() {
	return function(a, b) {
	   if (a < b)
		  return -1;
	   else if (a == b)
		  return 0;
	   else
		  return 1;
	};
}

function compare(propName1, propName2) {
    return function(a, b) {
		if(a[propName1] != b[propName1])
		{
			return (a[propName1] > b[propName1]) ? 1 : (a[propName1] < b[propName1]) ? -1 : 0;
		}
		else if(a[propName1] == b[propName1])
		{
			return (a[propName2] > b[propName2]) ? 1 : (a[propName2] < b[propName2]) ? -1 : 0;
		}
    };
}

function popo(eTargetValue, vCampo){
	getDATA = get_myDDBB_Data('f', 'sistemas');

	myApp.nm.dGrupo.getElementsByTagName("TBODY")[0].innerHTML = getDATA.html;
		myApp.nm.dGrupo.getElementsByClassName("dataMatched")[0].innerHTML = getDATA.contador;
}


