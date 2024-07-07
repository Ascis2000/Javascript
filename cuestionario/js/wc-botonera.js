
// Web Component Botonera
class WcBotonera extends HTMLElement {

    constructor() {
        super();

        this.btnTxtMostrar = "Mostrar todas las respuestas"; // Valor por defecto
        this.btnTxtOcultar = "Ocultar todas las respuestas"; // Valor por defecto

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="botones-respuestas" style="margin-top:10px;">
                <button id="mostrarBtn">${this.btnTxtMostrar}</button>
                <button id="ocultarBtn">Ocultar todas las respuestas</button>
            </div>
			<link rel="stylesheet" href="css/estilos.css">
        `;
    }

    // Declaración de los atributos observados
    static get observedAttributes() {
        return ['txt-mostrar', 'txt-ocultar'];
    }

    // attributeChangedCallback(name, _, newValue)
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'txt-mostrar') {
            this.btnTxtMostrar = newValue;
            this.shadowRoot.getElementById('mostrarBtn').textContent = this.btnTxtMostrar;
        } else if (name == 'txt-ocultar') {
            this.btnTxtOcultar = newValue;
            this.shadowRoot.getElementById('ocultarBtn').textContent = newValue;
        }
    }

    connectedCallback() {
        this.shadowRoot.getElementById('mostrarBtn').addEventListener('click', this.mostrarTodasRespuestas);
        this.shadowRoot.getElementById('ocultarBtn').addEventListener('click', this.ocultarTodasRespuestas);
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('mostrarBtn').removeEventListener('click', this.mostrarTodasRespuestas);
        this.shadowRoot.getElementById('ocultarBtn').removeEventListener('click', this.ocultarTodasRespuestas);
    }

    mostrarTodasRespuestas() {
        document.querySelectorAll('.respuesta').forEach(respuesta => {
            respuesta.style.display = 'block';
        });
		
		const botones = document.querySelectorAll('.pregunta button');
		botones.forEach(boton => {
			boton.textContent = 'Ocultar Respuesta';
		});
    }

    ocultarTodasRespuestas() {
        document.querySelectorAll('.respuesta').forEach(respuesta => {
            respuesta.style.display = 'none';
        });
		const botones = document.querySelectorAll('.pregunta button');
		botones.forEach(boton => {
			boton.textContent = 'Mostrar Respuesta';
		});
    }
}
customElements.define('wc-botonera', WcBotonera);
