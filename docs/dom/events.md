# Eventos del DOM

Hay situaciones en las que necesitamos realizar una acción **cuando ocurra un determinado caso**. En estas situaciones, no sabemos exactamente cuando tenemos que activar nuestra funcionalidad, ya que no podemos predecir cuando el usuario de nuestra página realizará dicha acción (y además, podrá ser diferente en cada situación).

En estas situaciones es cuando entran en juego los **eventos**.

## ¿Qué es un evento?

En Javascript existe un concepto llamado **evento**, que no es más que una notificación de que alguna característica interesante acaba de ocurrir, generalmente relacionada con el _usuario_ que navega por la página.

Dichas características pueden ser muy variadas:

- Click de ratón del usuario sobre un elemento de la página
- Pulsación de una tecla específica del teclado
- Reproducción de un archivo de audio/video
- Scroll de ratón sobre un elemento de la página
- El usuario ha activado la opción «Imprimir página»

Como desarrolladores, nuestro objetivo es preparar nuestro código para que **cuando ocurra un determinado evento**, se lleve a cabo una **funcionalidad asociada**. De esta forma, podemos preparar nuestra página o aplicación para que cuando ocurran ciertos eventos (que no podemos predecir de otra forma), reaccionen a ellos:

![eventos_1](https://lenguajejs.com/javascript/eventos/que-son-eventos/eventos-javascript.png)

## Formas de manejar eventos

Existen varias formas de manejar eventos en JavaScript

| Forma                           | Ejemplo                           |
| ------------------------------- | --------------------------------- |
| Mediante atributos HTML         | `<button onClick="..."></button>` |
| Mediante propiedades Javascript | `.onclick = function() { ... }`   |
| Mediante addEventListener()     | `.addEventListener("click", ...)` |

Cada una de estas opciones se puede utilizar para gestionar eventos en Javascript de forma equivalente, pero cada una de ellas tiene sus ventajas y sus desventajas. En los siguientes apartados veremos detalladamente sus características, pero por norma general, lo aconsejable es utilizar la última, los listeners, ya que son las más potentes y flexibles.

## Eventos mediante HTML

Probablemente, la forma más fácil de trabajar con eventos Javascript es mediante atributos de una etiqueta HTML. Sin embargo, aunque es la más sencilla, también es la menos recomendable, pero es un buen punto de partida para comenzar a trabajar con eventos.

Imaginemos el siguiente código HTML:

```html
<button>Saludar</button>
```

En nuestro navegador nos aparecerá un botón con el texto «**Saludar**». Sin embargo, si lo pulsamos, no realizará ninguna acción ni tendrá funcionamiento. Para solucionar esto, podemos asociarle un evento:

```html
<button onClick="alert('Hello!')">Saludar</button>
```

### Organizando la funcionalidad

El valor del atributo `onClick` llevará la funcionalidad en cuestión que queremos ejecutar cuando se produzca el evento. En nuestro ejemplo anterior, hemos colocado un `alert()`, pero lo habitual es que necesitemos ejecutar un fragmento de código más extenso, por lo que lo ideal sería meter todo ese código en una función, y en lugar del `alert()`, ejecutar dicha función:

```html
<script>
  function doTask() {
    alert("Hello!");
  }
</script>

<button onClick="doTask()">Saludar</button>
```

Podemos observar que:

- Gestionar eventos Javascript desde HTML es muy sencillo.
- Hay que tener en cuenta que «mezclamos» código Javascript dentro de HTML.

## Utilizando propiedad JavaScript

Vamos a realizar el mismo ejemplo anterior para verlo claramente:

```html
<button>Saludar</button>

<script>
  const button = document.querySelector("button");
  button.onclick = function () {
    alert("Hello!");
  };
</script>
```

Observa que en este caso, en lugar de añadir el atributo `onClick` a nuestro `<button>`, lo que hacemos es localizarlo mediante `querySelector()`.

:::info
La propiedad `.onclick` (o del evento en cuestión) siempre irá en minúsculas, ya que se trata de una propiedad Javascript, y Javascript es sensible a mayúsculas y minúsculas.
:::

## El método `addEventListener()`

La forma más recomendable es hacer uso del método `.addEventListener()`, el cuál es mucho más potente y versatil para la mayoría de los casos.

- Con `.addEventListener()` se pueden añadir fácilmente múltiples funcionalidades.
- Con `.removeEventListener()` se puede eliminar una funcionalidad previamente añadida.
- Con `.addEventListener()` se pueden indicar ciertos comportamientos especiales.

### `.addEventListener()`

Con el método `.addEventListener()` permite añadir una escucha del **evento indicado** (primer parámetro), y en el caso de que ocurra, se ejecutará la función asociada indicada (segundo parámetro).

Para verlo en acción, vamos a crear a continuación, el mismo ejemplo de apartados anteriores, de esta forma veremos como funciona y podremos comparar con los anteriores:

::: code-group

```js
const button = document.querySelector("button");

function action() {
  alert("Hello!");
}

button.addEventListener("click", action);
```

```html
<button>Click me</button>
```

:::

1. Busamos el elemento que tendrá el evento.
2. Creamos la función `action()`.
3. En el `<button>`, escuchamos el evento `click` y le asociamos la función `action`

También, podemos enviar como segundo parámetro al método una **función anónima**:

```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("Hello!");
});
```

Otra opción es usar funciones flecha:

```js
const button = document.querySelector("button");

button.addEventListener("click", () => alert("Hello!"));
```

### `.removeEventListener()`

Como su propio nombre indica para eliminar un listener que se ha añadido previamente al elemento. Para ello es muy importante indicar la misma función que añadimos con el `.addEventListener()` y no una función diferente que haga lo mismo que la primera.

```js
const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");

button.addEventListener("click", action); // Add listener
button.addEventListener("click", toggle); // Toggle red CSS
button.removeEventListener("click", action); // Delete listener
```
