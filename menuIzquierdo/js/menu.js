
document.addEventListener('DOMContentLoaded', function() {
    inicio();
});

function inicio(){

    renderizar_menu(); // primero creamos el menú dinámicamente
    set_eventsTagsH4(); // asignamos a las etiquetas H4 su evento
    set_eventsTagsLI(); // asignamos a las etiquetas LI su evento
    set_eventsTagsSPAN(); // asignamos a las etiquetas SPAN su evento

    // mostrar_menuListIDs('all'); // todos los elementos visibles
    // mostrar_menuListIDs(); // todos los elementos ocultos
    // mostrar_menuListIDs('arrays', 'find'); // muestra varios elementos
    mostrar_menuListIDs('id_titulo1', 'id_titulo2'); // muestra varios elementos
}

function renderizar_menu(){

    let html = "";
    let sidebar = document.querySelector('.sidebar');

    // recorremos el array 'arr_menu'
    arr_menu.forEach((menu, index) => {

        let titulo = `${menu.titulo}`;
        html += `<h4 data-id="${menu.id.toLowerCase()}">${titulo} <span class="arrow">&#9662;</span></h4>`;
        html += `<ul>`;

        // Recorremos el array 'menu.data'
        for (let dt of menu.data) {
            let txt = `${dt.txt}`;
            let url = `${dt.url}`;
    
            html += `<li><span data-url="${url}">${txt}</span></li>`;
        }
        html += `</ul>`;
    });
    html += `<div class="separador"></div>`;
    sidebar.innerHTML = html;
}

function set_eventsTagsH4(modo){

    let h4s = document.querySelectorAll('.sidebar h4');

    h4s.forEach(function(h4) {

        const ul = h4.nextElementSibling;
        const arrow = h4.querySelector('.arrow');

        h4.addEventListener('click', () => {
            const isVisible = ul.classList.toggle('visible');
            // alterna entre Flecha hacia arriba (&#9652;) o Flecha hacia abajo (&#9662;)
            arrow.innerHTML = isVisible ? '&#9652;' : '&#9662;'; 
        });
    });
}

function set_eventsTagsLI(){

    let h4s = document.querySelectorAll('.sidebar h4');
    let lis = document.querySelectorAll('.sidebar ul li');

    lis.forEach(function(li) {
        li.addEventListener('click', function() {

            // Elimina la clase 'active' de todos los spans
            h4s.forEach(function(h4) {
                h4.classList.remove('active');
            });

            // obtengo el h4 padre
            const h4 = li.closest('ul').previousElementSibling;
            h4.classList.add('active');
        });
    });
}

function set_eventsTagsSPAN(){

    let spans = document.querySelectorAll('.sidebar ul li span');
    spans.forEach(function(span) {
        span.addEventListener('click', function() {

            console.clear();
            console.log("Datos de consola limpiados!")

            // Elimina la clase 'active' de todos los spans
            spans.forEach(function(sp) {
                sp.classList.remove('active');
            });

            // Agrega la clase 'active' al span que ha sido pulsado
            span.classList.add('active');

            // Cambia el src del iframe
            var page = span.getAttribute('data-url');
            document.getElementById('mainIframe').src = "html/" + page;
        });
    });
}

// funcion que muestra todos los identificadores del menú pasados por parámetro
function mostrar_menuListIDs(...ids){

    let  identificadores;
    const h4s = document.querySelectorAll('.sidebar h4'); // obtenemos todos los elementos h4 dentro de la clase 'sidebar'
    const h4s_toArray = Array.from(h4s); // convertimos el NodeList a Array

    // si el parámetro es igual a 'all'
    // mostramos todos los componentes del menu
    if(ids[0] === 'all') {

        // por cada elemento del array, lo mostramos
        h4s_toArray.forEach(function(h4) {
            mostrar_UL_MENU(h4);
        });
    }
    else {
        // si se pasa como argumento 'ids' usamos el primer elemento, 
        // si no, usamos un array vacío
        identificadores = (ids.length > 0) ? ids : []; // obtenemos los valores pasados por parametro

        // recorremos todos los tags h4
        h4s_toArray.forEach(function(h4) {

            let dataIdH4 = h4.dataset.id;

            // comprobamos si el identificador de dataIdH4 actual está en el array de 'identificadores'
            // si es true en alguno de los casos, mostraremos el identificador correspondiente
            if (identificadores.includes(dataIdH4)) {
                mostrar_UL_MENU(h4);
            }
        });
    }
}

function mostrar_UL_MENU(obj){

    let ul = obj.nextElementSibling; // obtenemos en ul
    ul.classList.add('visible'); // ponemos el ul actual visible

    // obtenemos la clase 'arrow' relacionada con su H4
    let arrow = obj.querySelector('.arrow');
    arrow.innerHTML = '&#9652;'; // Flecha hacia arriba
}

// funcion que muestra un unico identificador del menú pasado por parámetro
function mostrar_menuID(id){

    let h4s = document.querySelectorAll('.sidebar h4');
    let h4s_toArray = Array.from(h4s); // convertimos el NodeList a Array

    let h4 = h4s_toArray.find(function(h4) {
        // devolvemos el nodo encontrado
        return h4.dataset.id === id; // h4.dataset.id y h4.getAttribute('data-id'), hace lo mismo
    });

    // mostramos el objeto
    mostrar_UL_MENU(h4);
}


