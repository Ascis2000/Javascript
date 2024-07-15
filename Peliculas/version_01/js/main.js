
// Estado inicial para la dirección de ordenación
let sortOrderTHs = {
    index: 'desc',
    titulo: 'desc',
    director: 'desc',
    anio: 'desc'
};

function inicio(numTH){

    // indicamos la columna por la que queremos 
    // que se muestra la tabla ordenada al inicio
    let thInicio = (numTH) ? ths[numTH] : ths[1];

    ordena_tabla(thInicio);
    renderiza_iconos_tHead(thInicio, 'asc');
    renderiza_tBody(); // renderizamos el tbody
    set_eventos_tHead_tBody_tabla(); // solo lo ejecutamos una vez
}

function renderiza_iconos_tHead(obj, modo) {

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
                <td>${p.data.director}</td>
                <td>${p.data.año}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// añadimos la funcionalidad de evento enel thead y el tbody
function set_eventos_tHead_tBody_tabla(){

    // añadimos el evento click a cada th del thead
    ths.forEach(th => {

        // obtenemos del th actual su atributo 'data-th'
        let dataTH = th.getAttribute('data-th');

        // si el th actual tiene el atributo 'data-th'
        if (dataTH) {
            th.addEventListener('click', function() {
                ordena_tabla(this);
                renderiza_iconos_tHead(this, 'asc');
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
function ordena_tabla(obj) {

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
                    comparacion = a.data.director.localeCompare(b.data.director);
                    break;
                case 'anio':
                    comparacion = a.data.año - b.data.año;
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

