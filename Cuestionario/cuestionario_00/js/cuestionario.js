
const arr_preguntas = [
	// JavaScript
	{ 
		tema: '1. JavaScript', 
		pregunta: 'Tipos de datos en Javascript', 
		respuesta: `Null, Undefined, Boolean, String, Number, Symbol, BigInt, Array, Object, Function, Date, RegExp` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>Array</b>?', 
		respuesta: `Un conjunto ordenado de elementos que puede contener valores de diferentes tipos de datos` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: 'Tipos de variables', 
		respuesta: `var, let y const` 
	},
	
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Cómo se accede a un elemento del DOM?', 
		respuesta: `se pueden utilizar varias formas, como getElementById o mediante querySelector` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es una <b>función recursiva</b>?', 
		respuesta: `es la llamada a una misma función hasta que se cumpla una condición que rompa esa recursividad` 
	},
	/*
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>operador ternario</b>?', 
		respuesta: `es un operador logico compactado de un if y un else` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Cómo hacemos una <b>copia profunda</b> de un objeto?', 
		respuesta: `
			utilizamos JSON.parse y JSON.stringify  o con structuredClone<br/> 
			Ejemplo: JSON.parse(JSON.stringify(originalObjeto))` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>spread</b>?', 
		respuesta: `es un metodo para manipular arrays y objetos, ya sea para copiar, combinar, o pasar elementos de manera eficiente` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: 'Explica qué es <b>this</b> y su ambito en Javascript', 
		respuesta: `this en JavaScript se refiere dinámicamente al objeto al que pertenece en tiempo de ejecución` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>clousure</b>?', 
		respuesta: `this en JavaScript se refiere dinámicamente al objeto al que pertenece en tiempo de ejecución` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué diferencia hay entre una función normal y una arrow function con respecto a <b>this</b>?', 
		respuesta: `
			En una <b>función normal</b>, el valor de this depende de cómo se llama la función y  this 
			se enlaza dinámicamente en tiempo de ejecución según el contexto en el que se invoca la función.<br/>
            En una <b>arrow function</b>, this se toma del contexto léxico exterior (el contexto en el 
			que la arrow function está definida) y no tiene su propio this.<br/>
			Esto significa que this dentro de una arrow function siempre se refiere al valor de this en el contexto circundante donde fue creada
			`
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué dos parámetros tiene una Promesa?', 
		respuesta: `
			<b>resolve</b> que se utiliza para resolver la promesa satisfactoriamente 
			y <b>reject</b> que se utiliza para rechazar la promesa` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Cómo convierto un objeto en Array que tenga clave-valor?', 
		respuesta: `utilizando el método Object.entries()` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: 'Explica que es la doble y triple comparacion', 
		respuesta: `el operador doble igual compara solo el valor, el operador triple igual compara tipo y valor`
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es una función asincrona async y dime sus partes principales?', 
		respuesta: `
				es aquella que espera la resolución de una Promesa, así como el return para devolver un valor 
				que será envuelto en la Promesa resuelta.<br/>
		        Además de la declaración de la async function, sus partes principales son await, 
				que pausa la ejecución de la función asíncrona hasta que la Promesa proporcionada se resuelve 
				o se rechaza y un manejo de ejecución-error mediante try-catch
				`
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Cómo puedo controlar la finalización de varias Promesas a la vez?', 
		respuesta: `utilizando el método Promise.all()` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es <b>reduce</b>?', 
		respuesta: `
			es un método para procesar cada elemento de un array de uno en uno y, 
			utilizando una función callback, combinar o transformar esos elementos en un único acumulador como resultado final` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>debounce</b>?', 
		respuesta: `
			es una técnica que se utiliza para retrasar la ejecución de una función hasta que haya 
			transcurrido un cierto periodo de tiempo desde la última vez que se llamó` 
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>hoisting</b>?', 
		respuesta: `
			es un mecanismo del lenguaje JavaScript que eleva las declaraciones de 
			variables y funciones al principio de su ámbito de ejecución`
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: 'Dime que es un Web Component', 
		respuesta: `es aquel que permite crear componentes de etiquetado propio, que son reutilizables y encapsulados en aplicaciones web`
	},
	{ 
		tema: '1. JavaScript', 
		pregunta: '¿Qué es un <b>template</b> tag Element?', 
		respuesta: `
			es una característica que permite a una función acceder a variables de su entorno léxico, incluso después de que 
			la función externa haya terminado de ejecutarse
			`
	},
	*/
	
	// Angular
	{ 
		tema: '2. Angular', 
		pregunta: '¿Qué es Angular y cómo se diferencia de AngularJS?', 
		respuesta: `
			Angular es un framework de desarrollo de aplicaciones web desarrollado por Google. <br/>
			Se diferencia de AngularJS en que Angular es una reescritura completa y moderna, mientras 
			que AngularJS es la primera versión del framework, conocida como Angular 1.x.
			`
	},
	{ 
		tema: '2. Angular', 
		pregunta: '¿Cuáles son las diferencias entre componentes y directivas en Angular?', 
		respuesta: `
			Los componentes son una versión más avanzada de las directivas en Angular. <br/>
			Mientras que las directivas permiten modificar el DOM o el comportamiento de un componente, 
			los componentes encapsulan tanto la estructura HTML como el comportamiento de una parte de la interfaz de usuario
			`
	}
	/*
	,
	{ 
		tema: '2. Angular', 
		pregunta: 'Explica el ciclo de vida de un componente en Angular', 
		respuesta: `
			El ciclo de vida de un componente en Angular consta de varios métodos como ngOnInit, ngOnChanges, 
			ngDoCheck, ngAfterViewInit, ngAfterViewChecked, entre otros. <br/>
			Estos métodos se llaman en momentos específicos durante la creación, modificación y destrucción del componente.
			`
	},
	{ 
		tema: '2. Angular', 
		pregunta: '¿Quién escribió "Cien años de soledad"?', 
		respuesta: `
			Angular es un framework de desarrollo de aplicaciones web desarrollado por Google. <br/>
			Se diferencia de AngularJS en que Angular es una reescritura completa y moderna, mientras 
			que AngularJS es la primera versión del framework, conocida como Angular 1.x.
			`
	},
	{ 
		tema: '2. Angular',  
		pregunta: '¿Quién escribió "Cien años de soledad"?', 
		respuesta: `
			Angular es un framework de desarrollo de aplicaciones web desarrollado por Google. <br/>
			Se diferencia de AngularJS en que Angular es una reescritura completa y moderna, mientras 
			que AngularJS es la primera versión del framework, conocida como Angular 1.x.
			`
	},
	{ 
		tema: '2. Angular',  
		pregunta: '¿Quién escribió "Cien años de soledad"?', 
		respuesta: `
			Angular es un framework de desarrollo de aplicaciones web desarrollado por Google. <br/>
			Se diferencia de AngularJS en que Angular es una reescritura completa y moderna, mientras 
			que AngularJS es la primera versión del framework, conocida como Angular 1.x.
			`
	},
	{ 
		tema: '2. Angular', 
		pregunta: '¿Quién escribió "Cien años de soledad"?', 
		respuesta: `
			Angular es un framework de desarrollo de aplicaciones web desarrollado por Google. <br/>
			Se diferencia de AngularJS en que Angular es una reescritura completa y moderna, mientras 
			que AngularJS es la primera versión del framework, conocida como Angular 1.x.
			`
	}*/
];

