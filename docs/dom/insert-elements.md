# Insertar elementos en el DOM

Aunque mediante propiedades como `.innerHTML` podemos insertar elementos en el DOM de un documento HTML, en muchas ocasiones quizás no es la mejor forma.

Si tenemos que hacer múltiples inserciones o necesitamos insertar elementos manteniendo intacta la estructura existente (o los listeners de eventos asociados), estaría bien disponer de formas en las que podamos indicar exactamente donde queremos añadir el elemento, de forma más controlada.

| Métodos                          | Descripción                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------- |
| `.appendChild(node): node`       | Añade como hijo el nodo node. Devuelve el nodo insertado.                    |
| `.removeChild(node): node`       | Elimina y devuelve el nodo hijo node.                                        |
| `.replaceChild(new, old): node`  | Reemplaza el nodo hijo old por new. Devuelve old.                            |
| `.insertBefore(new, node): node` | Inserta el nodo new antes de node y como hijo del nodo actual.               |
| `.insertBefore(new, null): node` | Inserta el nodo new después del último nodo hijo. Equivale a .appendChild(). |

## `.appendChild()`

Uno de los métodos más comunes para añadir un elemento HTML creado con Javascript es `.appendChild()`. Como su propio nombre indica, este método añade o inserta un nuevo elemento, como si fuera un hijo al final de todos los hijos del elemento sobre el que se realiza.

Observa el siguiente fragmento de código:

```js
const container = document.querySelector(".container");

const img = document.createElement("img");
img.src = "https://lenguajejs.com/assets/logo.svg";
img.alt = "Logo Javascript";

container.appendChild(img);
```

En este ejemplo, creamos un elemento `<img>` que aún no está conectado al DOM de la página. Existe sólo en la constante `<img>`. Posteriormente, añadimos los atributos `src` y `alt` y lo conectamos al DOM el elemento usando el método `.appendChild()`.

Se insertará como último hijo del elemento `<body>`, ya que es su comportamiento predefinido.

## `.removeChild()`

En algunos casos, nos puede interesar eliminar un nodo hijo de un elemento. Para esas situaciones, podemos utilizar el método `.removeChild(node)` donde `node` es el nodo hijo que queremos eliminar:

```js
const container = document.querySelector(".container");
const secondItem = container.querySelector(".item:nth-child(2)");

container.removeChild(secondItem); // Desconecta el segundo .item
```

## `.replaceChild()`

De la misma forma, el método `replaceChild(new, old)` nos permite cambiar un nodo hijo `old` por un nuevo nodo hijo `new`. En ambos casos, el método nos devuelve el nodo reemplazado:

```js
const container = document.querySelector(".container");
const secondItem = container.querySelector(".item:nth-child(2)");

const newNode = document.createElement("div");
newNode.textContent = "DOS";

container.replaceChild(newNode, secondItem);
```

## `.insertBefore()`

Por último, el método `insertBefore(newnode, node)` es un método más específico y menos utilizado en el que se puede especificar exactamente el lugar a insertar un nodo. El primer parámetro es el nodo a insertar, mientras que el **segundo parámetro** puede ser:

```js
const container = document.querySelector(".container");
const secondItem = container.querySelector(".item:nth-child(2)");

const newNode = document.createElement("div");
newNode.textContent = "Nuevo elemento";

container.insertBefore(newNode, secondItem);
```

En este caso, el **nuevo elemento** aparecería antes del segundo ítem.
