# Introduccion al DOM (Document Objecto Model)

El Document Object Model, comúnmente abreviado como DOM, es una interfaz de programación de aplicaciones (API) para documentos HTML y [XML](https://es.wikipedia.org/wiki/Extensible_Markup_Language). Esencialmente, el DOM representa la estructura de un documento web como un árbol de nodos, donde cada nodo representa un elemento del documento, como una etiqueta HTML, un atributo o un fragmento de texto.

El DOM representa todo el contenido de la página como objetos que pueden ser modificados.

El objeto document es el punto de entrada a la página. Con él podemos cambiar o crear cualquier cosa en la página.

Por ejemplo:

```js
// cambiar el color de fondo a rojo
document.body.style.background = "red";

// deshacer el cambio después de 1 segundo
setTimeout(() => (document.body.style.background = ""), 1000);
```

Aquí usamos `document.body.style`, pero hay muchos, muchos más. Las propiedades y métodos se describen en la especificación: [DOM Living Standard](https://dom.spec.whatwg.org/).

## Importancia del DOM

El DOM es fundamental en el desarrollo web moderno porque proporciona una forma estándar y consistente de representar y manipular documentos web. Permite a los desarrolladores crear aplicaciones web dinámicas e interactivas que respondan a las acciones del usuario y cambien su estado en tiempo real.

## Resumen

Document Object Model (DOM) es una representación estructurada de un documento HTML/XML que permite acceder y manipular los elementos de la página mediante JavaScript. Es una parte fundamental del desarrollo web moderno y es utilizado en una amplia variedad de aplicaciones y tecnologías web.
