# ¡Hola, mundo!

A partir de esta sección vamos a entrar de lleno en el mundo de JavaScript.

Para esto necesitamos un entorno de trabajo para ejecutar nuestros scripts, el navegador es una buena opción.

Primero, veamos cómo adjuntamos un script a una página web.

## Etiqueta "script"

Los programas de JavaScript se pueden insertar en casi cualquier parte de un documento HTML con el uso de la etiqueta `<script>`

Por ejemplo

```html{6-8}
<!DOCTYPE html>
<html>
  <body>
    <p>Antes del script...</p>

    <script>
      alert("¡Hola, mundo!");
    </script>

    <p>...Después del script.</p>
  </body>
</html>
```

La etiqueta `<script>` contiene código JavaScript que se ejecuta automáticamente cuando el navegador procesa la etiqueta.

## Scripts externos

Si tenemos un montón de código JavaScript, podemos ponerlo en un archivo separado.

Los archivos de script se adjuntan a HTML con el atributo src:

```html
<script src="/path/to/script.js"></script>
```

También podemos dar una URL completa. Por ejemplo:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

Para adjuntar vaiors scripts, usamos varias etiquetas:

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

:::info
**A tomar nota**
Como regla general, solo los scripts más simples se colocan en el HTML. Los más complejos residen en archivos separados.

La ventaja de un archivo separado es que el navegador lo descargará y lo almacenará en [caché](<https://es.wikipedia.org/wiki/Cach%C3%A9_(inform%C3%A1tica)>).

Otras páginas que hacen referencia al mismo script lo tomarán del caché en lugar de descargarlo, por lo que el archivo solo se descarga una vez.

Eso reduce el tráfico y hace que las páginas sean más rápidas.
:::

:::warning
**Si se establece el `src`, el contenido del script se ignora.**

Una sola etiqueta `<script>` no puede tener el atributo `src` y código dentro.

Esto no funcionará:

```html
<script src="file.js">
  alert(1); // el contenido se ignora porque se estableció src
</script>
```

Debemos elegir un `<script src="…">` externo o un `<script>` normal con código.

El ejemplo anterior se puede dividir en dos scripts para que funcione:

```js
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

:::
