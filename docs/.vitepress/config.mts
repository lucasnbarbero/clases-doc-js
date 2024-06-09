import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curso de JavaScript",
  description: "Aprende JavaScript desde cero hasta ES6",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Bienvenidos",
        link: "/introduction",
      },
      {
        text: "Introducción",
        items: [
          {
            text: "¿Qué es JavaScript?",
            link: "/introduction/javascript",
          },
          {
            text: "Editores de código",
            link: "/introduction/code-editors",
          },
          {
            text: "Consola de desarrollador",
            link: "/introduction/devtools",
          },
        ],
      },
      {
        text: "Fundamentos",
        items: [
          {
            text: "¡Hola, mundo!",
            link: "/basics/hello-world",
          },
          {
            text: "Estructura del código",
            link: "/basics/structure",
          },
          {
            text: "Variables",
            link: "/basics/variables",
          },
          {
            text: "Tipos de datos",
            link: "/basics/types",
          },
          {
            text: "Interacción - alert, prompt, confirm",
            link: "/basics/alert-prompt-confirm",
          },
          {
            text: "Operadores y expresiones",
            link: "/basics/operators",
          },
          {
            text: "Estructuras de control",
            items: [
              {
                text: "Condicionales",
                link: "/basics/ifelse",
              },
              {
                text: "Bucles: while y for",
                link: "/basics/while-for",
              },
            ],
          },
          {
            text: "Funciones",
            items: [
              {
                text: "Declaracion y ejecución de funciones",
                link: "/basics/function-basics",
              },
              {
                text: "Expresiones de función",
                link: "/basics/function-expression",
              },
              {
                text: "Funciones flecha (arrow functions)",
                link: "/basics/function-arrow",
              },
              {
                text: "Scope y Closures",
                link: "/basics/function-scope-closures",
              },
            ],
          },
        ],
      },
      {
        text: "Arrays y objetos",
        items: [
          {
            text: "Arrays",
            items: [
              {
                text: "¿Que son?",
                link: "/object-array/array/introduction",
              },
              {
                text: "Métodos",
                link: "/object-array/array/methods",
              },
            ],
          },
          {
            text: "Objetos",
            items: [
              {
                text: "¿Que son?",
                link: "/object-array/object/introduction",
              },
              {
                text: "Referencias y copias",
                link: "/object-array/object/references",
              },
              {
                text: "Metodos del objeto",
                link: "/object-array/object/this",
              },
              {
                text: "Constructor, operador new",
                link: "/object-array/object/constructor-new",
              },
              {
                text: "Encadenamiento opcional",
                link: "/object-array/object/optional-chaining",
              },
            ],
          },
        ],
      },
      {
        text: "POO",
        items: [
          {
            text: "Introducción",
            link: "/poo/introduction",
          },
          {
            text: "Clases",
            link: "/poo/class",
          },
          {
            text: "Herencia de clases",
            link: "/poo/class-inheritance",
          },
          {
            text: "Propiedades y metodos estáticos",
            link: "/poo/static-properties-methods",
          },
        ],
      },
      {
        text: "Manejo de errores",
        link: "/errors/errors",
      },
      {
        text: "Promesas - async/await",
        items: [
          {
            text: "Promesas",
            link: "/promises-async-await/promises",
          },
          {
            text: "Async/Await",
            link: "/promises-async-await/async-await",
          },
          {
            text: "Fetch",
            link: "/promises-async-await/fetch",
          },
        ],
      },
      {
        text: "ECMAScript6",
        items: [
          {
            text: "Que es ECMAScript",
            link: "/es6/introduction",
          },
          {
            text: "La gran version 6",
            link: "/es6/principal-news",
          },
          {
            text: "Desestructuracion",
            link: "/es6/destructuring",
          },
          {
            text: "Spread y rest operators",
            link: "/es6/spread-rest",
          },
          {
            text: "Modulos",
            link: "/es6/modules",
          },
        ],
      },
      {
        text: "DOM",
        items: [
          {
            text: "Introducción",
            link: "/dom/introduction",
          },
          {
            text: "Seleccionar elementos",
            link: "/dom/select-element",
          },
          {
            text: "Crear elementos",
            link: "/dom/create-element",
          },
          {
            text: "Atributos HTML",
            link: "/dom/attributes-html",
          },
          {
            text: "Contenido en el DOM",
            link: "/dom/dom-content",
          },
          {
            text: "Insertar elementos en el DOM",
            link: "/dom/insert-elements",
          },
          {
            text: "Eventos del DOM",
            link: "/dom/events",
          },
          {
            text: "IndexedDB",
            link: "/dom/indexeddb",
          },
        ],
      },
      {
        text: "Ejercicios",
        items: [
          {
            text: "01 - Variables",
            link: "/exercises/01-variables",
          },
          {
            text: "02 - Condicionales",
            link: "/exercises/02-ifelse",
          },
          {
            text: "03 - Bucles",
            link: "/exercises/03-while-for",
          },
          {
            text: "04 - Funciones",
            link: "/exercises/04-functions",
          },
          {
            text: "05 - INTEGRADOR",
            link: "/exercises/05-integrator",
          },
          {
            text: "06 - Arrays",
            link: "/exercises/06-arrays",
          },
        ],
      },
      {
        text: "Proyecto final",
        link: "final-project",
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lucasnbarbero/clases-doc-js",
      },
    ],
  },
});
