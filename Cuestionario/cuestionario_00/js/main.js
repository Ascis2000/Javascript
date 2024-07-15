
function pintarHTML() {

	let html = '';
	let div = null;
	
	let numPregunta = 0;
	let temaActual = "";
	let preguntaID = ""; 
	let contador = 0;
	const divPreguntas = document.getElementById('divPreguntas');

	const totalPreguntasTema = get_totalPreguntasPorTema();
	console.log(totalPreguntasTema);	
	
	// recorremos el array de preguntas
	arr_preguntas.forEach((preguntaObj, index) => {
		console.log("index:", index)
		// SI estamos en un nuevo tema
		if(preguntaObj.tema != temaActual){
			
			if(div){
				divPreguntas.appendChild(div);
				div = null;
				contador++;
			}
			divPreguntas.innerHTML += `<h2>Tema ${preguntaObj.tema}: ${totalPreguntasTema[contador].total} preguntas</h2>`
			
			div = document.createElement("div");
			div.className = "boxPreguntas";
			
			temaActual = preguntaObj.tema;
			numPregunta = 0; // reiniciamos el numero de la pregunta
		}
		
		numPregunta++;
		
		// asignamos un ID único para cada respuesta
		preguntaID = `id_tema${temaActual.split('.')[0]}_p${numPregunta}`;
		
		html += `
			<div class="pregunta">
				<p><strong>Pregunta ${numPregunta}:</strong> ${preguntaObj.pregunta}</p>
				<button onclick="MO_respuesta('${preguntaID}', this)">Mostrar Respuesta</button>
				<div class="respuesta" id="${preguntaID}" style="display: none;">${preguntaObj.respuesta}</div>
			</div>
		`;

		div.innerHTML += html;
		html = "";
		
	});
	divPreguntas.appendChild(div);
	
	cargarPreguntasEnSelector();
	manejarCambioSelector()
}

// funcion Mostrar-Ocultar Respuesta
function MO_respuesta(id, boton) {
	const respuesta = document.getElementById(id);

	if (respuesta.style.display == 'none' || respuesta.style.display == '') {
		respuesta.style.display = 'block';
		boton.textContent = 'Ocultar Respuesta';
	} else {
		respuesta.style.display = 'none';
		boton.textContent = 'Mostrar Respuesta';
	}
}

function get_totalPreguntasPorTema() {
    const totTemas = {};
    
    arr_preguntas.forEach(pregunta => {
        if (totTemas[pregunta.tema]) {
            totTemas[pregunta.tema]++;
        } else {
            totTemas[pregunta.tema] = 1;
        }
    });

    return Object.entries(totTemas).map(([tema, total]) => ({ tema, total }));
}


function cargarPreguntasEnSelector() {
	
	let numPregunta = 0;
	let temaActual = "";
	
	const selector = document.getElementById('selectorPreguntas');
	arr_preguntas.forEach((pregunta, index) => {
		const option = document.createElement('option');
		
		if(pregunta.tema.split('.')[0] != temaActual){
			temaActual = pregunta.tema.split('.')[0];
			numPregunta = 0; // reiniciamos el numero de la pregunta
		}
		numPregunta++;
		
		option.value = `id_tema${pregunta.tema.split('.')[0]}_p${numPregunta}`;
		option.textContent = `${pregunta.tema}: ${pregunta.pregunta}`;
		selector.appendChild(option);
	});
}

function get_tema(cadena) {
    const parts = cadena.split('_');
    const temaPart = parts[1];
    const value = temaPart.replace('tema', '');
    return value;
}

// Función para manejar el cambio en el selector
function manejarCambioSelector() {
	const selector = document.getElementById('selectorPreguntas');
	const contenedor = document.getElementById('divPreguntas');
	
	selector.addEventListener('change', function() {
		const seleccion = selector.value;
		
		let tema = get_tema(selector.value) - 1;
		let boxPreguntas = document.querySelectorAll(".boxPreguntas");
		let pregunta = boxPreguntas[tema].querySelectorAll(".pregunta");
		
		

		const elemento = boxPreguntas[tema].querySelector("#" + seleccion);
		elemento.style.display = "block";
		var posTop = elemento.offsetTop - 300;
		elemento.style.display = "none";
		elemento.style.position = "relative";
		
		document.querySelectorAll(".boxPreguntas")[tema].scrollTop = posTop;
		
		window.scrollTo({
			top: elemento.offsetTop,
			behavior: 'smooth' // Opcional: desplazamiento suave
		});

	});
}






