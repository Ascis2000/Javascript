
// función que inicia las aplicación
let inicio = function(){

	unificarTemas(); // unificamos los arrays de cada tema en el array 'arr_temas'
	setHTML(0); // creamos el HTML y lo añadimos a la capa principal y lo iniciamos a tema 1
	set_selectorTemas(arr_temas); // llamamos a la funcion del web component que crea el selector con los temas existentes

	let wcSelectorTemas = document.querySelector('wc-selector-temas');
	let slcTemas = wcSelectorTemas.shadowRoot.querySelector('#slcTemas')

	slcTemas.addEventListener('change', () => {
		filtrarPreguntasInput();
	});
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
	let temaActual = arr_temas[ tema ];
	let temaData = (temaActual) ? temaActual.data : [];
	let H2 = document.createElement('h2');
	let mDIV = document.createElement('div');
	let boxPreguntas = document.getElementById('boxPreguntas');

	if(tema == ""){
		H2.textContent = `Selecciona un TEMA`;
	}
	else {
		H2.textContent = `Tema ${(numTema*1) + 1}. ${temaActual.tema} (${temaData.length} preguntas)`;
	}
	boxPreguntas.appendChild(H2);

	// obtenemos el html que vamos a generar dinamicamente
	html = get_HTML_DATOS(numTema, temaData, '');

	mDIV.id = "DATOS"
	mDIV.innerHTML = html;
	boxPreguntas.appendChild(mDIV);
}

function get_HTML_DATOS(tema, arr, textoBusqueda = '') {
    let numTema = tema;

    // recorremos el array y almacenamos el resultado en la variable html
    let html = arr.map((dt, index) => {

        const numPregunta = index + 1;
        let respuestaID = `id_tema${numTema}_p${numPregunta}`;


        let po = resaltarTextoBusqueda(dt.pregunta, textoBusqueda);
        //console.log(po)

        // Resaltar el texto de búsqueda en la pregunta
        let preguntaResaltada = dt.pregunta;

        if (textoBusqueda) {
            let regex = new RegExp(`(${textoBusqueda})`, 'gi');

			// Uso de $1 para referenciar el Grupo de Captura del campo de búsqueda
            preguntaResaltada = dt.pregunta.replace(regex, '<mark>$1</mark>');
        }

        return `
            <div class="pregunta">
                <p><strong>Pregunta ${numPregunta}:</strong> ${preguntaResaltada}</p>
                <button onclick="MO_respuesta('${respuestaID}', this)">Mostrar Respuesta</button>
                <div class="respuesta" id="${respuestaID}" style="display: none;">${dt.respuesta}</div>
            </div>
        `;
    }).join('');

    return html;
}

function filtrarPreguntas(objInput, event) {

    // Limpiamos el contenido actual del contenedor de preguntas 'DATOS'
    let DATOS = document.querySelector('#boxPreguntas #DATOS');
    DATOS.innerHTML = '';

	let textoBusqueda = objInput.value;
	let wcSelectorTemas = document.querySelector('wc-selector-temas');

    // si el componente existe
    if (wcSelectorTemas){

        // accedemos al shadowRoot del componente
        const shadowRoot = wcSelectorTemas.shadowRoot;

        // obtenenmos el select dentro del shadowRoot
        const slcTemas = shadowRoot.querySelector('#slcTemas');
		let numTema = slcTemas.value; // obtenemos el tema actual seleccionado

		if(numTema == ""){
			alert("Es necesario seleccionar un TEMA");
			textoBusqueda = "";
			event.preventDefault(); // Evita que la tecla se muestre en el input
		}
		else{
	
			// Filtrar las preguntas basadas en el texto de búsqueda
			let temaActual = arr_temas[numTema];
			let temaData = temaActual.data.filter(pgnta =>
				pgnta.pregunta.toLowerCase().includes(textoBusqueda.toLowerCase())
			);
			
			// obtenemos el html que vamos a generar dinamicamente
			const html = get_HTML_DATOS(numTema, temaData, textoBusqueda);
			DATOS.innerHTML = html; // añadimos el HTML filtrado en la capa DATOS
		}
	}
}

set_selectorTemas = function(array){

	let wcSelectorTemas = document.querySelector('wc-selector-temas');
	wcSelectorTemas.set_selectorTemas(array);
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

function filtrarPreguntasInput(){

	let inp_textoBusqueda = document.querySelector('#inp_textoBusqueda');
	let texto_value = inp_textoBusqueda.value;

	filtrarPreguntas(inp_textoBusqueda, event=null);
}

function resaltarPreguntas(pregunta, texto){

	let preguntaResaltada = pregunta;
    let textoBusqueda = texto;

    if (textoBusqueda) {
        let regex = new RegExp(`(${textoBusqueda})`, 'gi');

        // Uso de $1 para referenciar el Grupo de Captura del campo de búsqueda
        return preguntaResaltada.replace(regex, '<mark>$1</mark>');
    }
}

function resaltarTextoBusqueda(pregunta, texto){

    let textoBusqueda = texto;
	let preguntaResaltada = pregunta;

    console.log("entro")
    if (textoBusqueda) {
        let regex = new RegExp(`(${textoBusqueda})`, 'gi');
        console.log(preguntaResaltada.replace(regex, '<mark>$1</mark>'))
        // Uso de $1 para referenciar el Grupo de Captura del campo de búsqueda
        return preguntaResaltada.replace(regex, '<mark>$1</mark>');
    }
}


