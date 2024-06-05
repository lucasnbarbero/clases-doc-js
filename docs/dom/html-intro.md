# Introducción a HTML

HTML, o HyperText Markup Language, es el lenguaje estándar utilizado para crear y diseñar páginas web. Junto con CSS (Cascading Style Sheets) y JavaScript, HTML forma parte de las tecnologías fundamentales para el desarrollo web. Es el lenguaje que define la estructura y el contenido de una página web, permitiendo la inclusión de texto, imágenes, videos, enlaces y otros elementos multimedia.

## ¿Qué es HTML?

HTML es un lenguaje de marcado que utiliza etiquetas para definir la estructura y el contenido de una página web. Cada etiqueta tiene una función específica y puede contener diferentes tipos de contenido. Por ejemplo, la etiqueta `<h1>` se utiliza para definir un encabezado de nivel 1, mientras que la etiqueta `<p>` se utiliza para definir un párrafo de texto.

## Ejemplos de etiquetas HTML

A continuación, se muestran algunos ejemplos de etiquetas HTML comunes y su uso:

### Encabezados

Los encabezados se utilizan para definir la estructura de una página web y proporcionar títulos descriptivos. Hay seis niveles de encabezados, desde `<h1>` hasta `<h6>`, donde `<h1>` es el más importante y `<h6>` es el menos importante.

```html
<h1>Encabezado de nivel 1</h1>
<h2>Encabezado de nivel 2</h2>
<h3>Encabezado de nivel 3</h3>
```

### Párrafos

La etiqueta `<p>` se utiliza para definir párrafos de texto.

```html
<p>Este es un párrafo de ejemplo.</p>
```

### Enlaces

La etiqueta `<a>` se utiliza para crear enlaces a otras páginas web o recursos.

```html
<a href="https://www.example.com">Enlace de ejemplo</a>
```

### Imágenes

La etiqueta `<img>` se utiliza para incrustar imágenes en una página web

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

### Listas

HTML admite dos tipos principales de listas: listas ordenadas (`<ol>`) y listas desordenadas (`<ul>`), que contienen elementos de lista (`<li>`).

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>

<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ol>
```

### Tablas

La etiqueta `<table>` se utiliza para crear tablas en una página web, con filas (`<tr>`), columnas (`<td>`) y encabezados de columna (`<th>`).

```html
<table>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
  <tr>
    <td>Dato 1</td>
    <td>Dato 2</td>
  </tr>
</table>
```

Estos son solo algunos ejemplos de las muchas etiquetas y elementos que se pueden utilizar en HTML para crear páginas web.

## Atributos en HTML

Los atributos son valores adicionales que se pueden incluir en las etiquetas HTML para proporcionar información adicional sobre un elemento. Los atributos permiten personalizar el comportamiento y la apariencia de los elementos, así como proporcionar metadatos y enlaces a otros recursos. Por ejemplo, el atributo `href` se utiliza en la etiqueta `<a>` para especificar la URL de destino de un enlace.

```html
<a href="https://www.example.com">Enlace de ejemplo</a>
```

## Eventos en HTML

Los eventos en HTML permiten a los desarrolladores web ejecutar código JavaScript en respuesta a acciones específicas del usuario o del navegador. Los eventos pueden ser desencadenados por acciones como hacer clic en un elemento, pasar el mouse sobre él, escribir en un campo de texto, cargar una página, etc. Por ejemplo, el evento `onclick` se utiliza para ejecutar código cuando se hace clic en un elemento.

```html
<button onclick="alert('¡Hola mundo!')">Haz clic aquí</button>
```

:::tip
Para conocer más sobre **HTML**, te invito que investigues la documentación oficial:

[HTML](https://developer.mozilla.org/es/docs/Web/HTML)

[Atributos](https://developer.mozilla.org/es/docs/Web/HTML/Attributes)

[Eventos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
:::
