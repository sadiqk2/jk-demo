/* JKKVC mock — shared chrome, catalogue rendering, cart, chatbot */
(function(){
'use strict';
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const money = n => '₹' + Number(n).toLocaleString('en-IN');
const PH = 'img/ph.svg';

/* ---------- shared chrome ---------- */
const NAV = [
  ['index.html','Home','home'],
  ['shop.html','Shop','shop'],
  ['branches.html','Branches','branches'],
  ['about.html','About','about'],
  ['contact.html','Contact','contact'],
  ['proposal.html','Budget & Plan','proposal']
];
const CATLINKS = CATEGORIES.map(c=>`<a href="shop.html?cat=${encodeURIComponent(c.name)}">${c.name}</a>`).join('');

function chrome(){
  const page = document.body.dataset.page || 'home';
  $('#header').outerHTML = `
  <div class="topbar"><div class="wrap">
    <div>📞 <a href="tel:+919858414134">+91-9858-414134</a> &nbsp;·&nbsp; ✉ <a href="mailto:info@jkkrishivikas.com">info@jkkrishivikas.com</a></div>
    <div class="r"><span>35+ showrooms · 100+ dealers across Kashmir</span><span>Mon–Sun 9:00–17:00</span></div>
  </div></div>
  <header class="site-head" id="siteHead"><div class="wrap">
    <a class="logo-slot" href="index.html" aria-label="JK Krishi Vikas Cooperative Ltd — home">
      <span class="logo-mark">JK</span>
      <span class="logo-text"><span class="l1">JK KRISHI VIKAS</span><span class="l2">Cooperative Ltd · Since 2010</span></span>
    </a>
    <nav class="main-nav" aria-label="Primary">
      ${NAV.map(([h,l,k])=>`<a href="${h}" class="${k===page?'active':''}">${l}</a>`).join('')}
    </nav>
    <div class="head-actions">
      <form class="search-box" onsubmit="return doSearch(event)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="headSearch" placeholder="Search machines, brands…" aria-label="Search products">
      </form>
      <a class="cart-btn" href="cart.html" aria-label="Cart">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1.6"/><circle cx="19" cy="21" r="1.6"/><path d="M2 3h3l2.6 12.5a2 2 0 0 0 2 1.5h8.9a2 2 0 0 0 2-1.6L23 7H6"/></svg>
        <span class="cart-count" id="cartCount">0</span>
      </a>
      <button class="burger" onclick="document.getElementById('siteHead').classList.toggle('open')" aria-label="Menu">☰</button>
    </div>
  </div></header>
  <div class="catbar"><div class="wrap"><a href="shop.html"><b>All Products</b></a>${CATLINKS}</div></div>`;

  $('#footer').outerHTML = `
  <footer><div class="wrap cols">
    <div class="f-brand">
      <b>JK KRISHI VIKAS COOPERATIVE LTD</b>
      <p style="margin-top:10px">Premier wholesaler & distributor of agriculture machinery, horticulture tools, seeds and fertilizers across the Kashmir Valley. Trusted since 2010.</p>
      <p style="margin-top:10px">Hotel Jawahar, Lalmandi, Srinagar, J&K<br><a href="tel:+919858414134">+91-9858-414134</a> · <a href="mailto:info@jkkrishivikas.com">info@jkkrishivikas.com</a></p>
    </div>
    <div><h4>Company</h4>
      <a href="about.html">About JKKVC</a><a href="branches.html">Showrooms & Dealers</a><a href="contact.html">Contact / Bulk Enquiry</a><a href="proposal.html">Website Budget & Plan</a>
    </div>
    <div><h4>Top Categories</h4>
      ${CATEGORIES.slice(0,6).map(c=>`<a href="shop.html?cat=${encodeURIComponent(c.name)}">${c.name}</a>`).join('')}
    </div>
    <div><h4>Why buy from us</h4>
      <a href="#">100% genuine, authorised stock</a><a href="#">Manufacturer warranty support</a><a href="#">Valley-wide delivery & service</a><a href="#">Dealer & bulk pricing</a><a href="#">UPI · Cards · Cash on Delivery</a>
    </div>
  </div>
  <div class="foot-bar"><div class="wrap" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px">
    <span>© 2026 JK Krishi Vikas Cooperative Ltd. All rights reserved.</span>
    <span>GSTIN 01•••••••••1ZC · Srinagar, Jammu & Kashmir</span>
  </div></div></footer>
  <div class="demo-note"><div class="wrap"><b>DEMO / MOCK WEBSITE</b> — design preview for JKKVC management. Product photos & prices are indicative placeholders (photos hot-linked from your current site); final site uses your original logo artwork, licensed photography and live price list.</div></div>`;
  updateCartCount();
}

window.doSearch = e => { e.preventDefault(); location.href = 'shop.html?q=' + encodeURIComponent($('#headSearch').value); return false; };

/* ---------- product card ---------- */
function badgeHTML(p){ if(!p.badge) return '';
  const cls = /sale|value/i.test(p.badge) ? '' : (/original|organic/i.test(p.badge) ? 'green' : 'blue');
  return `<span class="badge ${cls}">${p.badge}</span>`; }

function cardHTML(p){
  const off = p.mrp ? Math.round((1 - p.price/p.mrp)*100) : 0;
  return `<article class="p-card">
    <a class="p-media" href="product.html?id=${p.id}" aria-label="${p.name}">
      ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${PH}';this.alt='${p.cat} — photo coming soon'">` : `<img src="${PH}" alt="${p.cat} — photo coming soon" loading="lazy">`}
      ${badgeHTML(p)}
    </a>
    <div class="p-body">
      <span class="p-brand">${p.brand}</span>
      <h3 class="p-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="p-price"><b>${money(p.price)}</b>${p.mrp?`<s>${money(p.mrp)}</s><span class="off">${off}% off</span>`:''}</div>
      <div class="p-actions">
        <button class="btn sm" onclick="addToCart('${p.id}')">Add to Cart</button>
        <a class="btn sm ghost" href="product.html?id=${p.id}">Details</a>
      </div>
    </div>
  </article>`;
}
window.renderGrid = (el, list) => { el.innerHTML = list.map(cardHTML).join('') || `<p style="grid-column:1/-1;color:var(--muted)">No products match — try clearing filters.</p>`; };

/* ---------- cart ---------- */
const cart = {
  get(){ try{ return JSON.parse(localStorage.getItem('jkkvc_cart')||'{}'); }catch(e){ return {}; } },
  set(c){ localStorage.setItem('jkkvc_cart', JSON.stringify(c)); updateCartCount(); }
};
window.cart = cart;
window.addToCart = (id, qty=1) => { const c = cart.get(); c[id] = (c[id]||0) + qty; cart.set(c); toast('Added to cart ✓'); };
window.setQty = (id, q) => { const c = cart.get(); if(q<=0) delete c[id]; else c[id]=q; cart.set(c); };
window.updateCartCount = () => { const c = cart.get(); const n = Object.values(c).reduce((a,b)=>a+b,0); const el=$('#cartCount'); if(el) el.textContent = n; };
let toastT; function toast(m){ let t=$('#toast'); if(!t){ t=document.createElement('div'); t.id='toast'; t.style.cssText='position:fixed;left:50%;bottom:26px;transform:translateX(-50%);background:var(--blue);color:#fff;padding:10px 20px;border-radius:8px;font-size:13.5px;font-weight:600;z-index:99;box-shadow:0 8px 24px rgba(5,43,114,.35)'; document.body.appendChild(t);} t.textContent=m; t.style.display='block'; clearTimeout(toastT); toastT=setTimeout(()=>t.style.display='none',1800); }

/* ---------- AI chatbot (rule-based demo of the planned AI assistant) ---- */
function botAnswer(q){
  q = q.toLowerCase();
  const find = (re, msg) => re.test(q) ? msg : null;
  return (
    find(/branch|showroom|store|dealer|nearest|where/, `You can visit any of our <b>35+ company-owned showrooms</b> — head office at Lalmandi, Srinagar, plus showrooms in every valley district (Sopore, Baramulla, Anantnag, Shopian, Kulgam, Kupwara, Ganderbal, Budgam, Pulwama & more). See the <b>Branches</b> page for the full list.`) ||
    find(/price|cost|rate|how much/, `Prices shown on each product card are indicative MRPs incl. GST. For <b>today's best price, dealer or bulk rates</b>, add the item to your cart and choose “Request Quote”, or call +91-9858-414134.`) ||
    find(/brush ?cutter|trimmer|grass cut/, `For orchard rows the <b>Husqvarna 131R</b> is our best-seller; for heavy scrub go <b>531RS / 541RS</b>. On a budget? The <b>SBC-904</b> at ₹24,500 is excellent value.`) ||
    find(/chain ?saw|saw|cut.*tree|wood/, `For apple & poplar pruning the <b>Husqvarna 135 Mark II</b>; for professional felling the <b>372 XP®</b>. All chainsaws come with bar, chain and first-service guidance.`) ||
    find(/tiller|cultivat|rotavator|plough/, `The <b>Husqvarna TF 230</b> suits most valley vegetable farms; for larger land the <b>TF 544+</b>. We also stock the 212cc power tiller at ₹38,900.`) ||
    find(/spray|pesticide|insect|disease|fungus|scab/, `For orchard spraying see the <b>Husqvarna 321S25 power sprayer</b>. For apple scab/bitter-pit programmes ask our agronomy counter for YaraVita Stop-It and the right schedule.`) ||
    find(/fertil|npk|potash|calcium|urea/, `Genuine stock of <b>YaraMila Complex, YaraLiva Tropicote, IPL MOP and IFFCO Sagarika</b> is available at all showrooms. Share your crop & area and I can suggest a base dose.`) ||
    find(/deliver|ship|transport|home/, `We deliver across the Kashmir Valley — free above ₹999 in Srinagar district; elsewhere charged by weight at checkout. Heavy machinery is delivered by our own vehicles.`) ||
    find(/pay|upi|card|emi|cod|cash/, `At checkout we accept <b>UPI, debit/credit cards, net-banking (Razorpay)</b> and <b>Cash on Delivery</b> on eligible orders. Dealer accounts can pay by bank transfer.`) ||
    find(/warranty|guarantee|service|repair|spare/, `Every machine carries the <b>manufacturer's warranty</b>, and our own workshop handles service & genuine spares for Husqvarna, Texas and more.`) ||
    find(/timing|open|hour|time/, `Showrooms are open <b>Monday–Sunday, 9:00 am – 5:00 pm</b>.`) ||
    find(/hello|hi |salam|assalam/, `Salam! 🌱 I'm <b>KrishiMitra</b>, JKKVC's AI farm assistant. Ask me about machines, prices, showrooms, fertilizers or delivery.`) ||
    `I'm a demo of the AI assistant planned for your new site. Try asking: “which brush cutter for my orchard?”, “showrooms in Sopore?”, “do you deliver to Shopian?” or “payment options?”`
  );
}
function initChat(){
  const fab = document.createElement('button');
  fab.className='chat-fab'; fab.setAttribute('aria-label','Chat with KrishiMitra AI');
  fab.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 0 1-8 8H4l1.6-3.2A8 8 0 1 1 21 12Z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/></svg><span class="dot"></span>`;
  const panel = document.createElement('div');
  panel.className='chat-panel'; panel.id='chatPanel';
  panel.innerHTML = `
    <div class="chat-head"><span class="av">KM</span><div><b>KrishiMitra AI</b><i>JKKVC farm assistant · online</i></div>
      <button style="margin-left:auto;background:none;border:0;color:#fff;font-size:16px" onclick="document.getElementById('chatPanel').classList.remove('open')" aria-label="Close chat">✕</button></div>
    <div class="chat-body" id="chatBody"></div>
    <div class="chat-quick" id="chatQuick">
      <button>Best brush cutter?</button><button>Showrooms near me</button><button>Delivery to Shopian?</button><button>Payment options</button>
    </div>
    <form class="chat-input" onsubmit="return chatSend(event)"><input id="chatText" placeholder="Ask about machines, prices, branches…" aria-label="Chat message"><button>➤</button></form>`;
  document.body.appendChild(fab); document.body.appendChild(panel);
  fab.onclick = () => { panel.classList.toggle('open'); if(!panel.dataset.seed){ botSay(botAnswer('hello')); panel.dataset.seed='1'; } };
  $$('#chatQuick button').forEach(b => b.onclick = () => { userSay(b.textContent); botSay(botAnswer(b.textContent)); });
}
function userSay(t){ const m=document.createElement('div'); m.className='msg user'; m.textContent=t; $('#chatBody').appendChild(m); scrollChat(); }
function botSay(html){ setTimeout(()=>{ const m=document.createElement('div'); m.className='msg bot'; m.innerHTML=html; $('#chatBody').appendChild(m); scrollChat(); }, 350); }
window.chatAsk = q => { const p=$('#chatPanel'); p.classList.add('open'); p.dataset.seed='1'; userSay(q); botSay(botAnswer(q)); };
function scrollChat(){ const b=$('#chatBody'); b.scrollTop=b.scrollHeight; }
window.chatSend = e => { e.preventDefault(); const t=$('#chatText').value.trim(); if(!t) return false; userSay(t); botSay(botAnswer(t)); $('#chatText').value=''; return false; };

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', () => { chrome(); initChat(); if(window.pageInit) window.pageInit(); });
window.PRODUCTS = PRODUCTS;
window.money = money;
window.PH = PH;
window.$ = $;
window.$$ = $$;
})();
