# Seleccionar elementos

Si nos encontramos en nuestro código Javascript y queremos hacer modificaciones en un elemento de la página HTML, lo primero que debemos hacer es buscar dicho elemento. Para ello, se suele intentar identificar el elemento a través de alguno de sus atributos más utilizados, generalmente el id o class.

Existen una serie de métodos que nos permitirán buscar en el DOM de la página y encontrar dichos elementos. El primer grupo son métodos más antiguos y tradicionales, el segundo grupo son métodos más modernos, pero requieren conocer selectores CSS.

## Métodos tradicionales

Los métodos más clásicos y tradicionales para realizar búsquedas de elementos en el DOM son más sencillos, pero menos potentes. Si lo que buscas es un elemento específico, lo mejor sería utilizar el método `getElementById()`. En caso contrario, utilizaremos alguno de los otros tres métodos, que nos devuelven siempre un `array`

| Métodos de búsqueda              | Descripción                                   | Si lo encuentra... | Si no lo encuentra... |
| -------------------------------- | --------------------------------------------- | ------------------ | --------------------- |
| `.getElementById(id)`            | Busca el elemento HTML por su id.             | Devuelve `Element` | Devuelve `null`       |
| `.getElementsByClassName(class)` | Busca elementos con la clase class.           | Devuelve `array`   | Devuelve `[]`         |
| `.getElementsByName(value)`      | Busca elementos con el atributo name a value. | Devuelve `array`   | Devuelve `[]`         |
| `.getElementsByTagName(tag)`     | Busca etiquetas HTML tag.                     | Devuelve `array`   | Devuelve `[]`         |

Estos son los **4 métodos tradicionales** de Javascript para manipular el DOM. Se denominan tradicionales porque son los que existen en Javascript desde versiones más antiguas.

### `getElementById()`

El primer método, `.getElementById(id)` busca un elemento HTML con el `id` especificado. En principio, un documento HTML bien construído **no debería** tener más de un elemento con el mismo `id`, por lo tanto, este método devolverá siempre un solo elemento:

```js
const page = document.getElementById("page");
```

### `.getElementsByClassName()`

Por otro lado, el método `.getElementsByClassName(class)` permite buscar los elementos que tengan la clase especificada en `class`. Es importante darse cuenta del matiz de que el método tiene `getElements` en plural, es decir, puede devolver **varias clases** ya que al contrario que los `id`, pueden existir varios elementos con la misma clase:

```js
const items = document.getElementsByClassName("item"); // [div, div, div]

console.log(items[0]); // Primer item encontrado: <div class="item"></div>
console.log(items.length); // 3
```

:::tip
Exactamente igual funcionan los métodos `getElementsByName(name)` y `getElementsByTagName(tag)`, salvo que se encargan de buscar elementos HTML por su atributo name o por su propia etiqueta de elemento HTML, respectivamente

```js
// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.getElementsByName("nickname"); // [input]

// Obtiene todos los elementos <div> de la página
const divs = document.getElementsByTagName("div"); // [div, div, div]
```

:::

## Métodos modernos

Aunque los métodos tradicionales anteriores son más que suficientes para buscar elementos, actualmente tenemos a nuestra disposición dos nuevos métodos de búsqueda de elementos que son mucho más cómodos y prácticos si conocemos y dominamos los selectores CSS.

:::tip ¿Qué es un selector CSS?
Como su mismo nombre indica, un selector CSS es una referencia a uno o varios elementos HTML, escrito generalmente desde código CSS (también pueden utilizarse desde ciertos lugares en Javascript). Es una forma rápida y cómoda de hacer referencia a elementos individuales o grupos de elementos, para posteriormente darles estilo.

![selectores_css](https://lenguajecss.com/css/selectores/selectores-basicos/sintaxis-basica.png)

Resumen de los tipo de **Selectores CSS**

| Selector         | Descripción                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| `div`            | Seleccionamos por etiqueta. Aplicamos estilos a todas las etiquetas que coincidan.                        |
| `#page`          | Seleccionamos por ID. Aplicamos estilos al elemento que tenga ese id. Debería ser un único elemento.      |
| `.primary`       | Seleccionamos por clase. Aplicamos estilos a los elementos que tengan dicha class. Pueden existir varias. |
| `button.primary` | Mixto. Seleccionamos por múltiples criterios. En este caso, por elemento y por clase.                     |

:::

### `querySelector()`

El método `.querySelector()` devuelve el primer elemento que encuentra que encaja con el selector CSS suministrado por parámetro. Siempre devuelve un solo elemento y en caso de no coincidir con ninguno, devuelve `null`

```js
const page = document.querySelector("#page"); // <div id="page"></div>
const info = document.querySelector(".main .info"); // <div class="info"></div>
```

### `querySelectorAll()`

Por otro lado, el método `.querySelectorAll()` realiza una búsqueda de elementos en el DOM, sólo que como podremos intuir por ese `All()`, devuelve un `array` con todos los elementos que coinciden con el selector CSS.

```js
// Obtiene todos los elementos con clase "info"
const infos = document.querySelectorAll(".info");

// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.querySelectorAll('[name="nickname"]');

// Obtiene todos los elementos <div> de la página HTML
const divs = document.querySelectorAll("div");
```
