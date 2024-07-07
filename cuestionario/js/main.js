
// función que inicia las aplicación
let inicio = function(){

	unificarTemas(); // unificamos los arrays de cada tema en el array 'arr_temas'
	setHTML(0); // creamos el HTML y lo añadimos a la capa principal y lo iniciamos en el tema 0
	set_selectorTemas(arr_temas); // llamamos a la funcion del web component que crea el selector con los temas existentes
}

let unificarTemas = function(){

	// Agregar cada array tema al array principal 'arr_temas'
	/* 
	arr_temas.push(arr_tema1);
	arr_temas.push(arr_tema2);
	arr_temas.push(arr_tema3); 
	*/

	// Agregar cada array tema al array principal 'arr_temas'
	arr_temas = [arr_tema1, arr_tema2, arr_tema3];

	// Acceder a los datos unificados
	console.log(arr_temas);

	// console.log(arr_temas[0]); // acceder al primer Tema
	// console.log(arr_temas[0].data[0].pregunta); // acceder a la pregunta del primer Tema
	// console.log(arr_temas[0].data[0].respuesta); // acceder a la respuesta del primer Tema
}

function setHTML(tema) {

	let html = '';
	let numTema = tema;
	let respuestaID = "";
	let temaActual = arr_temas[ tema ];
	let temaData = temaActual.data;
	let H2 = document.createElement('h2');
	let mDIV = document.createElement('div');
	let boxPreguntas = document.getElementById('boxPreguntas');

	H2.textContent = `Tema ${(numTema*1) + 1}. ${temaActual.tema} (${temaData.length} preguntas)`;
	boxPreguntas.appendChild(H2);

	// Utilizando map() en lugar de forEach()
	// recorremos el array de preguntas recogidas en 'temaData'
	html = temaData.map((dt, index) => {

		// Controlamos el número de pregunta
		const numPregunta = index + 1;

		// Asignamos un ID único para cada respuesta
		respuestaID = `id_tema${numTema}_p${numPregunta}`;

		// Construimos el HTML para cada pregunta y respuesta
		return `
			<div class="pregunta">
				<p><strong>Pregunta ${numPregunta}:</strong> ${dt.pregunta}</p>
				<button onclick="MO_respuesta('${respuestaID}', this)">Mostrar Respuesta</button>
				<div class="respuesta" id="${respuestaID}" style="display: none;">${dt.respuesta}</div>
			</div>
		`;
	}).join(''); // Unimos todos los elementos del array en una sola cadena

	mDIV.innerHTML = html;
	boxPreguntas.appendChild(mDIV);
}

set_selectorTemas = function(array){

	let wcSelectorTemas = document.querySelector('wc-selector-temas');
	wcSelectorTemas.set_selectorTemas(array);
}

function setPreguntas() {
	
	let numTema = 0;
	let numPregunta = 0;
	let temaActual = arr_temas[0];
	let temaData = temaActual.data;
	
	const slcTemas = document.getElementById('slcTemas');
	temaData.forEach((pregunta, index) => {
		const option = document.createElement('option');
		
		numPregunta++;
		
		option.value = `id_tema${numTema}_p${numPregunta}`;;
		option.textContent = `${pregunta.tema}: ${pregunta.pregunta}`;
		slcTemas.appendChild(option);
	});
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

