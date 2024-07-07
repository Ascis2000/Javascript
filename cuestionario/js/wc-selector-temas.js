
class WcSelectorTemas extends HTMLElement {

	constructor() {
    	super();

    	this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<label for="slcTemas">Selecciona un TEMA:</label>
				<select id="slcTemas">
					<option value="">Seleccione un TEMA</option>
				</select>
				<link rel="stylesheet" href="css/estilos.css">
		`;
	}

	connectedCallback() {
		// función onload del web component
    	// Por defecto no queremos ejecutar nada
		// porque llamaremos a la funcion set_selectorTemas
		// desde una llamada externa
  	}

	set_selectorTemas(arr) {

		let option;
		let arr_temas = arr;
		let slcTemas = this.shadowRoot.getElementById('slcTemas');

		arr_temas.forEach((tm, index) => {
			option = document.createElement('option');
			option.value = index;
			option.textContent = `${index + 1}. ${tm.tema} (${tm.data.length} preguntas)`;
			slcTemas.appendChild(option);
		});

    	slcTemas.addEventListener('change', () => {
			this.change_selectorTemas()
		});
	}

	change_selectorTemas() {

		let slcValue;
		let slcTemas = this.shadowRoot.getElementById('slcTemas');

		// llamamos al identificador externo 'boxPreguntas' del HTML
		let boxPreguntas = document.getElementById('boxPreguntas');

		slcValue = slcTemas.value;
		boxPreguntas.innerHTML = "";

		// llamamos a la función externa 'setHTML' de main.js
		setHTML(slcValue);
	}
}
customElements.define('wc-selector-temas', WcSelectorTemas);
