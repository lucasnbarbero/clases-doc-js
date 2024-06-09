# DOM

Cuando comenzamos en el mundo del **desarrollo web**, normalmente comenzamos por aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados.

Si únicamente utilizamos HTML/CSS, sólo podremos crear páginas «estáticas», es decir, páginas que no pueden mostrarse de una forma diferente dependiendo de acciones del usuario. Si añadimos Javascript, podremos crear páginas «dinámicas», es decir, aprovechar la potencia y flexibilidad que nos da un lenguaje de programación para crear documentos y páginas mucho más ricas, con una experiencia más completa y con las que se pueden automatizar un gran abanico de tareas y acciones.

## ¿Qué es el DOM?

Las siglas **DOM** significan **Document Object Model**, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí.

![arbol_html](https://lenguajejs.com/javascript/dom/que-es/que-es-dom.png)

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura de árbol, mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

## El objeto `document`

En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o, más concretamente, la página de la pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán **Element (Elemento)** o **Node (Nodo)**:

- _**Element**_ no es más que la representación genérica de una etiqueta: `HTMLElement`.
- _**Node**_ es una unidad más básica, la cuál puede ser o un nodo de texto.

Todos los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico. Algunos ejemplos:

| Tipo de dato genérico | Tipo específico  | Etiqueta  | Descripción                    | + info             |
| --------------------- | ---------------- | --------- | ------------------------------ | ------------------ |
| HTMLElement           | HTMLDivElement   | `<div>`   | Etiqueta divisoria (en bloque) | Elemento `<div>`   |
| HTMLElement           | HTMLSpanElement  | `<span>`  | Etiqueta divisoria (en línea)  | Elemento `<span>`  |
| HTMLElement           | HTMLImageElement | `<img>`   | Imagen                         | Elemento `<img>`   |
| HTMLElement           | HTMLAudioElement | `<audio>` | Contenedor de audio            | Elemento `<audio>` |

Obviamente, existen muchos tipos de datos específicos, uno por cada etiqueta HTML.

## API nativa de JavaScript

La API nativa del DOM en JavaScript es un conjunto de interfaces y métodos que permiten a los programas JavaScript interactuar con la estructura de un documento HTML o XML. Básicamente, proporciona una forma de acceder y manipular los elementos de una página web de manera dinámica, lo que permite crear experiencias interactivas para el usuario.
