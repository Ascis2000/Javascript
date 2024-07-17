
function inicio(){
    pintarPeliculasHTML();
}

function pintarPeliculasHTML(){

    const tabla = document.getElementById('tblPeliculas');
    const tbody = tabla.querySelector('tbody');

    peliculas.forEach((p, index) => {

        const tr = document.createElement('tr');

        const tdIndex = document.createElement('td');
        tdIndex.textContent = index + 1;
        tr.appendChild(tdIndex);

        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = p.titulo;
        tr.appendChild(tdTitulo);

        const tdDirector = document.createElement('td');
        tdDirector.textContent = p.director;
        tr.appendChild(tdDirector);

        const tdAnio = document.createElement('td');
        tdAnio.textContent = p.anio;
        tr.appendChild(tdAnio); 
        
        // Haciendo un clousure
        // Añadir evento click para cada celda usando closure
        tr.addEventListener('click', (function(tr) {
            return function(event) {
                alert(event.target.textContent);
            };
        })
        (tr));

        tbody.appendChild(tr);
    });
}
