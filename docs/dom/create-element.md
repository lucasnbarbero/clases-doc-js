# Crear elementos en el DOM

Existe una serie de métodos para crear de forma eficiente diferentes elementos HTML o nodos. Dichos métodos nos ofrecen una forma muy sencilla de crear estructuras dinámicas, mediante bucles o estructuras definidas

## `createElement()`

Mediante el método `.createElement()` podemos crear un HTML en memoria **(¡no estará insertado aún en nuestro documento HTML!)**. Con dicho elemento almacenado en una variable o constante, podremos modificar sus características o contenido, para posteriormente insertarlo en una posición determinada del DOM o documento HTML.

```js
const div = document.createElement("div"); // Creamos un <div></div>
const span = document.createElement("span"); // Creamos un <span></span>
const img = document.createElement("img"); // Creamos un <img>
```
