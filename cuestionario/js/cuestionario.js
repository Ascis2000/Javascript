
// Array general de unificación
const arr_temas = [];

// TEMA 1
const arr_tema1 = {

	tema: 'HTML', 
	data: [
		{ 
			pregunta: '¿Cuáles son las principales diferencias entre HTML y HTML5?', 
			respuesta: `
				HTML5 introduce nuevas etiquetas semánticas como &lt;article>, 
				&lt;section>, &lt;header>, &lt;footer>, entre otras. <br/>
				También incluye soporte para multimedia integrada con &lt;video> y &lt;audio>, 
				así como capacidades de almacenamiento local con localStorage y sessionStorage
				` 
		},
		{ 
			pregunta: '¿Cuáles son las nuevas características de formulario introducidas en HTML5?', 
			respuesta: `
				HTML5 introdujo nuevos tipos de input como email, url, number, 
				date, color, así como atributos de validación como required, pattern, min, max. <br/>
				También incluyó soporte para el elemento &lt;datalist> para proporcionar 
				sugerencias de entrada
				` 
		},
		{ 
			pregunta: '¿Cómo se puede integrar vídeo y audio en una página web usando HTML5?', 
			respuesta: `
				Se puede integrar vídeo usando el elemento &lt;video> y &lt;audio> usando el 
				elemento &lt;audio>. <br/>
				Ambos elementos permiten especificar archivos multimedia 
				con diferentes formatos (MP4, OGG, WAV, etc.) usando atributos como src, 
				controls, autoplay, entre otros
			` 
		}
	]
}

// TEMA 2
const arr_tema2 = {

	tema: 'Javascript', 
	data: [
		{ 
			pregunta: 'Tipos de datos en Javascript', 
			respuesta: `
				Null, Undefined, Boolean, String, Number, 
				Symbol, BigInt, Array, Object, Function, Date, RegExp` 
		},
		{ 
			pregunta: '¿Qué es un <b>Array</b>?', 
			respuesta: `
				Un conjunto ordenado de elementos que puede contener 
				valores de diferentes tipos de datos` 
		},
		{ 
			pregunta: 'Tipos de variables', 
			respuesta: `var, let y const` 
		},
		
		{ 
			pregunta: '¿Cómo se accede a un elemento del DOM?', 
			respuesta: `
				se pueden utilizar varias formas, como getElementById 
				o mediante querySelector` 
		},
		{ 
			pregunta: '¿Qué es una <b>función recursiva</b>?', 
			respuesta: `
					es la llamada a una misma función hasta que se cumpla 
					una condición que rompa esa recursividad
					` 
		},
		{ 
			pregunta: '¿Qué es un <b>operador ternario</b>?', 
			respuesta: `es un operador logico compactado de un if y un else` 
		},
		{ 
			pregunta: '¿Cómo hacemos una <b>copia profunda</b> de un objeto?', 
			respuesta: `
					utilizamos JSON.parse y JSON.stringify  o con structuredClone<br/> 
					Ejemplo: JSON.parse(JSON.stringify(originalObjeto))
					` 
		},
		{ 
			pregunta: '¿Qué es un <b>spread</b>?', 
			respuesta: `es un metodo para manipular arrays y objetos, ya sea para copiar, combinar, o pasar elementos de manera eficiente` 
		},
		{ 
			pregunta: 'Explica qué es <b>this</b> y su ambito en Javascript', 
			respuesta: `this en JavaScript se refiere dinámicamente al objeto al que pertenece en tiempo de ejecución` 
		},
		{ 
			pregunta: '¿Qué diferencias existen entre <b>sessionStorage</b> y <b>localStorage</b>?', 
			respuesta: `
					Los datos almacenados en <b>sessionStorage</b> tienen un alcance limitado 
					a la ventana o pestaña actual del navegador. <br/>
					Esto significa que los datos persisten solo mientras la ventana 
					o pestaña está abierta y se pierden cuando se cierra. <br/><br/>
					Los datos almacenados en <b>localStorage</b> tienen un alcance que abarca 
					todo el dominio del sitio web. <br/>
					Estos datos persisten incluso después de cerrar y reabrir 
					el navegador, y se mantienen almacenados hasta que se 
					eliminan explícitamente o se borra el caché del navegador.
					` 
		},
		{ 
			pregunta: '¿Qué es un <b>clousure</b>?', 
			respuesta: `this en JavaScript se refiere dinámicamente al objeto al que pertenece en tiempo de ejecución` 
		},
		{ 
			pregunta: '¿Qué diferencia hay entre una <b>función tradicional</b> y una <b>arrow function</b> con respecto a <b>this</b>?', 
			respuesta: `
					En una <b>función tradicional</b>, el valor de this depende de cómo se llama la función y  this 
					se enlaza dinámicamente en tiempo de ejecución según el contexto en el que se invoca la función.<br/>
					En una <b>arrow function</b>, this se toma del contexto léxico exterior (el contexto en el 
					que la arrow function está definida) y no tiene su propio this.<br/>
					Esto significa que this dentro de una arrow function siempre se refiere al valor de this en el contexto circundante donde fue creada
					`
		},
		{ 
			pregunta: '¿Qué dos parámetros tiene una Promesa?', 
			respuesta: `
					<b>resolve</b> que se utiliza para resolver la promesa satisfactoriamente 
					y <b>reject</b> que se utiliza para rechazar la promesa
					` 
		},
		{ 
			pregunta: '¿Cómo convierto un objeto en Array que tenga clave-valor?', 
			respuesta: `utilizando el método Object.entries()` 
		},
		{ 
			pregunta: 'Explica que es la doble y triple comparacion', 
			respuesta: `
					el operador doble igual compara solo el valor, el operador triple 
					igual compara tipo y valor
					`
		},
		{ 
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
			pregunta: '¿Cómo puedo controlar la finalización de varias Promesas a la vez?', 
			respuesta: `utilizando el método Promise.all()` 
		},
		{ 
			pregunta: '¿Qué es <b>reduce</b>?', 
			respuesta: `
				es un método para procesar cada elemento de un array de uno en uno y, 
				utilizando una función callback, combinar o transformar esos elementos 
				en un único acumulador como resultado final
				` 
		},
		{ 
			pregunta: '¿Qué es un <b>debounce</b>?', 
			respuesta: `
				es una técnica que se utiliza para retrasar la ejecución de una función hasta que haya 
				transcurrido un cierto periodo de tiempo desde la última vez que se llamó
				` 
		},
		{ 
			pregunta: '¿Qué es un <b>hoisting</b>?', 
			respuesta: `
				es un mecanismo del lenguaje JavaScript que eleva las declaraciones de 
				variables y funciones al principio de su ámbito de ejecución
				`
		},
		{ 
			pregunta: 'Dime que es un Web Component', 
			respuesta: `
				es aquel que permite crear componentes de etiquetado propio, 
				que son reutilizables y encapsulados en aplicaciones web
				`
		},
		{ 
			pregunta: '¿Qué es un <b>template</b> tag Element?', 
			respuesta: `
				es una característica que permite a una función acceder a 
				variables de su entorno léxico, incluso después de que 
				la función externa haya terminado de ejecutarse
				`
		}
	]
}

// TEMA 3
const arr_tema3 = {

	tema: 'Angular', 
	data: [
		{ 
			pregunta: '¿Qué es Angular y cómo se diferencia de AngularJS?', 
			respuesta: `
				Angular es un framework de desarrollo de aplicaciones web desarrollado por Google. <br/>
				Se diferencia de AngularJS en que Angular es una reescritura completa y moderna, mientras 
				que AngularJS es la primera versión del framework, conocida como Angular 1.x.
				`
		},
		{ 
			pregunta: '¿Cuáles son las diferencias entre componentes y directivas en Angular?', 
			respuesta: `
				Los componentes son una versión más avanzada de las directivas en Angular. <br/>
				Mientras que las directivas permiten modificar el DOM o el comportamiento de un componente, 
				los componentes encapsulan tanto la estructura HTML como el comportamiento de una parte de la interfaz de usuario
				`
		}
	]
}

