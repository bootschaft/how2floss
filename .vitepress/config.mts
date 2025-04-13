import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "How2Floß",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", type: "image/png", href: "logo_small.png" }]],

  srcDir: "docs",
  base: "/how2floss/",
  vite: {
    publicDir: "../.public",
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo_small.png",
    nav: [{ text: "Home", link: "/" }],

    socialLinks: [{ icon: "github", link: "https://github.com/bootschaft" }],
  },
})
