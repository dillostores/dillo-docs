import { defineConfig } from "vitepress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  title: "Dillo Docs",
  description: "Official dillo documentation for users",
  head: [
    ["script", { src: "../utils/auth.js" }],
  ],
  vite: {
    define: {
      'process.env': process.env
    },
  },
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
          { text: "Inventory", link: "/guides/inventory" },
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
      { icon: "github", link: "https://github.com/dillostores/" },
    ],
  },
}) as import("vitepress").UserConfig;