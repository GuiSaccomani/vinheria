const wines = {
  malbec: {
    id: "malbec",
    type: "Malbec",
    name: "Agnello Gran Reserva",
    price: "R$189,90",
    image: "./assets/wines/gran-reserva.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=900&q=80",
    desc: "Nascido de vinhedos cuidadosamente selecionados, o produto Gran Reserva Malbec expressa a essência do terroir em cada taça. Seus aromas de frutas vermelhas maduras, notas sutis de especiarias e delicado toque de carvalho criam uma experiência envolvente e sofisticada. No paladar, apresenta estrutura elegante, taninos macios e final persistente, ideal para ser apreciado em harmonias com carnes grelhadas, queijos curados ou momentos de celebração a dois.",
  },
  terroir: {
    id: "terroir",
    type: "Cabernet Sauvignon",
    name: "Agnello Terroir",
    price: "R$89,90",
    image: "./assets/wines/terroir.png",
    fallbackImage: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=900&q=80",
    desc: "Produzido a partir de vinhedos selecionados com extremo cuidado no terroir de altitude da serra, o Agnello Terroir Cabernet Sauvignon traduz a essência e intensidade das uvas em sua melhor expressão. Seus aromas intensos, marcados por frutas negras maduras, notas de especiarias e um delicado toque amadeirado, revelam complexidade e sofisticação a cada taça. No paladar, apresenta equilíbrio fino, taninos sedosos e final persistente.",
  },
  blanc: {
    id: "blanc",
    type: "Chardonnay",
    name: "Agnello Blanc de Blanc",
    price: "R$129,90",
    image: "./assets/wines/blanc-de-blanc.png",
    fallbackImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80",
    desc: "Elegante e refinado, Agnello Blanc de Blanc Chardonnay traduz a leveza e a sofisticação em cada taça. Elaborado com uvas Chardonnay selecionadas, apresenta aromas frutados e notas florais delicadas, com frescor vibrante e final harmonioso. No paladar, revela textura cremosa e acidez equilibrada, perfeito para harmonizar com peixes, frutos do mar e pratos leves.",
  },
};

const clubPlans = {
  premium: {
    cartId: "club-premium",
    title: "Clube Agnello Premium",
    price: "R$279,90",
    imageId: "malbec",
  },
  exclusivo: {
    cartId: "club-exclusivo",
    title: "Clube Agnello Exclusivo",
    price: "R$479,90",
    imageId: "terroir",
  },
  essencial: {
    cartId: "club-essencial",
    title: "Clube Agnello Essencial",
    price: "R$149,90",
    imageId: "blanc",
  },
};

const profiles = {
  sofia: {
    name: "Sofia Agnello",
    verify: "sommelier",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    banner: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    bio: "Sommelier certificada pela WSET - 12 anos explorando vinhedos do mundo. Aqui você aprende a escolher o vinho perfeito para cada momento.",
    stats: ["42,9k", "311", "386"],
    thumbs: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=800&q=80",
    ],
    recos: ["Agnello Gran Reserva", "Agnello Terroir", "Agnello Blanc de Blanc"],
  },
  pedro: {
    name: "Pedro Pereira",
    verify: "",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    banner: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1200&q=80",
    bio: "Aqui você aprende a escolher o vinho ideal para cada ocasião e apreciar a taça com maior conhecimento e prazer.",
    stats: ["1k", "210", "1"],
    thumbs: ["https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=800&q=80"],
    recos: [],
  },
  rafael: {
    name: "Rafael Almeida",
    verify: "sommelier",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    banner: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80",
    bio: "Rafael Almeida é sommelier dedicado a ensinar os apreciadores de vinho, guiando degustações e harmonizações que transformam cada taça em uma experiência memorável.",
    stats: ["100,1k", "520", "3"],
    thumbs: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?auto=format&fit=crop&w=800&q=80",
    ],
    recos: ["Agnello Gran Reserva", "Agnello Blanc de Blanc"],
  },
};

const posts = {
  "post-sofia-1": {
    user: "Sofia Agnello",
    avatar: profiles.sofia.avatar,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    wine: "Agnello Gran Reserva",
  },
  "post-sofia-2": {
    user: "Sofia Agnello",
    avatar: profiles.sofia.avatar,
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80",
    wine: "Agnello Blanc de Blanc",
  },
  "post-pedro-1": {
    user: "Pedro Pereira",
    avatar: profiles.pedro.avatar,
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1200&q=80",
    wine: "Agnello Terroir",
  },
  "post-rafael-1": {
    user: "Rafael Almeida",
    avatar: profiles.rafael.avatar,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1200&q=80",
    wine: "Agnello Terroir",
  },
  "post-rafael-2": {
    user: "Rafael Almeida",
    avatar: profiles.rafael.avatar,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    wine: "Agnello Blanc de Blanc",
  },
  "post-rafael-3": {
    user: "Rafael Almeida",
    avatar: profiles.rafael.avatar,
    image: "https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?auto=format&fit=crop&w=1200&q=80",
    wine: "",
  },
};

const socialState = {
  "post-sofia-1": {
    likes: 128,
    liked: false,
    commentsOpen: false,
    comments: ["Que taça incrível!", "Quero esse rótulo para o jantar."],
  },
  "post-sofia-2": {
    likes: 93,
    liked: false,
    commentsOpen: false,
    comments: ["Combina com frutos do mar?"],
  },
  "post-pedro-1": {
    likes: 67,
    liked: false,
    commentsOpen: false,
    comments: ["Foto linda!"],
  },
  "post-rafael-1": {
    likes: 211,
    liked: false,
    commentsOpen: false,
    comments: ["Esse cenário ficou premium."],
  },
  "post-rafael-2": {
    likes: 176,
    liked: false,
    commentsOpen: false,
    comments: ["Excelente harmonização."],
  },
  "post-rafael-3": {
    likes: 84,
    liked: false,
    commentsOpen: false,
    comments: ["Lugar perfeito para degustar."],
  },
};

const profileRouteByUser = {
  "Sofia Agnello": "profile-sofia",
  "Pedro Pereira": "profile-pedro",
  "Rafael Almeida": "profile-rafael",
};

const wineIdByLabel = {
  "Agnello Gran Reserva": "malbec",
  "Agnello Terroir": "terroir",
  "Agnello Blanc de Blanc": "blanc",
};

const state = {
  route: "home",
  history: ["home"],
  scrollByRoute: { home: 0 },
  selectedBenefit: "premium",
  cart: {
    malbec: 1,
    blanc: 1,
  },
};

const API_BASE = "/api";

async function apiGet(endpoint, params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, String(value));
    }
  });

  const url = `${API_BASE}${endpoint}${query.toString() ? `?${query.toString()}` : ""}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
}

function normalizeWineFromApi(wine) {
  const existing = wines[wine.id] || {};
  return {
    id: wine.id,
    type: wine.type || existing.type || "Vinho",
    name: wine.name || existing.name || "Agnello",
    price: wine.price || existing.price || "R$0,00",
    image: wine.image || existing.image || "./assets/wines/gran-reserva.jpg",
    fallbackImage: existing.fallbackImage || "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=900&q=80",
    desc: wine.desc || existing.desc || "",
  };
}

async function syncWinesFromApi() {
  try {
    const data = await apiGet("/wines");
    const apiWines = Array.isArray(data.wines) ? data.wines : [];
    apiWines.forEach((wine) => {
      wines[wine.id] = normalizeWineFromApi(wine);
    });
  } catch (error) {
    console.warn("Falha ao carregar vinhos da API, usando dados locais.", error);
  }
}

async function syncCartFromApi() {
  try {
    const data = await apiGet("/cart");
    if (data && typeof data.cart === "object" && data.cart !== null) {
      state.cart = { ...data.cart };
    }
  } catch (error) {
    console.warn("Falha ao carregar carrinho da API, usando dados locais.", error);
  }
}

async function apiAddToCart(id, qty = 1) {
  try {
    const data = await apiGet("/cart/add", { id, qty });
    if (data && typeof data.cart === "object" && data.cart !== null) {
      state.cart = { ...data.cart };
    }
  } catch (error) {
    console.warn("Falha ao atualizar carrinho na API.", error);
    state.cart[id] = (state.cart[id] || 0) + qty;
    if (state.cart[id] <= 0) {
      delete state.cart[id];
    }
  }
}

async function apiClearCart() {
  try {
    const data = await apiGet("/cart/clear");
    if (data && typeof data.cart === "object" && data.cart !== null) {
      state.cart = { ...data.cart };
      return;
    }
  } catch (error) {
    console.warn("Falha ao limpar carrinho na API.", error);
  }
  state.cart = {};
}

async function initializeAppData() {
  await Promise.all([syncWinesFromApi(), syncCartFromApi()]);
}

const screen = document.querySelector("#screen");
const backBtn = document.querySelector("#backBtn");

function topTabKey(route) {
  if (["club", "club-benefits", "club-assinado"].includes(route)) return "club";
  if (["home", "wine-malbec", "wine-terroir", "wine-blanc", "cart", "success"].includes(route)) return "home";
  return "feed";
}

function getProfileRoute(userName) {
  return profileRouteByUser[userName] || "profile-sofia";
}

function getWineIdByLabel(label) {
  return wineIdByLabel[label] || "malbec";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validRoute(route) {
  if (
    route === "home" ||
    route === "feed" ||
    route === "club" ||
    route === "club-benefits" ||
    route === "club-assinado" ||
    route === "cart" ||
    route === "success"
  ) {
    return true;
  }
  if (route.startsWith("wine-")) {
    return Boolean(wines[route.replace("wine-", "")]);
  }
  if (route.startsWith("post-")) {
    return Boolean(posts[route]);
  }
  if (route.startsWith("profile-")) {
    return [
      "profile-sofia",
      "profile-sofia-wines",
      "profile-pedro",
      "profile-pedro-wines",
      "profile-rafael",
      "profile-rafael-wines",
    ].includes(route);
  }
  return false;
}

function setActiveTabs() {
  const key = topTabKey(state.route);
  document.querySelectorAll(".top-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.route === key);
  });

  document.querySelectorAll(".bottom-link").forEach((tab) => {
    const route = tab.dataset.route;
    const active = (route === "club" && key === "club") || (route === "feed" && key === "feed") || (route === "home" && key === "home");
    tab.classList.toggle("active", active);
  });

  backBtn.classList.toggle("disabled", state.history.length <= 1);
  backBtn.disabled = state.history.length <= 1;
}

function parseWineRoute(route) {
  return route.replace("wine-", "");
}

function moneyText(id) {
  return getCartItemById(id).price;
}

function isClubPlanCartId(id) {
  return id.startsWith("club-");
}

function getPlanByCartId(cartId) {
  return Object.values(clubPlans).find((plan) => plan.cartId === cartId) || null;
}

function getCartItemById(id) {
  if (wines[id]) {
    return {
      id,
      name: wines[id].name,
      price: wines[id].price,
      image: wines[id].image,
      fallbackImage: wines[id].fallbackImage,
      isPlan: false,
    };
  }

  const plan = getPlanByCartId(id);
  if (plan) {
    const wineRef = wines[plan.imageId] || wines.malbec;
    return {
      id,
      name: plan.title,
      price: plan.price,
      image: wineRef.image,
      fallbackImage: wineRef.fallbackImage,
      isPlan: true,
    };
  }

  return {
    id: "malbec",
    name: wines.malbec.name,
    price: wines.malbec.price,
    image: wines.malbec.image,
    fallbackImage: wines.malbec.fallbackImage,
    isPlan: false,
  };
}

function wineImageById(id) {
  return getCartItemById(id).image;
}

function wineFallbackById(id) {
  return getCartItemById(id).fallbackImage;
}

function renderHome() {
  return `
    <section class="hero">
      <h1>Onde cada safra<br/>conta uma<br/><span>história</span></h1>
    </section>
    <section class="section mt-16">
      <div class="grid-2">
        ${Object.values(wines)
          .map(
            (wine) => `
            <article class="wine-card" data-wine="${wine.id}">
              <img src="${wine.image}" data-fallback="${wine.fallbackImage}" alt="${wine.name}" loading="lazy" />
              <div class="wine-meta">
                <h4>${wine.name}</h4>
                <div class="price">${wine.price}</div>
                <button class="btn" data-route="wine-${wine.id}">Ir para detalhes</button>
              </div>
            </article>
          `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWine(route) {
  const wine = wines[parseWineRoute(route)] || wines.malbec;
  return `
    <section class="product-screen">
      <img class="big" src="${wine.image}" data-fallback="${wine.fallbackImage}" alt="${wine.name}" loading="lazy" />
      <div class="product-info">
        <div class="type">${wine.type}</div>
        <h2>${wine.name}</h2>
        <div class="price">${wine.price}</div>
        <p class="desc">${wine.desc}</p>
        <button class="btn" data-add="${wine.id}">+ Adicionar</button>
      </div>
    </section>
  `;
}

function postCard(postId, allowOpenPost = true) {
  const post = posts[postId];
  const social = socialState[postId] || { likes: 0, liked: false, commentsOpen: false, comments: [] };
  const profileRoute = getProfileRoute(post.user);
  const wineId = post.wine ? getWineIdByLabel(post.wine) : null;
  const tag = wineId
    ? `<div class="wine-tag" data-route="wine-${wineId}"><img class="wine-thumb" src="${wineImageById(wineId)}" data-fallback="${wineFallbackById(wineId)}" alt="${post.wine}" loading="lazy" /> ${post.wine}</div>`
    : "";
  const commentsMarkup = social.comments.length
    ? social.comments.map((comment) => `<li>${escapeHtml(comment)}</li>`).join("")
    : "<li>Seja o primeiro a comentar.</li>";
  const imageRoute = allowOpenPost ? `data-route="${postId}"` : "";

  return `
    <article class="feed-post" data-post-id="${postId}">
      <div class="feed-head">
        <img src="${post.avatar}" alt="${post.user}" loading="lazy" data-route="${profileRoute}" />
        <span data-route="${profileRoute}">${post.user}</span>
      </div>
      <img src="${post.image}" alt="Post de ${post.user}" loading="lazy" ${imageRoute} />
      ${tag}
      <div class="feed-foot">
        <button class="feed-icon-btn ${social.liked ? "active" : ""}" data-like-toggle="${postId}" aria-label="Curtir post">♡</button>
        <span class="feed-counter">${social.likes}</span>
        <button class="feed-icon-btn" data-comment-toggle="${postId}" aria-label="Ver comentários">💬</button>
        <span class="feed-counter">${social.comments.length}</span>
      </div>
      <div class="comments-panel ${social.commentsOpen ? "open" : ""}">
        <ul>${commentsMarkup}</ul>
        <div class="comment-form">
          <input type="text" maxlength="120" placeholder="Escreva um comentário" data-comment-input="${postId}" />
          <button data-comment-submit="${postId}">Enviar</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeed() {
  return ["post-sofia-1", "post-pedro-1", "post-rafael-1"].map((id) => postCard(id)).join("");
}

function profileTemplate(userKey, winesMode) {
  const profile = profiles[userKey];
  const content = winesMode
    ? profile.recos.length
      ? `<div class="reco-list">${profile.recos
          .map((item) => {
            const wineId = getWineIdByLabel(item);
            return `<article class="reco-item" data-route="wine-${wineId}"><img class="reco-thumb" src="${wineImageById(wineId)}" data-fallback="${wineFallbackById(wineId)}" alt="${item}" loading="lazy" /><div><h5>${item}</h5><small>Comprar</small></div><small>›</small></article>`;
          })
          .join("")}</div>`
      : `<div class="center-message" style="min-height:180px;background:transparent"><div><div style="font-size:28px;opacity:.75">🍷</div><p style="font-size:9px;color:#b8b8b8">Você ainda não recomendou vinhos</p></div></div>`
    : `<div class="thumb-grid">${profile.thumbs.map((src) => `<img src="${src}" alt="Postagem" loading="lazy" />`).join("")}</div>`;

  return `
    <section>
      <div class="profile-banner">
        <img class="profile-avatar" src="${profile.avatar}" alt="${profile.name}" loading="lazy" />
      </div>
      <div class="profile-body">
        <div class="profile-name">
          <h3>${profile.name}</h3>
          <span class="ver">${profile.verify}</span>
        </div>
        <p class="profile-bio">${profile.bio}</p>
        <div class="stats">
          <div><strong>${profile.stats[0]}</strong><span>Seguidores</span></div>
          <div><strong>${profile.stats[1]}</strong><span>Seguindo</span></div>
          <div><strong>${profile.stats[2]}</strong><span>Postagens</span></div>
        </div>
        <div class="switch">
          <button class="${!winesMode ? "active" : ""}" data-route="profile-${userKey}">Postagens</button>
          <button class="${winesMode ? "active" : ""}" data-route="profile-${userKey}-wines">Vinhos Recomendados</button>
        </div>
        ${content}
      </div>
    </section>
  `;
}

function renderClubWelcome() {
  return `
    <section class="center-message">
      <div>
        <div style="font-size:24px; color:#e7c166; margin-bottom:10px;">◎</div>
        <h2>Bem-vindo ao<br/>Clube Agnello</h2>
        <p style="font-size:10px;color:#e2d7d7;line-height:1.5;margin:12px 0 20px;">Receba mensalmente uma seleção especial de vinhos curada pelos nossos sommeliers. Descubra novos rótulos, regiões e experiências únicas.</p>
        <button class="outline-btn" data-route="club-benefits">Explorar meus benefícios</button>
      </div>
    </section>
  `;
}

function renderClubBenefits() {
  const plans = [
    {
      id: "premium",
      title: "Premium",
      badge: "MAIS POPULAR",
      price: "R$ 279,90",
      per: "por mês - 4 garrafas incluídas",
      benefits: [
        "4 garrafas por mês",
        "Curadoria de vinhos premium",
        "15% de desconto no site",
        "Notas de degustação exclusivas",
      ],
      discount: "15% de desconto no site",
    },
    {
      id: "exclusivo",
      title: "Exclusivo",
      badge: "",
      price: "R$ 479,90",
      per: "por mês - 6 garrafas raras",
      benefits: ["6 garrafas por mês", "Rótulos raros", "Suporte sommelier", "Experiência VIP"],
      discount: "20% de desconto no site",
    },
    {
      id: "essencial",
      title: "Essencial",
      badge: "",
      price: "R$ 149,90",
      per: "por mês - 2 garrafas incluídas",
      benefits: ["2 garrafas por mês", "10% de desconto no site", "Newsletter mensal"],
      discount: "10% de desconto no site",
    },
  ];

  return `
    <section class="club-hero">
      <div style="font-size:22px; color:#e5bf64;">◎</div>
      <h2>Clube Agnello</h2>
      <p>Escolha o benefício ideal para o seu momento. Você pode alterar sua seleção quando quiser.</p>
    </section>
    <section class="plans-wrap">
      ${plans
        .map(
          (plan) => `
          <article class="plan ${state.selectedBenefit === plan.id ? "selected" : ""}" data-select-benefit="${plan.id}">
            ${plan.badge ? `<div class="badge">${plan.badge}</div>` : ""}
            <h4>${plan.title}</h4>
            <div class="plan-price">${plan.price}</div>
            <div class="per">${plan.per}</div>
            <ul>
              ${plan.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
            </ul>
            <div class="discount">${plan.discount}</div>
            <button data-add-benefit="${plan.id}">Adicionar ao carrinho</button>
          </article>
        `,
        )
        .join("")}
    </section>
  `;
}

function cartItem(id, qty) {
  const item = getCartItemById(id);
  const name = item.name;
  const isPlan = item.isPlan;

  return `
    <article class="cart-item">
      <img class="cart-thumb" src="${item.image}" data-fallback="${item.fallbackImage}" alt="${name}" loading="lazy" />
      <div>
        <div style="font-size:9px">${name}</div>
        ${
          isPlan
            ? `<div style="font-size:8px;color:#9f9f9f">Assinatura mensal</div>`
            : `<div class="qty"><button data-dec="${id}" aria-label="Diminuir quantidade">-</button><span style="font-size:8px">${qty}</span><button data-inc="${id}" aria-label="Aumentar quantidade">+</button></div>`
        }
      </div>
      <small style="color:#9f9f9f">${item.price}</small>
    </article>
  `;
}

function renderCart() {
  const entries = Object.entries(state.cart);
  const hasItems = entries.length > 0;

  return `
    <section class="cart-body">
      <div class="cart-list">
        ${
          hasItems
            ? entries.map(([id, qty]) => cartItem(id, qty)).join("")
            : `<article class="cart-item"><img class="cart-thumb" src="${wineImageById("malbec")}" data-fallback="${wineFallbackById("malbec")}" alt="Produto" loading="lazy" /><div><div style="font-size:9px">Seu carrinho está vazio</div><small style="color:#9f9f9f">Adicione um vinho para continuar</small></div><small style="color:#9f9f9f">-</small></article>`
        }
      </div>
      <div class="cart-spacer"></div>
      <p class="hint">Veja também:</p>
      <div class="also-list">
        <article class="also-item active" data-route="club"><img class="also-thumb" src="${wineImageById("malbec")}" data-fallback="${wineFallbackById("malbec")}" alt="Clube Agnello" loading="lazy" /><span>Clube Agnello</span><small>›</small></article>
        <article class="also-item" data-add="terroir"><img class="also-thumb" src="${wineImageById("terroir")}" data-fallback="${wineFallbackById("terroir")}" alt="Agnello Terroir" loading="lazy" /><span>Agnello Terroir</span><small>Comprar</small></article>
      </div>
      <div style="padding:18px 0 6px;">
        <button class="outline-btn" style="width:100%; background:#d6ad4e; color:#291e0c; font-weight:700;" data-route="success" ${hasItems ? "" : "disabled"}>Finalizar pedido</button>
      </div>
    </section>
  `;
}

function renderSuccess() {
  return `
    <section class="center-message">
      <div>
        <div style="font-size:24px; color:#e7c166; margin-bottom:10px;">◎</div>
        <h2>Obrigado por escolher<br/>a Agnello</h2>
        <button class="outline-btn" data-route="home" style="margin-top:26px;">Voltar para a tela inicial</button>
      </div>
    </section>
  `;
}

function renderPost(route) {
  return postCard(route, false);
}

function captureScroll() {
  state.scrollByRoute[state.route] = screen.scrollTop;
}

function restoreScroll() {
  const scroll = state.scrollByRoute[state.route] || 0;
  screen.scrollTop = scroll;
}

function rerenderCurrentRoute() {
  captureScroll();
  renderRoute();
}

function renderRoute() {
  if (state.route === "home") screen.innerHTML = renderHome();
  else if (state.route.startsWith("wine-")) screen.innerHTML = renderWine(state.route);
  else if (state.route === "feed") screen.innerHTML = renderFeed();
  else if (state.route === "profile-sofia") screen.innerHTML = profileTemplate("sofia", false);
  else if (state.route === "profile-sofia-wines") screen.innerHTML = profileTemplate("sofia", true);
  else if (state.route === "profile-pedro") screen.innerHTML = profileTemplate("pedro", false);
  else if (state.route === "profile-pedro-wines") screen.innerHTML = profileTemplate("pedro", true);
  else if (state.route === "profile-rafael") screen.innerHTML = profileTemplate("rafael", false);
  else if (state.route === "profile-rafael-wines") screen.innerHTML = profileTemplate("rafael", true);
  else if (state.route === "club") screen.innerHTML = renderClubWelcome();
  else if (state.route === "club-benefits") screen.innerHTML = renderClubBenefits();
  else if (state.route === "club-assinado") screen.innerHTML = renderClubWelcome();
  else if (state.route === "cart") screen.innerHTML = renderCart();
  else if (state.route === "success") screen.innerHTML = renderSuccess();
  else if (state.route.startsWith("post-")) screen.innerHTML = renderPost(state.route);
  else screen.innerHTML = renderHome();

  setActiveTabs();
  requestAnimationFrame(() => {
    restoreScroll();
    screen.classList.remove("is-switching");
  });
}

function go(route) {
  const next = validRoute(route) ? route : "home";
  if (next === state.route) return;

  captureScroll();
  screen.classList.add("is-switching");

  if (next === "success") {
    state.cart = {};
  }

  state.route = next;
  state.history.push(next);
  renderRoute();
}

document.addEventListener("click", async (event) => {
  const likeToggleEl = event.target.closest("[data-like-toggle]");
  if (likeToggleEl) {
    const postId = likeToggleEl.dataset.likeToggle;
    const social = socialState[postId];
    if (social) {
      social.liked = !social.liked;
      social.likes += social.liked ? 1 : -1;
      social.likes = Math.max(0, social.likes);
      rerenderCurrentRoute();
    }
    return;
  }

  const commentToggleEl = event.target.closest("[data-comment-toggle]");
  if (commentToggleEl) {
    const postId = commentToggleEl.dataset.commentToggle;
    const social = socialState[postId];
    if (social) {
      social.commentsOpen = !social.commentsOpen;
      rerenderCurrentRoute();
    }
    return;
  }

  const commentSubmitEl = event.target.closest("[data-comment-submit]");
  if (commentSubmitEl) {
    const postId = commentSubmitEl.dataset.commentSubmit;
    const input = document.querySelector(`[data-comment-input="${postId}"]`);
    const value = (input?.value || "").trim();
    if (!value) {
      return;
    }
    const social = socialState[postId];
    if (social) {
      social.comments.push(value);
      social.commentsOpen = true;
      rerenderCurrentRoute();
    }
    return;
  }

  const selectBenefitEl = event.target.closest("[data-select-benefit]");
  if (selectBenefitEl) {
    state.selectedBenefit = selectBenefitEl.dataset.selectBenefit;
    rerenderCurrentRoute();
    return;
  }

  const addBenefitEl = event.target.closest("[data-add-benefit]");
  if (addBenefitEl) {
    const benefitId = addBenefitEl.dataset.addBenefit;
    const plan = clubPlans[benefitId];
    if (plan) {
      state.selectedBenefit = benefitId;
      const existingPlanIds = Object.keys(state.cart).filter((id) => isClubPlanCartId(id));
      for (const planId of existingPlanIds) {
        await apiAddToCart(planId, -(state.cart[planId] || 1));
      }
      await apiAddToCart(plan.cartId, 1);
      go("cart");
    }
    return;
  }

  const routeEl = event.target.closest("[data-route]");
  if (routeEl && !routeEl.hasAttribute("disabled")) {
    if (routeEl.dataset.route === "success") {
      await apiClearCart();
    }
    go(routeEl.dataset.route);
    return;
  }

  const addEl = event.target.closest("[data-add]");
  if (addEl) {
    const id = addEl.dataset.add;
    if (wines[id]) {
      await apiAddToCart(id, 1);
      if (state.route === "cart") {
        rerenderCurrentRoute();
      }
    }
    return;
  }

  const incEl = event.target.closest("[data-inc]");
  if (incEl) {
    const id = incEl.dataset.inc;
    await apiAddToCart(id, 1);
    rerenderCurrentRoute();
    return;
  }

  const decEl = event.target.closest("[data-dec]");
  if (decEl) {
    const id = decEl.dataset.dec;
    await apiAddToCart(id, -1);
    rerenderCurrentRoute();
  }
});

document.addEventListener(
  "error",
  (event) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) {
      return;
    }
    const fallback = target.dataset.fallback;
    if (!fallback || target.src.includes(fallback)) {
      return;
    }
    target.src = fallback;
  },
  true,
);

backBtn.addEventListener("click", () => {
  if (state.history.length <= 1) return;
  captureScroll();
  screen.classList.add("is-switching");
  state.history.pop();
  state.route = state.history[state.history.length - 1];
  renderRoute();
});

async function initApp() {
  await initializeAppData();
  renderRoute();
}

initApp();
