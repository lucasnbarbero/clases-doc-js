# Contenido en el DOM

Si tenemos elementos HTML y queremos modificar su contenido, podemos hacerlo desde Javascript desde ciertas propiedades de elementos del DOM. Estas propiedades son muy útiles tanto para obtener información, para modificarla, así como para eliminarla. Vamos a analizar como podemos hacerlo.

Antes de empezar imáginemos que tenemos el siguiente código HTML:

```html
<div class="container">
  <div class="parent">
    <p>Hola a todos.</p>
    <p class="message">Mi nombre es <strong>Lucas</strong>.</p>
  </div>
</div>
```

Vamos a seleccionar el elemento `<p>` con clase .message desde Javascript y a trabajar con él accediendo a varias de sus propiedades. Las propiedades a las que vamos a acceder son las siguientes:

| Propiedades    | Descripción                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| `.textContent` | Devuelve el contenido de texto del elemento. Se puede asignar para modificar.  |
| `.innerHTML`   | Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar. |

## `.textContent`

La propiedad `.textContent` nos devuelve el contenido de texto de un elemento HTML. Es útil para obtener (o modificar) **sólo el texto** dentro de un elemento, obviando el marcado o etiquetado HTML:

```js
const element = document.querySelector(".message");

element.textContent; // "Mi nombre es Lucas."
element.textContent = "Hola a todos";
element.textContent; // "Hola a todos"
```

## `.innerHTML`

Nos permite acceder al contenido de un elemento, pero en lugar de devolver su contenido de texto, nos devuelve su **contenido HTML**, es decir, su marcado HTML.

```js
const element = document.querySelector(".message");

element.innerHTML; // "Mi nombre es <strong>Lucas</strong>."
element.textContent; // "Mi nombre es Manz."
```

De la misma forma que `.textContent`, también podemos usar `.innerHTML` para modificar el contenido. Ten en cuenta que el contenido HTML suministrado a `.innerHTML` se interpretará, mientras que el suministrado por `.textContent` se **inserta literalmente como texto**.

:::danger ¡Ten cuidado!
Ten mucho cuidado a la hora de insertar contenido HTML utilizando `.innerHTML` puesto que si añades contenido que provenga del usuario sin revisarlo, podrían insertar HTML que realice acciones dañinas como inyección de código malicioso.
:::
