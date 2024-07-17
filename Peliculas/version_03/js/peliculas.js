
// array de directores
const arr_directores = [
    { id: 'alHitchcock', nombre: 'Alfred Hitchcock' },
    { id: 'chNolan', nombre: 'Christopher Nolan' },
    { id: 'frFoCoppola', nombre: 'Francis Ford Coppola' },
    { id: 'guDelToro', nombre: 'Guillermo del Toro' },
    { id: 'jaCameron', nombre: 'James Cameron' },
    { id: 'joCoen', nombre: 'Joel Coen' },
    { id: 'laWachowski', nombre: 'Lana Wachowski' },
    { id: 'liWachowski', nombre: 'Lilly Wachowski' },
    { id: 'maScorsese', nombre: 'Martin Scorsese' },
    { id: 'peJackson', nombre: 'Peter Jackson' },
    { id: 'quTarantino', nombre: 'Quentin Tarantino' },
    { id: 'riDonner', nombre: 'Richard Donner' },
    { id: 'riScott', nombre: 'Ridley Scott' },
    { id: 'roZemeckis', nombre: 'Robert Zemeckis' },
    { id: 'stKubrick', nombre: 'Stanley Kubrick' },
    { id: 'stSpielberg', nombre: 'Steven Spielberg' }
];

// array de interpretes
const arr_interpretes = [
    { id: 'alPacino', nombre: 'Al Pacino' },
    { id: 'anHathaway', nombre: 'Anne Hathaway' },
    { id: 'arSchwarzenegger', nombre: 'Arnold Schwarzenegger' },
    { id: 'brPitt', nombre: 'Brad Pitt' },
    { id: 'caAnMoss', nombre: 'Carrie-Anne Moss' },
    { id: 'chBale', nombre: 'Christian Bale' },
    { id: 'chHemsworth', nombre: 'Chris Hemsworth' },
    { id: 'chReeve', nombre: 'Christopher Reeve' },
    { id: 'daGlover', nombre: 'Danny Glover' },
    { id: 'emStone', nombre: 'Emma Stone' },
    { id: 'emWatson', nombre: 'Emma Watson' },
    { id: 'gaSinise', nombre: 'Gary Sinise' },
    { id: 'heLedger', nombre: 'Heath Ledger' },
    { id: 'jeLawrence', nombre: 'Jennifer Lawrence' },
    { id: 'joTravolta', nombre: 'John Travolta' },
    { id: 'juLaw', nombre: 'Jude Law' },
    { id: 'keReeves', nombre: 'Keanu Reeves' },
    { id: 'leDiCaprio', nombre: 'Leonardo DiCaprio' },
    { id: 'liNeeson', nombre: 'Liam Neeson' },
    { id: 'liHamilton', nombre: 'Linda Hamilton' },
    { id: 'maMcDowell', nombre: 'Malcolm McDowell' },
    { id: 'maBrando', nombre: 'Marlon Brando' },
    { id: 'maMcConaughey', nombre: 'Matthew McConaughey' },
    { id: 'meGibson', nombre: 'Mel Gibson' },
    { id: 'meStreep', nombre: 'Meryl Streep' },
    { id: 'moFreeman', nombre: 'Morgan Freeman' },
    { id: 'naPortman', nombre: 'Natalie Portman' },
    { id: 'paMagee', nombre: 'Patrick Magee' },
    { id: 'roDowneyJr', nombre: 'Robert Downey Jr.' },
    { id: 'scJohansson', nombre: 'Scarlett Johansson' },
    { id: 'siWeaver', nombre: 'Sigourney Weaver' },
    { id: 'tiRoth', nombre: 'Tim Roth' },
    { id: 'toCruise', nombre: 'Tom Cruise' },
    { id: 'toHanks', nombre: 'Tom Hanks' },
    { id: 'toSkerritt', nombre: 'Tom Skerritt' },
    { id: 'viDavis', nombre: 'Viola Davis' },
    { id: 'wiSmith', nombre: 'Will Smith' }
];

// array de generos
const arr_generos = [
    { id: 'accion', nombre: 'Acción' },
    { id: 'aventuras', nombre: 'Aventuras' },
    { id: 'belica', nombre: 'Bélica' },
    { id: 'biografica', nombre: 'Biográfica' },
    { id: 'ciFiccion', nombre: 'Ciencia Ficción' },
    { id: 'ciNegro', nombre: 'Cine Negro' },
    { id: 'crimen', nombre: 'Crimen' },
    { id: 'comedia', nombre: 'Comedia' },
    { id: 'drama', nombre: 'Drama' },
    { id: 'fantasia', nombre: 'Fantasía' },
    { id: 'gansteres', nombre: 'Gánsteres' },
    { id: 'historica', nombre: 'Histórica' },
    { id: 'horror', nombre: 'Horror' },
    { id: 'misterio', nombre: 'Misterio' },
    { id: 'musical', nombre: 'Musical' },
    { id: 'romance', nombre: 'Romance' },
    { id: 'terror', nombre: 'Terror' },
    { id: 'thriller', nombre: 'Thriller' },
    { id: 'western', nombre: 'Western' }
]

// array de peliculas
const arr_peliculas = [
    { 
        titulo: 'Alien', 
        director: 'riScott', 
        interpretes: ['siWeaver', 'toSkerritt'], 
        genero: ['ciFiccion', 'terror'],
        anio: 1979 
    },
    { 
        titulo: 'El Padrino', 
        director: 'frFoCoppola', 
        interpretes: ['alPacino', 'maBrando'], 
        genero: ['drama', 'crimen', 'gansteres'],
        anio: 1972 
    },
    { 
        titulo: 'La Lista de Schindler', 
        director: 'stSpielberg', 
        interpretes: ['liNeeson'], 
        genero: ['belica', 'biografica', 'drama'],
        anio: 1993 
    },
    { 
        titulo: 'La Naranja Mecánica', 
        director: 'stKubrick', 
        interpretes: ['maMcDowell', 'paMagee'], 
        anio: 1971 
    },
    { 
        titulo: 'Pulp Fiction', 
        director: 'quTarantino', 
        interpretes: ['joTravolta', 'tiRoth'], 
        anio: 1994 
    },
    { 
        titulo: 'El Caballero Oscuro', 
        director: 'chNolan', 
        interpretes: ['chBale', 'heLedger'], 
        anio: 2008 
    },
    { 
        titulo: 'Forrest Gump', 
        director: 'roZemeckis', 
        interpretes: ['toHanks', 'gaSinise'], 
        anio: 1994 
    },
    { 
        titulo: 'Interstellar', 
        director: 'chNolan', 
        interpretes: ['maMcConaughey', 'anHathaway'], 
        anio: 2014 
    },
    { 
        titulo: 'Matrix', 
        director: ['laWachowski', 'liWachowski'], 
        interpretes: ['keReeves', 'caAnMoss'], 
        anio: 1999 
    }
];