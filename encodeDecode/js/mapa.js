
/* función constructora donde creamos el mapa de caracteres.
** Propiedades: 1
**    - mapa

** Métodos: 2
**    - getMapa()
**    - pintarTablaHTML()
*/
const MapaChars = function(){

    this.mapa = {
        // clave-valor en minúsculas
        'a': 'A&!Bg', 'b': 'C@#D', 'c': 'E$%F', 'd': 'G^&H', 'e': 'I*()5', 'f': 'J_-K',
        'g': 'L=+M', 'h': 'N{}O', 'i': 'P[]Q', 'j': 'R~S~', 'k': 'T|U`', 'l': 'V!>W',
        'm': 'X/ZY', 'n': ':;NZ', 'ñ': 'ñÑ{|}', 'o': 'ó!Ó?', 'p': 'úÚ|/', 'q': '¡¿{}',
        'r': '&¡¿?', 's': '¿?&¡!', 't': 'áé,;', 'u': 'ÁÉ,.ó', 'v': 'ÓÚ"', 'w': 'Üü:"',
        'x': 'ñÑ{&}', 'y': '¡ñ¿?', 'z': '¡!¿?',

        // clave-valor en mayúsculas
        'A': 'q^#W', 'B': 'eR!T', 'C': 'yU%I', 'D': 'oP&{', 'E': 'aS(D', 'F': 'F}G}',
        'G': 'H]J_', 'H': 'K[*L', 'I': 'Z}XC', 'J': 'V>B;', 'K': 'NMX:', 'L': '?&}Q',
        'M': 'ÑW?"', 'N': 'éó;ú', 'Ñ': 'ÁÉÚÓ', 'O': 'Ó,.', 'P': 'áñÁ;', 'Q': 'ÉÍÓ!',
        'R': '¿¡ÁÉ', 'S': 'ÍÓÚ', 'T': 'Ú.,-', 'U': 'áÁÓÉ', 'V': 'ÍhÚ4', 'W': 'ÓÁÚÍ',
        'X': 'óÁÉÍ', 'Y': 'ú-@Ó', 'Z': 'ÉÓÚÁ',

        // clave-valor en caracteeres especiales
        ',': '#!c%', ';': '@PQ;', '.': '##f%1', ':': '&*2^:', '?': 'Q?W@?', '¿': 't%2-$',
        '!': '&RTY!', '&': 'Z,C!&', '%': '8(MN%', '^': 'VBNM^', '(': '1c#@(', ')': 'BGT$)', 
        '{': '4F&!{', '}': 'C*3D}', '[': '!2V$[', ']': '%2fP]', '~': '5hH&~', '/': 'j=Qw/', 
        '|': 'v*E9|', '`': '7d/J`', '<': 'R-45*', '>': 'PO2e>', '=': '1qaz=', '+': 'Edrf+',
        '-': 'xD2-b"', '_': 't*ui=', '"': 'rf5$ñ', ' ': '--%Z',
        // faltan, entre otros: *¡:#€
        
        // vocales acentuadas y especiales
        'á': 'nh#6á', 'é': 'ujM9é', 'í': 'bg&8Ñ', 'ó': 'ikl0ó', 'ú': 'lK:Jú', 
        'Á': 'wJ!dÁ', 'É': 'bN5fÉ', 'Í': 'aG9VÍ', 'Ó': 'Z2SdÓ', 'Ú': 'XwN6Ú', 
        'ü': 'BnM4ü', 'Ü': 'qW;RÜ'
    };

    // método para devolver el mapa de caracteres
    this.getMapa = function(){
        return this.mapa;
    }

    // método para devolver una tabla HTML del mapa de caracteres
    this.pintarTablaHTML = function(){
        let tblHtml = "";

        for (const key in this.mapa) {
            if (this.mapa.hasOwnProperty(key)) {
                tblHtml += 
                    "<tr>" +
                        "<td>" + key + "</td>" +
                        "<td>" + this.mapa[key] +"</td>" +
                    "</tr>";
            }
        }
        return tblHtml;
    }
}







