import { defineConfig } from "vitepress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  title: "Dillo Docs",
  base: "/dillo-docs/",
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
          { text: "Stores", link: "/guides/stores" },
          { text: "Products", link: "/guides/products" },
          { text: "Inventory", link: "/guides/inventory" },
          { text: "Sensors", link: "/" },
          { text: "Notifications", link: "/" },
          { text: "Utils", link: "/guides/utils" },
        ],
      },
      {
        text: "Support Dashboard",
        collapsed: false,
        items: [
          { text: "Balances", link: "/guides/balances" },
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