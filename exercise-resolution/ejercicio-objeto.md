Ejercicio: Gestión de una Biblioteca
Vamos a crear un pequeño programa que gestione una biblioteca utilizando objetos y arrays. El programa permitirá al usuario agregar libros, ver la lista de libros y buscar libros por título.

Paso 1: Definir la estructura del objeto libro
Cada libro será representado por un objeto con las siguientes propiedades:

Título
Autor
Año de publicación
Paso 2: Crear una lista de libros
Utilizaremos un array para almacenar la colección de libros.

Paso 3: Funcionalidades del programa
El programa debe ofrecer las siguientes opciones:

Agregar un libro
Ver la lista de libros
Buscar un libro por título
Salir
Implementación del ejercicio
js
Copiar código
let biblioteca = [];

function mostrarMenu() {
  return prompt(
    "Selecciona una opción:\n" +
    "1. Agregar un libro\n" +
    "2. Ver la lista de libros\n" +
    "3. Buscar un libro por título\n" +
    "4. Salir"
  );
}

function agregarLibro() {
  let titulo = prompt("Introduce el título del libro:");
  let autor = prompt("Introduce el autor del libro:");
  let anio = prompt("Introduce el año de publicación del libro:");

  let libro = {
    titulo: titulo,
    autor: autor,
    anio: anio
  };

  biblioteca.push(libro);
  alert("Libro agregado con éxito.");
}

function verLibros() {
  if (biblioteca.length === 0) {
    alert("No hay libros en la biblioteca.");
  } else {
    console.log("Lista de libros en la biblioteca:");
    biblioteca.forEach((libro, index) => {
      console.log(
        `${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}`
      );
    });
  }
}

function buscarLibro() {
  let tituloBuscado = prompt("Introduce el título del libro que buscas:");
  let libroEncontrado = biblioteca.find(libro => libro.titulo.toLowerCase() === tituloBuscado.toLowerCase());

  if (libroEncontrado) {
    console.log(`Libro encontrado: Título: ${libroEncontrado.titulo}, Autor: ${libroEncontrado.autor}, Año: ${libroEncontrado.anio}`);
  } else {
    alert("Libro no encontrado.");
  }
}

function ejecutarPrograma() {
  let opcion;
  do {
    opcion = mostrarMenu();

    switch (opcion) {
      case '1':
        agregarLibro();
        break;
      case '2':
        verLibros();
        break;
      case '3':
        buscarLibro();
        break;
      case '4':
        alert("Saliendo del programa.");
        break;
      default:
        alert("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
    }
  } while (opcion !== '4');
}

ejecutarPrograma();
Explicación del código
Biblioteca como array: La biblioteca es un array vacío que almacenará los libros.
Función mostrarMenu: Muestra un menú con las opciones disponibles y devuelve la elección del usuario.
Función agregarLibro: Solicita al usuario los detalles del libro y lo agrega al array biblioteca.
Función verLibros: Muestra la lista de libros en la consola. Si no hay libros, muestra un mensaje de alerta.
Función buscarLibro: Permite buscar un libro por su título y muestra los detalles del libro encontrado en la consola.
Función ejecutarPrograma: Controla el flujo del programa, mostrando el menú y llamando a las funciones correspondientes según la elección del usuario.