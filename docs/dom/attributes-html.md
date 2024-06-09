# Atributos HTML

Las etiquetas HTML tienen ciertos atributos que definen el comportamiento de la etiqueta. Existen atributos comunes a todas las etiquetas HTML, y atributos que sólo existen para determinadas etiquetas HTML. El orden de los atributos en HTML no es importante, da igual que este primero o segundo, no influye en nada.

Además, un atributo puede tener un valor o ser un atributo `boolean`, es decir, simplemente estar presente y no tener ningún valor indicado:

```html
<div class="container" data-attr="value">
  <button disabled>Avisar</button>
</div>
```

## Acceder a atributos HTML

En general, una vez tenemos un elemento sobre el que vamos a crear algunos atributos, lo más sencillo es asignarle valores como propiedades de objetos:

```js
const element = document.querySelector("div"); // <div class="container"></div>

element.id = "page"; // <div id="page" class="container"></div>
element.style = "color: red"; // <div id="page" class="container" style="color: red"></div>
element.className = "data"; // <div id="page" class="data" style="color: red"></div>
```

Aunque es posible asignar a la propiedad `className` varias clases en un separadas por espacio, se recomienda utilizar la propiedad `classList` para manipular clases CSS.

:::details Diferencia entre `className` y `classList`

La propiedad `className` y el objeto `classList` son dos formas de manipular las clases CSS de un elemento en JavaScript, pero tienen diferencias importantes en cuanto a su uso y funcionalidades.

- `className`: Esta propiedad trata todas las clases de un elemento como una única cadena de texto. Puedes usar `className` para establecer o leer todas las clases de un elemento a la vez. Al asignar un valor a `className`, reemplazas todas las clases existentes con la nueva cadena de clases que especifiques.

```js
const element = document.querySelector("div"); // <div class="container"></div>
element.className = "newClass"; // <div class="newClass"></div>
```

- `classList`: Este es un objeto que proporciona métodos más flexibles y convenientes para manipular las clases de un elemento. Con `classList`, puedes añadir, quitar, alternar y verificar clases individuales sin afectar las demás clases del elemento.

```js
const element = document.querySelector("div"); // <div class="container"></div>
element.classList.add("newClass"); // <div class="container newClass"></div>
element.classList.remove("container"); // <div class="newClass"></div>
element.classList.toggle("anotherClass"); // <div class="newClass anotherClass"></div> (si no estaba, la añade; si estaba, la quita)
const hasClass = element.classList.contains("newClass"); // true
```

:::

## Obtener atributos HTML

Aunque la forma anterior es la más rápida, tenemos algunos métodos para obtener los atributos HTML de forma clara y literal.

| Métodos                       | Descripción                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| `hasAttributes(): boolean`    | Indica si el elemento tiene atributos HTML.                               |
| `hasAttribute(attr): boolean` | Indica si el elemento tiene el atributo HTML `attr`.                      |
| `getAttributeNames(): array`  | Devuelve un `array` con los atributos del elemento.                       |
| `getAttribute(attr) : string` | Devuelve el valor del atributo `attr` del elemento o `null` si no existe. |

Consideremos el siguiente HTML:

```html
<div id="page" class="info data dark" data-number="5"></div>
```

Vamos a aplicar las siguientes lineas de Javascript, trabajando con ese elemento:

```js
const element = document.querySelector("#page");

element.hasAttributes(); // true (tiene 3 atributos)
element.hasAttribute("data-number"); // true (data-number existe)
element.hasAttribute("disabled"); // false (disabled no existe)

element.getAttributeNames(); // ["id", "data-number", "class"]
element.getAttribute("id"); // "page"
```
