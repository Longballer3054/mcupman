/**
 * MCUPMAN website router and content script
 * Rewritten for clarity, maintainability, and safer rendering assumptions.
 */

/**
 * Site config
 */
const SITE = {
  name: "MCUPMAN",
  email: "hello@mcupman.com"
};

/**
 * Article data
 *
 * Note:
 * - `body` is treated as trusted author-written HTML.
 * - Do not populate `body` from untrusted user input or external sources
 *   without sanitizing it first.
 */
const ARTICLES = {
  meeting: {
    slug: "meeting",
    category: "Leadership",
    readTime: "4 min read",
    title: "The Meeting That Should Have Been an Email",
    intro: "It started like most bad meetings do. No agenda. Too many people.",
    takeaway:
      "If a meeting has no owner and no defined outcome, it is delay with calendar invites.",
    featured: true,
    body: `
      <p>It started like most bad meetings do. No agenda. Too many people. Just enough urgency to make everyone believe it had to happen.</p>
      <p>The invite said quick sync, which is usually the first sign something is about to take longer than it should and accomplish less than expected.</p>
      <p>By minute ten, the updates began. Not decisions. Not alignment. Just updates.</p>
      <p>By minute twenty, the conversation drifted. Someone raised a new concern. Another added context. Another tried to connect it to something from last week that nobody fully remembered.</p>
      <p>By minute thirty, the room was active. It felt productive. It was not.</p>

      <h2>What went wrong</h2>
      <p>No one owned the meeting in a real sense. There was no defined purpose. Too many perspectives without structure created noise instead of clarity. The meeting existed because writing felt harder.</p>

      <h2>What could have been done differently</h2>
      <p>Start with the outcome before the meeting is even scheduled. Reduce the room to only the people required to decide, approve, or execute. Send context ahead of time so the meeting can be used for direction, not discovery. If it can be written clearly, it should not be a meeting.</p>

      <h2>Field Notes</h2>
      <p>This pattern shows up when visibility is mistaken for progress. Meetings without ownership do not fail loudly. They fail quietly by consuming time and producing nothing.</p>
    `
  }
};

/**
 * Utilities
 */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function getRoute() {
  const hash = window.location.hash || "#/";
  const route = hash.replace(/^#/, "").trim();

  if (!route) return "/";
  return route.startsWith("/") ? route : `/${route}`;
}

function normalizeRoute(route) {
  if (!route) return "/";

  const cleaned = route.trim().replace(/\/+/g, "/");
  return cleaned === "" ? "/" : cleaned;
}

function getArticleBySlug(slug) {
  return ARTICLES[slug] || null;
}

function getAllArticles() {
  return Object.values(ARTICLES);
}

function getFeaturedArticle() {
  const featured = getAllArticles().find((article) => article.featured);
  return featured || getAllArticles()[0] || null;
}

function footer() {
  return `
    <div class="footer">
      &copy; ${new Date().getFullYear()} ${escapeHtml(SITE.name)}. Built on lessons from the field.
    </div>
  `;
}

function layout(content, extraClass = "") {
  const className = extraClass ? `page ${extraClass}` : "page";
  return `
    <div class="${className}">
      ${content}
      ${footer()}
    </div>
  `;
}

function imageTag(src, alt, className = "") {
  const safeSrc = escapeAttribute(src);
  const safeAlt = escapeAttribute(alt);
  const safeClass = className ? ` class="${escapeAttribute(className)}"` : "";

  return `<img src="${safeSrc}" alt="${safeAlt}"${safeClass}>`;
}

function articleCard(article) {
  return `
    <div class="card">
      <strong>${escapeHtml(article.title)}</strong>
      <p>${escapeHtml(article.takeaway)}</p>
      <p class="muted">${escapeHtml(article.readTime)}</p>
      <div class="buttons">
        <a class="btn btn-primary" href="#/article/${encodeURIComponent(article.slug)}">Read Article</a>
      </div>
    </div>
  `;
}

function setActiveNav(route) {
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = (link.getAttribute("href") || "").replace(/^#/, "") || "/";
    const normalizedHref = normalizeRoute(href);
    const normalizedRoute = normalizeRoute(route);

    const isHome = normalizedHref === "/" && normalizedRoute === "/";
    const isExactMatch = normalizedHref === normalizedRoute;
    const isArticleSection =
      normalizedHref === "/articles" && normalizedRoute.startsWith("/article/");

    if (isHome || isExactMatch || isArticleSection) {
      link.classList.add("active");
    }
  });
}

/**
 * Page templates
 */

function homePage() {
  const featuredArticle = getFeaturedArticle();

  const featuredSection = featuredArticle
    ? `
      <h2>Featured article</h2>
      <div class="cards">
        ${articleCard(featuredArticle)}
      </div>
    `
    : "";

  return layout(`
    <div class="hero-grid">
      <div>
        <p class="eyebrow">MCUPMAN • personal and professional</p>
        <h1>Lessons from the field.<br><span class="muted">Life outside the work.</span></h1>
        <p class="hero-subhead">
          A 50/50 mix of execution lessons, personal perspective, records, travel, outdoor moments, and the stories that shape how I think about work and life.
        </p>
        <div class="buttons">
          <a class="btn btn-primary" href="#/articles">Read Articles</a>
          <a class="btn btn-secondary" href="#/about">About Mike</a>
        </div>
      </div>

      <div class="panel hero-logo-panel">
        ${imageTag("images/logo.png", "MCUPMAN logo", "logo-large")}
      </div>
    </div>

    <div class="spacer"></div>

    <div class="photo-grid">
      <div class="photo">
        ${imageTag("images/records.jpg", "Records")}
        <div class="caption">
          <strong>Records</strong>
          <p>Slow it down and let the noise fall off.</p>
        </div>
      </div>

      <div class="photo">
        ${imageTag("images/travel.jpg", "Travel")}
        <div class="caption">
          <strong>Travel</strong>
          <p>New places and better stories.</p>
        </div>
      </div>

      <div class="photo">
        ${imageTag("images/outdoors.jpg", "Outdoors")}
        <div class="caption">
          <strong>Outdoors</strong>
          <p>Golf, hiking, and outside air.</p>
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    ${featuredSection}
  `);
}

function articlesPage() {
  const cards = getAllArticles().map(articleCard).join("");

  return layout(`
    <h1>Articles</h1>
    <div class="cards">
      ${cards}
    </div>
  `);
}

function articlePage(slug) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return notFoundPage("Article not found", "The article you selected could not be found.");
  }

  return layout(
    `
      <p class="eyebrow">${escapeHtml(article.category)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <p class="muted">${escapeHtml(article.readTime)}</p>

      <div class="buttons">
        <a class="btn btn-secondary" href="#/articles">Back to Articles</a>
      </div>

      <div class="spacer"></div>

      <div class="article-content card">
        ${article.body}
        <hr>
        <p><strong>One line takeaway:</strong> ${escapeHtml(article.takeaway)}</p>
      </div>
    `,
    "article-view"
  );
}

function aboutPage() {
  return layout(`
    <div class="two-col">
      <div>
        <p class="eyebrow">About</p>
        <h1>Operator by trade.<br><span class="muted">Human outside of it.</span></h1>
      </div>
      <div>
        <p>I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function.</p>
        <p>Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, and hiking.</p>
      </div>
    </div>
  `);
}

function contactPage() {
  const safeEmail = escapeAttribute(SITE.email);

  return layout(`
    <div class="contact-box">
      <p class="eyebrow">Contact</p>
      <h1>Say hello or send a story.</h1>
      <p>Reach out at the link below.</p>
      <div class="buttons">
        <a class="btn btn-primary" href="mailto:${safeEmail}">Email Mike</a>
      </div>
    </div>
  `);
}

function notFoundPage(
  title = "Page not found",
  message = "The page you requested does not exist."
) {
  return layout(`
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(message)}</p>
    <div class="buttons">
      <a class="btn btn-primary" href="#/">Go Home</a>
    </div>
  `);
}

/**
 * Core router
 */

function renderRoute(rawRoute) {
  const route = normalizeRoute(rawRoute);

  if (route === "/") {
    return homePage();
  }

  if (route === "/articles") {
    return articlesPage();
  }

  if (route.startsWith("/article/")) {
    const parts = route.split("/");
    const slug = decodeURIComponent(parts[2] || "");

    if (!slug || parts.length > 3) {
      return notFoundPage();
    }

    return articlePage(slug);
  }

  if (route === "/about") {
    return aboutPage();
  }

  if (route === "/contact") {
    return contactPage();
  }

  return notFoundPage();
}

function router() {
  const app = document.getElementById("app");
  if (!app) return;

  const route = getRoute();
  const html = renderRoute(route);

  app.innerHTML = html;
  setActiveNav(route);
  window.scrollTo({ top: 0, behavior: "auto" });
}

/**
 * Boot
 */

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
