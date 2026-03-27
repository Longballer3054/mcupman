/**
 * MCUPMAN - Website Router & Content Script
 */

const articles = {
  meeting: {
    slug: "meeting",
    category: "Leadership",
    readTime: "4 min read",
    title: "The Meeting That Should Have Been an Email",
    intro: "It started like most bad meetings do. No agenda. Too many people.",
    takeaway: "If a meeting has no owner and no defined outcome, it is delay with calendar invites.",
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
 * UTILS & ROUTING
 */

function getRoute() {
  // Returns path like "/about" or "/article/meeting"
  const hash = window.location.hash || "#/";
  return hash.replace(/^#/, "") || "/";
}

function setActiveNav(route) {
  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.classList.remove("active");
    // Normalize href for comparison (remove #)
    const href = link.getAttribute("href").replace(/^#/, "") || "/";

    const isHome = (href === "/" && route === "/");
    const isExact = (href === route);
    const isArticleParent = (href === "/articles" && route.startsWith("/article/"));

    if (isHome || isExact || isArticleParent) {
      link.classList.add("active");
    }
  });
}

function footer() {
  return `
    <div class="footer">
      &copy; ${new Date().getFullYear()} MCUPMAN. Built on lessons from the field.
    </div>
  `;
}

/**
 * PAGE TEMPLATES
 */

function homePage() {
  return `
    <div class="page">
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
          <img src="images/logo.png" alt="MCUPMAN logo" class="logo-large" onerror="this.style.display='none'"/>
        </div>
      </div>

      <div class="spacer"></div>

      <div class="photo-grid">
        <div class="photo">
          <img src="images/records.jpg" alt="Records" onerror="this.style.backgroundColor='#eee'"/>
          <div class="caption"><strong>Records</strong><p>Slow it down and let the noise fall off.</p></div>
        </div>
        <div class="photo">
          <img src="images/travel.jpg" alt="Travel" onerror="this.style.backgroundColor='#eee'"/>
          <div class="caption"><strong>Travel</strong><p>New places and better stories.</p></div>
        </div>
        <div class="photo">
          <img src="images/outdoors.jpg" alt="Outdoors" onerror="this.style.backgroundColor='#eee'"/>
          <div class="caption"><strong>Outdoors</strong><p>Golf, hiking, and outside air.</p></div>
        </div>
      </div>

      <div class="spacer"></div>

      <h2>Featured article</h2>
      <div class="cards">
        <div class="card">
          <strong>${articles.meeting.title}</strong>
          <p>${articles.meeting.intro}</p>
          <p class="muted">${articles.meeting.readTime}</p>
          <div class="buttons">
            <a class="btn btn-primary" href="#/article/meeting">Read Article</a>
          </div>
        </div>
      </div>
      ${footer()}
    </div>
  `;
}

function articlesPage() {
  const articleCards = Object.values(articles).map(art => `
    <div class="card">
      <strong>${art.title}</strong>
      <p>${art.takeaway}</p>
      <p class="muted">${art.readTime}</p>
      <div class="buttons">
        <a class="btn btn-primary" href="#/article/${art.slug}">Read Article</a>
      </div>
    </div>
  `).join('');

  return `
    <div class="page">
      <h1>Articles</h1>
      <div class="cards">${articleCards}</div>
      ${footer()}
    </div>
  `;
}

function articlePage(slug) {
  const article = articles[slug];

  if (!article) {
    return `
      <div class="page">
        <h1>Article not found</h1>
        <div class="buttons">
          <a class="btn btn-primary" href="#/articles">Back to Articles</a>
        </div>
        ${footer()}
      </div>
    `;
  }

  return `
    <div class="page article-view">
      <p class="eyebrow">${article.category}</p>
      <h1>${article.title}</h1>
      <p class="muted">${article.readTime}</p>
      <div class="buttons">
        <a class="btn btn-secondary" href="#/articles">← Back to Articles</a>
      </div>
      <div class="spacer"></div>
      <div class="article-content card">
        ${article.body}
        <hr>
        <p><strong>One line takeaway:</strong> ${article.takeaway}</p>
      </div>
      ${footer()}
    </div>
  `;
}

function aboutPage() {
  return `
    <div class="page">
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
      ${footer()}
    </div>
  `;
}

function contactPage() {
  return `
    <div class="page">
      <div class="contact-box">
        <p class="eyebrow">Contact</p>
        <h1>Say hello or send a story.</h1>
        <p>Reach out at the link below.</p>
        <div class="buttons">
          <a class="btn btn-primary" href="mailto:hello@mcupman.com">Email Mike</a>
        </div>
      </div>
      ${footer()}
    </div>
  `;
}

/**
 * CORE ROUTER
 */

function router() {
  const route = getRoute();
  const app = document.getElementById("app");
  if (!app) return;

  // Scroll to top on route change
  window.scrollTo(0, 0);

  if (route === "/" || route === "") {
    app.innerHTML = homePage();
  } else if (route === "/articles") {
    app.innerHTML = articlesPage();
  } else if (route.startsWith("/article/")) {
    const slug = route.split("/")[2];
    app.innerHTML = articlePage(slug);
  } else if (route === "/about") {
    app.innerHTML = aboutPage();
  } else if (route === "/contact") {
    app.innerHTML = contactPage();
  } else {
    app.innerHTML = homePage();
  }

  setActiveNav(route);
}

// Listen for hash changes and initial load
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
