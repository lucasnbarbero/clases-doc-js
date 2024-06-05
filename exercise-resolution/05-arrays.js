// Array para almacenar las tareas
let tareas = [];

// Función para mostrar el menú y gestionar las opciones
function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(
      "Seleccione una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Eliminar tarea\n4. Salir"
    );

    switch (opcion) {
      case "1":
        agregarTarea();
        break;
      case "2":
        verTareas();
        break;
      case "3":
        eliminarTarea();
        break;
      case "4":
        alert("Saliendo del programa...");
        break;
      default:
        alert("Opción no válida. Intente nuevamente.");
    }
  } while (opcion !== "4");
}

// Función para agregar una tarea
function agregarTarea() {
  const nuevaTarea = prompt("Ingrese la nueva tarea:");
  if (nuevaTarea) {
    tareas.push(nuevaTarea);
    alert("Tarea agregada exitosamente.");
  } else {
    alert("No se ingresó una tarea válida.");
  }
}

// Función para ver todas las tareas
function verTareas() {
  if (tareas.length === 0) {
    alert("No hay tareas en la lista.");
  } else {
    let listaTareas = "Lista de Tareas:\n";
    for (let i = 0; i < tareas.length; i++) {
      listaTareas += `${i + 1}. ${tareas[i]}\n`;
    }
    alert(listaTareas);
  }
}

// Función para eliminar una tarea
function eliminarTarea() {
  if (tareas.length === 0) {
    alert("No hay tareas para eliminar.");
  } else {
    const indice = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1;
    if (indice >= 0 && indice < tareas.length) {
      const confirmacion = confirm(`¿Está seguro que desea eliminar la tarea "${tareas[indice]}"?`);
      if (confirmacion) {
        tareas.splice(indice, 1);
        alert("Tarea eliminada exitosamente.");
      }
    } else {
      alert("Número de tarea no válido.");
    }
  }
}

// Llamar a la función para mostrar el menú
mostrarMenu();
