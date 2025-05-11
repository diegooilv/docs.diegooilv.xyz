// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "API Docs", // Título da documentação
  tagline: "Documentação da API", // Tagline que descreve brevemente o propósito da API
  favicon: "img/favicon.ico", // Caminho para o favicon

  url: "https://diegooilv.github.io", // URL do GitHub Pages
  baseUrl: "/", // Base URL, já ajustado para a raiz do repositório

  organizationName: "diegooilv", // Seu usuário no GitHub
  projectName: "docs.diegooilv.xyz", // Nome do repositório

  onBrokenLinks: "throw", // Como lidar com links quebrados
  onBrokenMarkdownLinks: "warn", // Como lidar com links quebrados em markdown

  i18n: {
    defaultLocale: "pt-BR", // Idioma padrão
    locales: ["pt-BR"], // Idiomas suportados
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"), // Caminho para o arquivo de sidebars
          editUrl:
            "https://github.com/diegooilv/docs.diegooilv.xyz/tree/main/", // URL para edição da documentação
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/diegooilv/docs.diegooilv.xyz/tree/main/", // URL para editar posts do blog
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"), // Caminho para os estilos personalizados
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg", // Imagem para a carta social
    navbar: {
      title: "API Docs", // Título da barra de navegação
      items: [
        {
          type: "docSidebar", // Sidebar de documentação
          sidebarId: "tutorialSidebar", // ID da sidebar
          position: "left",
          label: "Documentação", // Label do item de navegação
        },
        { to: "/blog", label: "Blog", position: "left" }, // Link para o blog
        {
          href: "https://github.com/diegooilv/docs.diegooilv.xyz", // Link para o GitHub
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introdução",
              to: "/docs/intro", // Página de introdução
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/MwbFfCQhpG", // Link para o Discord
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "Blog",
              to: "/blog", // Link para o blog
            },
            {
              label: "GitHub",
              href: "https://github.com/diegooilv/api.diegooilv", // Link para o GitHub
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Diego.`,
    },
    prism: {
      theme: prismThemes.github, // Tema do Prism para código
      darkTheme: prismThemes.dracula, // Tema escuro do Prism
    },
  },
};

export default config;
