const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_PORT = 5173;
const PROJECT_ROOT = process.cwd();
const ROOT = path.join(PROJECT_ROOT, 'public');

const store = {
  wines: [
    {
      id: 'malbec',
      type: 'Malbec',
      name: 'Agnello Gran Reserva',
      price: 'R$189,90',
      image: './assets/wines/gran-reserva.jpg',
      desc: 'Nascido de vinhedos cuidadosamente selecionados, o produto Gran Reserva Malbec expressa a essência do terroir em cada taça.',
    },
    {
      id: 'terroir',
      type: 'Cabernet Sauvignon',
      name: 'Agnello Terroir',
      price: 'R$89,90',
      image: './assets/wines/terroir.png',
      desc: 'Produzido a partir de vinhedos selecionados com extremo cuidado no terroir de altitude da serra.',
    },
    {
      id: 'blanc',
      type: 'Chardonnay',
      name: 'Agnello Blanc de Blanc',
      price: 'R$129,90',
      image: './assets/wines/blanc-de-blanc.png',
      desc: 'Elegante e refinado, Agnello Blanc de Blanc Chardonnay traduz leveza e sofisticação.',
    },
  ],
  cart: {
    malbec: 1,
    blanc: 1,
  },
  users: [],
  posts: [],
  recommendations: [],
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = cleanPath === '/' ? '/index.html' : cleanPath;
  return path.join(ROOT, normalized);
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  });
  res.end(JSON.stringify(body));
}

function parseQty(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
  return 1;
  }
  if (parsed === 0) {
    return 1;
  }
  return Math.trunc(parsed);
}

function updateCartItem(itemId, qty) {
  store.cart[itemId] = (store.cart[itemId] || 0) + qty;
  if (store.cart[itemId] <= 0) {
    delete store.cart[itemId];
  }
}

function handleApi(req, res, requestUrl) {
  const pathname = requestUrl.pathname;
  const query = requestUrl.searchParams;

  const is = (...paths) => paths.includes(pathname);

  if (req.method !== 'GET') {
    sendJson(res, 405, { error: 'Method not allowed', allowed: ['GET'] });
    return true;
  }

  if (is('/api/wines', '/api/lista-vinhos')) {
    sendJson(res, 200, { wines: store.wines });
    return true;
  }

  if (is('/api/wines/add', '/api/add-vinhos')) {
    const id = query.get('id');
    const name = query.get('name');
    const type = query.get('type') || 'Vinho';
    const price = query.get('price') || 'R$0,00';
    const image = query.get('image') || './assets/wines/gran-reserva.jpg';
    const desc = query.get('desc') || 'Descrição não informada.';

    if (!id || !name) {
      sendJson(res, 400, { error: 'Parâmetros obrigatórios: id, name' });
      return true;
    }

    const exists = store.wines.some((wine) => wine.id === id);
    if (exists) {
      sendJson(res, 409, { error: 'Vinho já existe', id });
      return true;
    }

    const wine = { id, name, type, price, image, desc };
    store.wines.push(wine);
    sendJson(res, 201, { message: 'Vinho adicionado', wine, wines: store.wines });
    return true;
  }

  if (is('/api/wines/delete', '/api/delete-vinho')) {
    const id = query.get('id');
    if (!id) {
      sendJson(res, 400, { error: 'Parâmetro obrigatório: id' });
      return true;
    }

    const before = store.wines.length;
    store.wines = store.wines.filter((wine) => wine.id !== id);
    delete store.cart[id];

    if (before === store.wines.length) {
      sendJson(res, 404, { error: 'Vinho não encontrado', id });
      return true;
    }

    sendJson(res, 200, { message: 'Vinho removido', id, wines: store.wines });
    return true;
  }

  if (is('/api/cart', '/api/lista-carrinho')) {
    sendJson(res, 200, { cart: store.cart });
    return true;
  }

  if (is('/api/cart/add', '/api/add-carrinho')) {
    const id = query.get('id');
    const qty = parseQty(query.get('qty'));

    if (!id) {
      sendJson(res, 400, { error: 'Parâmetro obrigatório: id' });
      return true;
    }

    updateCartItem(id, qty);
    sendJson(res, 200, { message: 'Carrinho atualizado', cart: store.cart });
    return true;
  }

  if (is('/api/cart/clear')) {
    store.cart = {};
    sendJson(res, 200, { message: 'Carrinho limpo', cart: store.cart });
    return true;
  }

  if (is('/api/users/add', '/api/add-usr')) {
    const username = query.get('username') || `user${store.users.length + 1}`;
    const name = query.get('name') || 'Usuário Agnello';

    const user = {
      id: `u${Date.now()}`,
      username,
      name,
      createdAt: new Date().toISOString(),
    };
    store.users.push(user);
    sendJson(res, 201, { message: 'Usuário adicionado', user });
    return true;
  }

  if (is('/api/posts/add', '/api/add-post')) {
    const user = query.get('user') || 'Usuário';
    const image = query.get('image') || '';
    const wine = query.get('wine') || '';
    const caption = query.get('caption') || '';

    const post = {
      id: `p${Date.now()}`,
      user,
      image,
      wine,
      caption,
      createdAt: new Date().toISOString(),
    };
    store.posts.push(post);
    sendJson(res, 201, { message: 'Post adicionado', post });
    return true;
  }

  if (is('/api/wines/recommend', '/api/recomendar-vinho')) {
    const user = query.get('user') || 'anonymous';
    const wineId = query.get('wineId') || 'malbec';

    const recommendation = {
      id: `r${Date.now()}`,
      user,
      wineId,
      createdAt: new Date().toISOString(),
    };
    store.recommendations.push(recommendation);
    sendJson(res, 201, {
      message: 'Recomendação registrada',
      recommendation,
      recommendations: store.recommendations,
    });
    return true;
  }

  return false;
}

const server = http.createServer((req, res) => {
    const requestUrl = new URL(req.url || '/', 'http://localhost');

    if (requestUrl.pathname.startsWith('/api/')) {
      const handled = handleApi(req, res, requestUrl);
      if (!handled) {
        sendJson(res, 404, { error: 'API route not found', path: requestUrl.pathname });
      }
      return;
    }

    const filePath = resolvePath(req.url || '/');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (path.extname(filePath) === '') {
          fs.readFile(path.join(ROOT, 'index.html'), (indexErr, indexContent) => {
            if (indexErr) {
              res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
              res.end('Erro ao carregar index.html');
              return;
            }
            res.writeHead(200, {
              'Content-Type': mimeTypes['.html'],
              'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
              Pragma: 'no-cache',
              Expires: '0',
            });
            res.end(indexContent);
          });
          return;
        }

        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 - Arquivo não encontrado');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      });
      res.end(content);
    });
  });

function startServer(port) {
  const onError = (error) => {
    server.removeListener('listening', onListening);
    if (error.code === 'EADDRINUSE') {
      startServer(port + 1);
      return;
    }
    throw error;
  };

  const onListening = () => {
    server.removeListener('error', onError);
    console.log(`Servidor ativo em http://localhost:${port}`);
  };

  server.once('error', onError);
  server.once('listening', onListening);
  server.listen(port);
}

startServer(BASE_PORT);
