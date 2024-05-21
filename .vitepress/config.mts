import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dillo Docs",
  description: "Official dillo documentation for users",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/guides/users" },
    ],
    sidebar: [
      {
        text: "Admin Dashboard",
        collapsed: false,
        items: [
          { text: "Users", link: "/guides/users" },
          { text: "Permissions", link: "/guides/permissions" },
          { text: "Resources", link: "/" },
          { text: "Areas", link: "/" },
          { text: "Cycles", link: "/" },
          { text: "Stores", link: "/" },
          { text: "Products", link: "/guides/products" },
          { text: "Inventory", link: "/" },
          { text: "Sensors", link: "/" },
          { text: "Notifications", link: "/" },
          { text: "Utils", link: "/guides/utils" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
