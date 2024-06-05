# Selección y Manipulación de Elementos del DOM

Una de las tareas más comunes en el desarrollo web es la selección y manipulación de elementos en el DOM (Document Object Model). Esto nos permite interactuar con los elementos de una página web y cambiar su contenido, estilo o comportamiento según sea necesario. En esta sección, exploraremos diversas técnicas para seleccionar y manipular elementos del DOM utilizando JavaScript.

## Seleccion de elementos

JavaScript proporciona varias formas de seleccionar elementos en el DOM. Algunas de las técnicas más comunes incluyen el uso de métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` y `querySelectorAll`.

#### `getElementById`

El método `getElementById` se utiliza para seleccionar un elemento por su atributo `id`. Devuelve el primer elemento que coincida con el ID especificado.

```js
const header = document.getElementById("header");
```

#### `getElementsByClassName`

El método `getElementsByClassName` selecciona elementos por su clase. Devuelve una colección de todos los elementos que tienen la clase especificada.

```js
const paragraphs = document.getElementsByClassName("paragraph");
```

#### `getElementsByTagName`

El método `getElementsByTagName` selecciona elementos por su nombre de etiqueta. Devuelve una colección de todos los elementos con el nombre de etiqueta especificado.

```js
const headings = document.getElementsByTagName("h2");
```

#### `querySelector`

El método `querySelector` selecciona un elemento utilizando un selector CSS. Devuelve el primer elemento que coincida con el selector especificado.

## Manipulación de elementos

Una vez que hemos seleccionado elementos en el DOM, podemos manipularlos cambiando su contenido, atributos, estilos o incluso agregando o eliminando elementos.

### Cambio de Contenido

Podemos cambiar el contenido de un elemento modificando su propiedad `textContent` o `innerHTML`.

### Cambio de Atributos

También podemos cambiar los atributos de un elemento utilizando la propiedad `setAttribute`.

```js
const link = document.querySelector("a");
link.setAttribute("href", "https://www.ejemplo.com");
```

### Cambio de Estilos

Podemos cambiar los estilos de un elemento utilizando la propiedad `style`.

```js
const header = document.querySelector("h1");
header.style.color = "red";
header.style.fontSize = "24px";
```

### Agregar y Eliminar Elementos

Podemos agregar nuevos elementos al DOM utilizando los métodos `createElement` y `appendChild`.

```js
const newParagraph = document.createElement("p");
newParagraph.textContent = "Este es un nuevo párrafo";
document.body.appendChild(newParagraph);
```

Para eliminar elementos, podemos utilizar el método `remove`.

```js
const paragraphToRemove = document.querySelector(".paragraph");
paragraphToRemove.remove();
```

## Ejercicio guiado

Vamos a realizar un ejercicio práctico para poner en práctica y profundizar en la manipulación del DOM.
