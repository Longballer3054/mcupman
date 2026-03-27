const articles = {
  meeting: {
    category: "Leadership",
    readTime: "4 min read",
    title: "The Meeting That Should Have Been an Email",
    intro: "It started like most bad meetings do. No agenda. Too many people.",
    takeaway: "If a meeting has no owner and no defined outcome, it is delay with calendar invites."
  },
  "try-it-now": {
    category: "Execution",
    readTime: "4 min read",
    title: "Try It Now",
    intro: "A feature gets deployed. You test it. It does not work.",
    takeaway: "If the fix is not tracked, explained, and documented, it is not a fix."
  },
  "full-steam": {
    category: "Post Launch",
    readTime: "5 min read",
    title: "Full Steam",
    intro: "Every launch comes with a plan, and it almost never works that way.",
    takeaway: "If transition is based on a date instead of readiness, Professional Services slowly becomes support."
  }
};

function getRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "");
}

function setActiveNav(route) {
  const links = document.querySelectorAll(".site-nav a");
  links.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === route || (href === "/" && (route === "/" || route === ""))) {
      link.classList.add("active");
    }
  });
}

function renderHomePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">MCUPMAN • personal and professional</p>
          <h1>
            Lessons from the field.
            <span class="muted">Life outside the work.</span>
          </h1>
          <p class="hero-subhead">
            A 50/50 mix of execution lessons, personal perspective, records, travel, outdoor moments, and the stories that shape how I think about work and life.
          </p>
          <div class="button-row">
            <a class="btn btn-primary" href="#/articles">Read Articles</a>
            <a class="btn btn-secondary" href="#/about">About Mike</a>
          </div>
        </div>

        <div class="hero-brand-panel">
          <div class="hero-brand-center">
            <img src="images/logo.png" alt="MCUPMAN logo" class="hero-logo-main" />
          </div>
        </div>
      </div>
    </section>

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card">
            <img src="images/records.jpg" alt="Records and music" />
            <div class="photo-card-content">
              <p class="photo-card-label">Personal</p>
              <h3 class="photo-card-title">Records and a nightcap</h3>
              <p class="photo-card-text">Slow it down. Put something good on. Let the noise fall off for a minute.</p>
            </div>
          </div>

          <div class="photo-card">
            <img src="images/travel.jpg" alt="Travel and new places" />
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">New places and better stories</h3>
              <p class="photo-card-text">Part of the fun is the food. The other part is everything that happens around it.</p>
            </div>
          </div>

          <div class="photo-card">
            <img src="images/outdoors.jpg" alt="Golf hiking and outdoors" />
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Golf, hiking, and outside air</h3>
              <p class="photo-card-text">A reminder that not every good hour needs a screen attached to it.</p>
            </div>
          </div>

          <div class="photo-card">
            <img src="images/life.jpg" alt="Life outside of work" />
            <div class="photo-card-content">
              <p class="photo-card-label">Perspective</p>
              <h3 class="photo-card-title">Life away from the laptop</h3>
              <p class="photo-card-text">The personal side should feel as intentional as the professional one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">From the field</p>
            <h2 class="section-title">Featured articles</h2>
          </div>
          <a class="section-header-link" href="#/articles">See all articles</a>
        </div>

        <div class="article-grid">
          <article class="article-card">
            <p class="article-category">Leadership</p>
            <h3>The Meeting That Should Have Been an Email</h3>
            <p class="article-excerpt">${articles.meeting.intro}</p>
            <p class="article-meta">${articles.meeting.readTime}</p>
          </article>

          <article class="article-card">
            <p class="article-category">Execution</p>
            <h3>Try It Now</h3>
            <p class="article-excerpt">${articles["try-it-now"].intro}</p>
            <p class="article-meta">${articles["try-it-now"].readTime}</p>
          </article>

          <article class="article-card">
            <p class="article-category">Post Launch</p>
            <h3>Full Steam</h3>
            <p class="article-excerpt">${articles["full-steam"].intro}</p>
            <p class="article-meta">${articles["full-steam"].readTime}</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderArticlesPage() {
  return `
    <section class="section">
      <div class="container">
        <p class="eyebrow">Articles</p>
        <h1 class="section-title">Lessons from the field</h1>
        <p class="hero-subhead">Three pieces to start. More to come.</p>

        <div class="article-grid" style="margin-top:32px;">
          <article class="article-card">
            <p class="article-category">${articles.meeting.category}</p>
            <h3>${articles.meeting.title}</h3>
            <p class="article-excerpt">${articles.meeting.takeaway}</p>
            <p class="article-meta">${articles.meeting.readTime}</p>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["try-it-now"].category}</p>
            <h3>${articles["try-it-now"].title}</h3>
            <p class="article-excerpt">${articles["try-it-now"].takeaway}</p>
            <p class="article-meta">${articles["try-it-now"].readTime}</p>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["full-steam"].category}</p>
            <h3>${articles["full-steam"].title}</h3>
            <p class="article-excerpt">${articles["full-steam"].takeaway}</p>
            <p class="article-meta">${articles["full-steam"].readTime}</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="section">
      <div class="container split-grid">
        <div class="split-heading">
          <p class="eyebrow">About</p>
          <h2>
            Operator by trade.
            <span class="muted">Human outside of it.</span>
          </h2>
        </div>

        <div class="split-copy">
          <p class="lead">The goal for this site is balance. Half field notes, half personal identity.</p>
          <p>I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.</p>
          <p>Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, hiking, and the parts of life that matter more than another calendar invite.</p>
          <p>This site is where those two sides meet.</p>
        </div>
      </div>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="contact-panel">
          <p class="eyebrow">Contact</p>
          <h2>Say hello or send a story.</h2>
          <p>Have an idea, a question, or something worth sharing? Reach out.</p>
          <div class="button-row">
            <a class="btn btn-primary" href="mailto:hello@mcupman.com">Email Mike</a>
            <a class="btn btn-secondary" href="#/articles">Read Articles</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function router() {
  const route = getRoute();
  const app = document.getElementById("app");

  if (!app) return;

  if (route === "/" || route === "") {
    app.innerHTML = renderHomePage();
  } else if (route === "/articles") {
    app.innerHTML = renderArticlesPage();
  } else if (route === "/about") {
    app.innerHTML = renderAboutPage();
  } else if (route === "/contact") {
    app.innerHTML = renderContactPage();
  } else {
    app.innerHTML = renderHomePage();
  }

  setActiveNav(route);
}

function renderFooter() {
  return `
    <footer style="margin-top:80px; padding:40px 0; border-top:1px solid rgba(255,255,255,0.1); text-align:center;">
      <p style="color:#9f978a; font-size:0.85rem; letter-spacing:0.08em;">
        © 2026 MCUPMAN. Built on lessons from the field.
      </p>
    </footer>
  `;
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
