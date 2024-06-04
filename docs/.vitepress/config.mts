import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introducción",
        link: "/introduction",
      },
      {
        text: "Esquema del curso",
        link: "/course-outline",
      },
      {
        text: "Introducción",
        items: [
          {
            text: "¿Qué es JavaScript?",
            link: '/introduction/javascript'
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
