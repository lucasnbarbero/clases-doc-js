// script.js

// Seleccionamos los elementos del DOM
const searchInput = document.getElementById("search");
const userList = document.getElementById("userList");
const errorMessage = document.getElementById("errorMessage");
const noResultsMessage = document.getElementById("noResultsMessage");

// Función para obtener los usuarios de la API
async function fetchUsers() {
  try {
    // Hacemos la petición a la API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Error al cargar los usuarios");
    }
    // Parseamos la respuesta como JSON
    return await response.json();
  } catch (error) {
    // Mostramos un mensaje de error en caso de fallo
    showError();
    throw error;
  }
}

// Función para mostrar el error
function showError() {
  errorMessage.classList.remove("hidden");
}

// Función para renderizar la lista de usuarios
function renderUsers(users) {
  userList.innerHTML = ""; // Limpiamos la lista antes de renderizar
  if (users.length === 0) {
    noResultsMessage.classList.remove("hidden");
    return;
  }
  noResultsMessage.classList.add("hidden");
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${user.name}</strong>
      <span>${user.email}</span>
    `;
    userList.appendChild(li);
  });
}

// Función para filtrar usuarios en tiempo real
function filterUsers(users, searchTerm) {
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Función principal para inicializar la app
async function init() {
  try {
    const users = await fetchUsers();
    renderUsers(users);

    // Agregamos el evento input para la búsqueda en tiempo real
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value;
      const filteredUsers = filterUsers(users, searchTerm);
      renderUsers(filteredUsers);
    });
  } catch (error) {
    console.error("Algo salió mal:", error.message);
  }
}

// Iniciamos la aplicación
init();
