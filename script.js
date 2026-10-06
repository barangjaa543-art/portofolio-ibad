/* =========================================================
   DATA — EDIT BAGIAN INI UNTUK MENGGANTI ISI WEBSITE
   ========================================================= */

// Angka statistik (bagian About)
const STATS = [
  { label: "Projects", value: 4, suffix: "+" },
  { label: "Skills Learning", value: 5, suffix: "" },
  { label: "Certificates", value: 3, suffix: "" },
  { label: "Learning Since", value: 2026, suffix: "", noCount: true },
];

// Skill: icon (emoji), nama, deskripsi, progress (0-100)
const SKILLS = [
  { icon: "🌐", name: "Web Development", desc: "HTML • CSS • JavaScript", progress: 60 },
  { icon: "🐍", name: "Programming", desc: "Python", progress: 35 },
  { icon: "📊", name: "Microsoft Excel", desc: "Formula • Data • Spreadsheet", progress: 45 },
  { icon: "🇨🇳", name: "Mandarin", desc: "HSK 1 → ...", progress: 30 },
  { icon: "📈", name: "Stock Market", desc: "Fundamental • Technical Analysis • News", progress: 25 },
];

// Project: ganti link "#" dengan link asli
const PROJECTS = [
  { emoji: "🤖", name: "WhatsApp Reminder Bot", desc: "Bot WhatsApp untuk pengingat dan catatan otomatis.", tech: ["Node.js", "Baileys", "Cron"], demo: "#", code: "#" },
  { emoji: "🀄", name: "HSK Learning Website", desc: "Website belajar kosakata Mandarin HSK 1.", tech: ["HTML", "CSS", "JavaScript"], demo: "#", code: "#" },
  { emoji: "💼", name: "Personal Portfolio", desc: "Website portfolio pribadi yang sedang kamu lihat.", tech: ["HTML", "CSS", "JavaScript"], demo: "#", code: "#" },
  { emoji: "🎁", name: "Website Template", desc: "Template website hadiah yang bisa dipakai ulang.", tech: ["HTML", "CSS", "JavaScript"], demo: "#", code: "#" },
];

// Sertifikat: tambah objek baru untuk menambah sertifikat.
// image: isi path gambar, misal "img/sertifikat1.jpg". Kosongkan untuk placeholder.
const CERTIFICATES = [
  { name: "Sertifikat Pasar modal", issuer: "idx", year: 2026, category: "pasar modal", image: "sertifikat idx1.png" },
  { name: "Sertifikat teknikal analysis", issuer: "tuntun sekuritas", year: 2026, category: "trading", image: "sertifikat tuntun teknikal.png" },
  { name: "Sertifikat fundamental", issuer: "tuntun sekuritas", year: 2026, category: "investing", image: "serifikat tuntun fundamental.png" },
];

// Timeline belajar
const JOURNEY = [
  { year: 2026, text: "Started exploring web development" },
  { year: 2026, text: "Started learning Python" },
  { year: 2026, text: "Started learning Mandarin" },
  { year: 2026, text: "Started learning Excel" },
  { year: 2026, text: "Started exploring stock market and investing" },
];

// Link kontak: ganti "#" dengan link asli
const SOCIALS = [
  { name: "GitHub", url: "https://github.com/username" },
  { name: "Instagram", url: "https://instagram.com/ibd_1805" },
  { name: "Email", url: "ibadruddin43@gmail.com" },
  { name: "Whatsapp", url: ""},
];

// Teks mengetik di hero
const TYPING = ["Student • Learner • Builder"];

/* =========================================================
   KODE PROGRAM (tidak perlu diubah untuk pemula)
   ========================================================= */
const $ = (id) => document.getElementById(id);
const placeholder = (t) => "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='560'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#3b82ff'/><stop offset='.5' stop-color='#8b5cf6'/><stop offset='1' stop-color='#f472b6'/></linearGradient></defs><rect width='800' height='560' fill='url(#g)'/><text x='400' y='290' font-size='34' fill='white' text-anchor='middle' font-family='sans-serif'>${t}</text></svg>`);

// Foto profil: kalau foto.jpg belum ada, pakai placeholder
$("profilePhoto").onerror = function () { this.onerror = null; this.src = ("me1.png"); };

// Render stats
$("stats").innerHTML = STATS.map(s =>
  `<div class="glass stat"><b class="grad" data-to="${s.value}" data-nocount="${!!s.noCount}" data-suffix="${s.suffix}">0</b><small>${s.label}</small></div>`).join("");

// Render skills
$("skillList").innerHTML = SKILLS.map(s =>
  `<div class="glass card"><span class="icon">${s.icon}</span><h3>${s.name}</h3><p>${s.desc}</p>
   <div class="bar"><div class="fill" data-w="${s.progress}"></div></div><span class="pct">${s.progress}% progress belajar</span></div>`).join("");

// Render projects
$("projectList").innerHTML = PROJECTS.map(p =>
  `<div class="glass card"><div class="thumb">${p.emoji}</div><h3>${p.name}</h3><p>${p.desc}</p>
   <div class="badges">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
   <div class="btns"><a class="btn sm primary" href="${p.demo}" target="_blank" rel="noopener">View Project</a>
   <a class="btn sm" href="${p.code}" target="_blank" rel="noopener">View Code</a></div></div>`).join("");

// Render certificates + modal
$("certList").innerHTML = CERTIFICATES.map((c, i) =>
  `<div class="glass card" data-i="${i}"><img src="${c.image || placeholder(c.name)}" alt="${c.name}" onerror="this.onerror=null;this.src='${placeholder(c.name)}'">
   <div class="info"><span class="tag">${c.category}</span><h3>${c.name}</h3><small>${c.issuer} • ${c.year}</small></div></div>`).join("");
$("certList").addEventListener("click", (e) => {
  const card = e.target.closest("[data-i]"); if (!card) return;
  const c = CERTIFICATES[card.dataset.i];
  $("modalImg").src = card.querySelector("img").src;
  $("modalCap").textContent = `${c.name} — ${c.issuer} (${c.year})`;
  $("modal").classList.add("open");
});
const closeModal = () => $("modal").classList.remove("open");
$("closeModal").onclick = closeModal;
$("modal").onclick = (e) => { if (e.target.id === "modal") closeModal(); };
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

// Render timeline & socials
$("timeline").innerHTML = JOURNEY.map(j => `<div class="glass t-item"><b>${j.year}</b><p>${j.text}</p></div>`).join("");
$("socials").innerHTML = SOCIALS.map((s, i) =>
  `<a class="btn ${i ? "ghost" : "primary"}" href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join("");

// Efek mengetik
(function typing() {
  const el = $("typing"); let w = 0, c = 0, del = false;
  (function tick() {
    const word = TYPING[w];
    el.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(tick, 2500); }
    if (del && c === 0) { del = false; w = (w + 1) % TYPING.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 80);
  })();
})();

// Navbar: efek scroll, menu mobile, link aktif
const nav = $("navbar"), menu = $("menu");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });
$("menuBtn").onclick = () => menu.classList.toggle("open");
menu.addEventListener("click", () => menu.classList.remove("open"));

// Intersection Observer: muncul saat scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const t = en.target; t.classList.add("show");
    t.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%");
    t.querySelectorAll("[data-to]").forEach(countUp);
    io.unobserve(t);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal, .t-item").forEach(el => io.observe(el));

function countUp(el) {
  const to = +el.dataset.to, suf = el.dataset.suffix;
  if (el.dataset.nocount === "true") { el.textContent = to + suf; return; }
  let n = 0; const step = Math.max(1, Math.ceil(to / 40));
  const id = setInterval(() => { n = Math.min(to, n + step); el.textContent = n + suf; if (n >= to) clearInterval(id); }, 40);
}

// Highlight menu sesuai section
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver((es) => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach(s => spy.observe(s));

// Partikel ringan (canvas)
(function particles() {
  const cv = $("particles"), ctx = cv.getContext("2d"); let W, H, P = [];
  const colors = ["#22d3ee", "#3b82ff", "#8b5cf6", "#f472b6"];
  function size() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  size(); addEventListener("resize", size);
  const count = innerWidth < 700 ? 30 : 60;
  for (let i = 0; i < count; i++) P.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + .4, v: Math.random() * .3 + .1, c: colors[i % 4] });
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    P.forEach(p => {
      p.y -= p.v; if (p.y < 0) { p.y = H; p.x = Math.random() * W; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fillStyle = p.c; ctx.shadowBlur = 10; ctx.shadowColor = p.c; ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
})();
