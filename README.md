# ENSO Lisboa — site em Vue (inspirado no Kabuki Lisboa)

Site de um restaurante de cozinha japonesa & portuguesa, feito em **Vue 3 + Vite + Vue Router**, com a mesma estrutura do site que serviu de referência:

- Vídeo de abertura em ecrã inteiro (hero)
- Introdução ao conceito e aos pratos mais icónicos, logo a seguir
- Um botão de **Menu** que abre um overlay com acesso a **Equipa** e **Pratos** (e Início)
- Página **Pratos** com a carta organizada por categorias (sashimi/usuzukuri, nigiri, pratos quentes, sobremesa)
- Página **Equipa** com a listagem da equipa

> Os nomes "ENSO Lisboa", textos e fotos são placeholders/exemplos criados para este projeto — troca-os pelos dados e imagens reais do teu restaurante antes de publicar (ver nota sobre media abaixo).

## Como correr o projeto

Precisas de ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# instalar dependências
npm install

# arrancar o servidor de desenvolvimento
npm run dev
```

Depois abre o endereço que aparece no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
kabuki-vue/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── media/          <- coloca aqui o teu vídeo e imagens (ver media/README.txt)
└── src/
    ├── main.js
    ├── App.vue          <- cabeçalho, botão de menu, rodapé
    ├── assets/
    │   └── main.css      <- tokens de cor/tipografia e estilos globais
    ├── components/
    │   ├── NavMenu.vue   <- overlay do menu (Início / Pratos / Equipa)
    │   └── DishCard.vue  <- cartão de prato reutilizável
    ├── router/
    │   └── index.js      <- rotas: "/", "/pratos", "/equipa"
    └── views/
        ├── Home.vue       <- vídeo + conceito + pratos em destaque + teaser da equipa
        ├── Pratos.vue     <- carta completa por categorias
        └── Equipa.vue     <- grelha da equipa
```

## Adicionar o vídeo e as fotos

Coloca os teus ficheiros em `public/media/`:

- `hero.mp4` — vídeo do topo da homepage
- `hero-poster.jpg` — imagem mostrada antes do vídeo carregar
- `concept.jpg` — foto da secção "O Conceito"
- `team.jpg` — foto de fundo do teaser da equipa

Em `Pratos.vue` e `Equipa.vue`, os quadrados/losangos cinzentos são placeholders — troca-os por `<img>` com as tuas fotos reais quando as tiveres.

## Personalizar

- **Cores e tipografia**: tudo está centralizado em `src/assets/main.css`, nas variáveis dentro de `:root` (`--bg`, `--red`, `--brass`, `--font-display`, etc.).
- **Pratos**: edita os arrays `dishes` em `Home.vue` e `categories` em `Pratos.vue`.
- **Equipa**: edita o array `team` em `Equipa.vue`.
- **Contactos/morada**: no rodapé, dentro de `App.vue`.
