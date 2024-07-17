
const tabla = document.getElementById('tblPeliculas');
const tbody = tabla.querySelector('tbody');
const ths = tabla.querySelectorAll('th');

function inicio(){
    renderizaTabla(); // pintamos la tabla pro primera vez
    set_tHead_tBodyTabla(); // solo lo ejecutamos una vez
}

// función para renderizar la tabla
function renderizaTabla() {
    
    let html = '';
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
function set_tHead_tBodyTabla(){
    // Añadir evento click a cada encabezado de columna
    ths.forEach(th => {
        th.addEventListener('click', function() {
            const dataTH = this.getAttribute('data-th');
            ordenaTabla(dataTH);
            renderizaTabla();
        });
    });

    // Añadir un único evento click al tbody
    tbody.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'td') {
            alert(event.target.textContent);
        }
    });
}

// función para ordenar la tabla
function ordenaTabla(valorTH) {
    peliculas.sort((a, b) => {
        switch(valorTH) {
            case 'index':
                return peliculas.indexOf(a) - peliculas.indexOf(b);
            case 'titulo':
                return a.titulo.localeCompare(b.titulo);
            case 'director':
                return a.data.director.localeCompare(b.data.director);
            case 'anio':
                return a.data.año - b.data.año;
            default:
                return 0;
        }
    });
}


