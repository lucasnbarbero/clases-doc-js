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
        ],
      },
      {
        text: "Ejercicios",
        items: [
          {
            text: "01 - Variables",
            link: "/exercises/01-variables",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
