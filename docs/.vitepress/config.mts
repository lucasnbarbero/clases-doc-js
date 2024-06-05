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
        text: "Objetos y Arrays",
        items: [
          {
            text: "Objetos",
            link: "/object-array/object/introduction",
          },
        ],
      },
      // {
      //   text: "Manipulación del DOM",
      //   items: [
      //     {
      //       text: "HTML",
      //       link: "/dom/html-intro",
      //     },
      //     {
      //       text: "CSS",
      //       link: "/dom/css-intro",
      //     },
      //     {
      //       text: "DOM (Document Object Model)",
      //       link: "/dom/introduction",
      //     },
      //     {
      //       text: "Manipulación del DOM",
      //       link: "/dom/modifying-document",
      //     },
      //   ],
      // },
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
            text: "04 - INTEGRADOR",
            link: "/exercises/04-integrator",
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
