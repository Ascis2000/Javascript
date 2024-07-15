
// Web Component Botonera
class WcBotonera extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class="container">
                <div class="botones-respuestas" style="margin-top:10px;">
                    <button id="mostrarBtn">Mostrar todas las respuestas</button>
                    <button id="ocultarBtn">Ocultar todas las respuestas</button>
                </div>
            </div>
			<link rel="stylesheet" href="css/estilos.css">
        `;
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
