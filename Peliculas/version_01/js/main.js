
let tabla;
let thead;
let tbody;
let ths;

// Estado inicial para la dirección de ordenación
let sortOrderTHs = {
    index: 'desc',
    titulo: 'desc',
    director: 'desc',
    anio: 'desc'
};

function inicio(){

    set_tabla('tblPeliculas');

    renderiza_tHead(); // renderizamos el thead, solo lo ejecutamos una vez
    renderiza_iconos_tHead(1);
    renderiza_tBody(); // renderizamos el tbody
    set_eventos_tHead_tBody_tabla(); // solo lo ejecutamos una vez

    ordena_tabla(1); // ordena la tabla por la columna 1
}

function set_tabla(tbl){

    // asignamos valores a las variables globales de tabla
    tabla = document.getElementById(tbl);
    thead = tabla.querySelector('thead');
    tbody = tabla.querySelector('tbody');
}

// función para renderizar el thead
function renderiza_tHead() {

    let html = "";

    html += `
        <tr>
            <th>
                <span>#</span>
            </th>
            <th data-th="titulo">
                <span>Película</span>
                <span class="icon on">&#9650;</span>
            </th>
            <th data-th="director">
                <span>Director</span>
                <span class="icon on">&#9650;</span>
            </th>
            <th data-th="anio">
                <span>Año</span>
                <span class="icon on">&#9650;</span>
            </th>
        </tr>
    `;
    thead.innerHTML = html;

    // asignamos a 'ths' el listado de 'ths' existentes en el 'thead'
    ths = thead.querySelectorAll('th');
}

function renderiza_iconos_tHead(numColumna) {

    // indicamos la columna por la que queremos 
    // que se muestra la tabla ordenada al inicio
    let obj = (numColumna) ? ths[numColumna] : ths[1];

    ths.forEach(th => {
        const dataTH = th.getAttribute('data-th');
        
        if (dataTH) {
            let icon = th.querySelector('.icon');
            
            // Resetea el estilo inicial
            icon.innerHTML = '';
            icon.classList.remove("on"); // eliminamos a todos la clase 'on'
            icon.classList.add("off"); // añadimos a todos la clase 'on'
            icon.style.color = "#EEEEEE";
            
            // Si es la columna seleccionada y está ordenando ascendentemente
            if (sortOrderTHs[dataTH] === 'asc') {
                icon.innerHTML = '&#9650;'; // Flecha hacia arriba
            } 
            // Si es la columna seleccionada y está ordenando descendentemente
            else if (sortOrderTHs[dataTH] === 'desc') {
                icon.innerHTML = '&#9660;'; // Flecha hacia abajo
            }
        }
    });

    // actualizamos el icono actual
    obj.querySelector('.icon').classList.add("on");
    obj.querySelector('.icon').classList.remove("off");
    obj.querySelector('.icon').style.color = '#006600';
}

// función para renderizar la tabla
function renderiza_tBody() {

    let html = "";

    peliculas.forEach((p, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${p.titulo}</td>
                <td>${p.director}</td>
                <td>${p.anio}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// añadimos la funcionalidad de evento enel thead y el tbody
function set_eventos_tHead_tBody_tabla(){

    // añadimos el evento click a cada th del thead
    ths.forEach((th, index) => {

        // obtenemos del th actual su atributo 'data-th'
        let dataTH = th.getAttribute('data-th');

        // si el th actual tiene el atributo 'data-th'
        if (dataTH) {
            th.addEventListener('click', function() {
                ordena_tabla(index);
                renderiza_iconos_tHead(index);
                renderiza_tBody(); // volvemos a pintar el tbody
            });
        };
    });

    // Añadir un único evento click al tbody
    tbody.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'td') {
            alert(event.target.textContent);
        }
    });
}

// función para ordenar la tabla
function ordena_tabla(numColumna) {

    // indicamos la columna por la que queremos 
    // que se muestra la tabla ordenada al inicio
    let obj = (numColumna) ? ths[numColumna] : ths[1];

    let comparacion = 0;
    let dataTH = obj.getAttribute('data-th');

    sortOrderTHs[dataTH] = (sortOrderTHs[dataTH] === 'asc') ? 'desc' : 'asc';

    if (dataTH) {
        peliculas.sort((a, b) => {

            switch(dataTH) {
                case 'titulo':
                    comparacion = a.titulo.localeCompare(b.titulo);
                    break;
                case 'director':
                    comparacion = a.director.localeCompare(b.director);
                    break;
                case 'anio':
                    comparacion = a.anio - b.data.anio;
                    break;
                default:
                    comparacion = 0;
                    break;
            }
            // devolvemos la dirección ascendente o descendente
            return sortOrderTHs[dataTH] === 'asc' ? comparacion : -comparacion;
        });
    }
}

