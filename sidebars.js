const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "📂 /app",
      items: [
        "app/visao-geral",
        "app/buscar",
        "app/signup",
        "app/login",
        "app/dados-usuario",
        "app/novas-funcionalidades",
        "app/seguranca",
        "app/observacoes",
      ],
    },
    {
      type: "category",
      label: "📦 /dex",
      items: [
        "dex/intro",
        "dex/visao-geral",
        "dex/pokemon-by-id",
        "dex/pokemon-by-name",
        "dex/type-by-name",
      ],
    },
    {
      type: "category",
      label: "🤖 /ia",
      items: [
        "ia/visao-geral",
        "ia/como-usar",
        "ia/modelos",
        "ia/avisos",
        "ia/dicas",
      ],
    },
  ],
};

export default sidebars;
