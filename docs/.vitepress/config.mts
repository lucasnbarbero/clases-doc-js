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
            ],
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
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lucasnbarbero/clases-doc-js",
      },
    ],
  },
});
