
function inicio(){

    let tbl0 = new Tabla_HTML('tblPeliculas_0');
    tbl0.init(1); // iniciamos el orden de datos en la columna 1

    let tbl1 = new Tabla_HTML('tblPeliculas_1');
    tbl1.init(2); // iniciamos el orden de datos en la columna 1

    // ejemplo de como deberíamos desarrollar el codigo para controlar toda la tabla en la llamada
    tbl1.init1({
        indice: 0, // indicamos que no queremos indice
        sort: {
            value: 0, // si el valor es 0, no será una tabla que ordena los campos
            colum: 1, // indicamos la columna de inicio
        },
        titulo: {txt:'Película', order: 'si'},
        director: {txt:'Director', order: 'si'},
        anio: {txt:'Año', order: 'si'} 
    }); 
}

// función constructora para crear tablas dinámicas
function Tabla_HTML(tblId) {

    let that = this;

    // Estado inicial para los valores de la tabla
    this.tabla_values = {
        indice: {value:'#', order: 'no', sort: ''},
        titulo: {value:'Película', order: 'si', sort: 'desc'},
        director: {value:'Director', order: 'si', sort: 'desc'},
        anio: {value:'Año', order: 'si', sort: 'desc'}
    }

    // Propiedades para los elementos de la tabla
    this.tabla = document.getElementById(tblId);
    this.thead = this.tabla.querySelector('thead');
    this.tbody = this.tabla.querySelector('tbody');
    this.ths;

    // función para inicializar la tabla al cargar la página
    this.init = function(thNum) {
        that.renderiza_tHead();
        that.renderiza_iconos_tHead(thNum);
        that.set_eventos_tHead_tBody_tabla();
        that.renderiza_tBody();
    }
    this.init1 = function(obj) {
        // aqui desarrollaríamos el codigo de inicialización de la tabla
    }
}

// función para renderizar el thead
Tabla_HTML.prototype.renderiza_tHead = function() {

    let html = "";

    html = "<tr>";
    
    // recorremos cada propiedad del objeto th_values
    for (let clave in this.tabla_values) {

        let dataTH = '';
        let spanIcon = '';
        const thClave = this.tabla_values[clave];
        
        // si tiene order: 'si', entonces agregamos el 'data-th' y el '<span>'
        if (thClave.order === 'si') {
            dataTH = `data-th="${clave}"`;
            spanIcon = `<span class="icon on">&#9650;</span>`;
        }

        // Construir el <th> con la plantilla de string
        html += `
            <th ${dataTH}>
                <span>${thClave.value}</span>
                ${spanIcon}
            </th>
        `;
    }
    html += "</tr>";
    this.thead.innerHTML = html;

    // asignamos a 'ths' el listado de 'ths' existentes en el 'thead'
    this.ths = this.thead.querySelectorAll('th');
}

Tabla_HTML.prototype.renderiza_tBody = function(){

    let html = "";
    let that = this;
    //alert(this.tabla.getAttribute("id"))

    peliculas.forEach((p, index) => {

        html += "<tr>";

        // los valores de 'clave' tienen que ser iguales a los atributos del array peliculas
        for (let clave in that.tabla_values) {

            // si la clave es igual al 'indice', pintamos el index del bucle forEach
            // si la clave es distinta al 'indice', pintamos el resto de claves
            html += (clave == 'indice') ? `<td>${index + 1}</td>` : `<td>${p[clave]}</td>`;
        }
        html += "</tr>"
    });
    this.tbody.innerHTML = html;
}

Tabla_HTML.prototype.renderiza_iconos_tHead = function(numColumna)  {

    let that = this; // referenciamos a 'Tabla_HTML'

    // indicamos la columna por la que queremos 
    // que se muestra la tabla ordenada al inicio
    // si no viene un valor, tomamos por defecto la columna 1
    let obj = (numColumna) ? this.ths[numColumna] : this.ths[1];

    this.ths.forEach(th => {
        const dataTH = th.getAttribute('data-th');
        
        if (dataTH) {
            let icon = th.querySelector('.icon');
            
            // Resetea el estilo inicial
            icon.innerHTML = '';
            icon.classList.remove("on"); // eliminamos a todos la clase 'on'
            icon.classList.add("off"); // añadimos a todos la clase 'on'
            icon.style.color = "#EEEEEE";
            
            // Si es la columna seleccionada y está ordenando ascendentemente
            if (that.tabla_values[dataTH].sort === 'asc') {
                icon.innerHTML = '&#9660;'; // Flecha hacia arriba
            } 
            // Si es la columna seleccionada y está ordenando descendentemente
            else if (that.tabla_values[dataTH].sort === 'desc') {
                icon.innerHTML = '&#9650;'; // Flecha hacia abajo
            }
        }
    });

    // actualizamos el icono actual
    obj.querySelector('.icon').classList.add("on");
    obj.querySelector('.icon').classList.remove("off");
    obj.querySelector('.icon').style.color = '#006600';
}

Tabla_HTML.prototype.set_eventos_tHead_tBody_tabla = function(){

    let that = this; // referenciamos a 'Tabla_HTML'

    // añadimos el evento click a cada th del thead
    this.ths.forEach((th, index) => {

        // obtenemos del th actual su atributo 'data-th'
        let dataTH = th.getAttribute('data-th');

        // si el th actual tiene el atributo 'data-th'
        if (dataTH) {
            th.addEventListener('click', function() {
                that.ordena_tabla(index);
                that.renderiza_iconos_tHead(index);
                that.renderiza_tBody(); // volvemos a renderizar el tbody
            });
        };
    });

    // Añadir un único evento click al tbody
    this.tbody.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'td') {
            alert("TD="+ event.target.textContent);
        }
    });
}

// función para ordenar la tabla
// la ordenacion toma tres criterios si las comparaciones son iguales
// Orden comparacion: Titulo, Año, Director
Tabla_HTML.prototype.ordena_tabla = function(numColumna) {

    let that = this; // referenciamos a 'Tabla_HTML'

    let obj = (numColumna) ? this.ths[numColumna] : this.ths[1];
    let dataTH = obj.getAttribute('data-th');

    this.tabla_values[dataTH].sort = (this.tabla_values[dataTH].sort === 'asc') ? 'desc' : 'asc';

    if (dataTH) {
        peliculas.sort((a, b) => {

            let anioA = a.anio;
            let anioB = b.anio;

            let comparacionPrimaria = 0; // corresponde al criterio principal
            let comparacionSecundaria = 0; // corresponde al criterio secundario
            let comparacionTerciaria = 0; // corresponde al criterio terciario

            switch(dataTH) {
                case 'titulo':
                    comparacionPrimaria = a.titulo.localeCompare(b.titulo);
                    comparacionSecundaria = anioA - anioB;
                    comparacionTerciaria = a.director.localeCompare(b.director);
                    break;
                case 'director':
                    comparacionPrimaria = a.director.localeCompare(b.director);
                    comparacionSecundaria = anioA - anioB;
                    comparacionTerciaria = a.titulo.localeCompare(b.titulo);
                    break;
                case 'anio':
                    comparacionPrimaria = anioA - anioB;
                    comparacionSecundaria = a.titulo.localeCompare(b.titulo);
                    comparacionTerciaria = b.director.localeCompare(a.director);
                    break;
                default:
                    comparacionPrimaria = 0;
                    break;
            }

            if (that.tabla_values[dataTH].sort === 'asc') {
                return comparacionPrimaria || comparacionSecundaria || comparacionTerciaria;
            } else {
                return (comparacionPrimaria || comparacionSecundaria || comparacionTerciaria) * -1;
            }
        });
    }
}

// función para ordenar la tabla
Tabla_HTML.prototype.ordena_tabla_default = function(numColumna) {

    let that = this; // referenciamos a 'Tabla_HTML'

    let obj = (numColumna) ? this.ths[numColumna] : this.ths[1];
    let dataTH = obj.getAttribute('data-th');

    this.sortOrderTHs[dataTH] = (this.sortOrderTHs[dataTH] === 'asc') ? 'desc' : 'asc';

    if (dataTH) {
        peliculas.sort((a, b) => {

            let comparacion = 0;

            switch(dataTH) {
                case 'titulo':
                    comparacion = a.titulo.localeCompare(b.titulo);
                    break;
                case 'director':
                    comparacion = a.director.localeCompare(b.director);
                    break;
                case 'anio':
                    comparacion = a.anio - b.anio;
                    break;
                default:
                    comparacion = 0;
                    break;
            }
            // devolvemos la dirección ascendente o descendente
            return that.sortOrderTHs[dataTH] === 'asc' ? comparacion : -comparacion;
        });
    }
}
