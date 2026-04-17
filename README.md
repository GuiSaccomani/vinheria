# Vinheria Agnello UI

Interface mobile-first inspirada no protótipo da Vinheria Agnello, com estética premium dark e navegação entre telas (feed, vinhos, perfil, clube, carrinho e pedido concluído).

## Requisitos

- Node.js 18+
- npm

## Executar localmente

```bash
npm test
npm start
```

Acesse: http://localhost:5173

## Estrutura

- `public/index.html`: shell da aplicação mobile
- `public/css/styles.css`: design system + estilos de todas as telas
- `public/js/app.js`: roteamento simples, renderização e interações
- `public/assets/wines/`: imagens dos rótulos
- `server/server.js`: servidor HTTP + endpoints da API
