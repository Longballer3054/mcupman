function getRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "");
}

function setActiveNav(route) {
  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === route || (href === "/" && (route === "/" || route === ""))) {
      link.classList.add("active");
    }
  });
}

function footer() {
  return `
    <div class="footer">
      &copy; 2026 MCUPMAN. Built on lessons from the field.
    </div>
  `;
}

function homePage() {
  return `
    <div class="page">
      <div class="hero-grid">
        <div>
          <p>MCUPMAN • personal and professional</p>
          <h1>Lessons from the field.<br>Life outside the work.</h1>
          <p>A 50/50 mix of execution lessons, personal perspective, records, travel, outdoor moments, and the stories that shape how I think about work and life.</p>
          <div class="buttons">
            <a class="btn btn-primary" href="#/articles">Read Articles</a>
            <a class="btn btn-secondary" href="#/about">About Mike</a>
          </div>
        </div>
        <div class="panel">
          <img src="images/logo.png" alt="MCUPMAN logo" class="logo-large" />
        </div>
      </div>

      <div style="height:40px"></div>

      <div class="photo-grid">
        <div class="photo">
          <img src="images/records.jpg" alt="Records" />
          <div class="caption"><strong>Records</strong><p>Slow it down and let the noise fall off for a minute.</p></div>
        </div>
        <div class="photo">
          <img src="images/travel.jpg" alt="Travel" />
          <div class="caption"><strong>Travel</strong><p>New places and better stories.</p></div>
        </div>
        <div class="photo">
          <img src="images/outdoors.jpg" alt="Outdoors" />
          <div class="caption"><strong>Outdoors</strong><p>Golf, hiking, and outside air.</p></div>
        </div>
      </div>

      <div style="height:40px"></div>

      <h2>Featured articles</h2>
      <div class="cards">
        <div class="card"><strong>The Meeting That Should Have Been an Email</strong><p>Leadership lessons from messy meetings.</p></div>
        <div class="card"><strong>Try It Now</strong><p>Why undocumented fixes come back again.</p></div>
        <div class="card"><strong>Full Steam</strong><p>Why hypercare plans almost never go as planned.</p></div>
      </div>

      ${footer()}
    </div>
  `;
}

function articlesPage() {
  return `
    <div class="page">
      <h1>Articles</h1>
      <div class="cards">
        <div class="card">
          <strong>The Meeting That Should Have Been an Email</strong>
          <p>If a meeting has no owner and no defined outcome, it is delay with calendar invites.</p>
        </div>
        <div class="card">
          <strong>Try It Now</strong>
          <p>If the fix is not tracked, explained, and documented, it is not a fix.</p>
        </div>
        <div class="card">
          <strong>Full Steam</strong>
          <p>If transition is based on a date instead of readiness, Professional Services slowly becomes support.</p>
        </div>
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
          <h1>About</h1>
        </div>
        <div>
          <p>I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.</p>
          <p>Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, hiking, and the parts of life that matter more than another calendar invite.</p>
          <p>This site is where those two sides meet.</p>
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
        <h1>Contact</h1>
        <p>Have an idea, a question, or something worth sharing? Reach out.</p>
        <div class="buttons">
          <a class="btn btn-primary" href="mailto:hello@mcupman.com">Email Mike</a>
          <a class="btn btn-secondary" href="#/articles">Read Articles</a>
        </div>
      </div>
      ${footer()}
    </div>
  `;
}

function router() {
  const route = getRoute();
  const app = document.getElementById("app");
  if (!app) return;

  if (route === "/" || route === "") {
    app.innerHTML = homePage();
  } else if (route === "/articles") {
    app.innerHTML = articlesPage();
  } else if (route === "/about") {
    app.innerHTML = aboutPage();
  } else if (route === "/contact") {
    app.innerHTML = contactPage();
  } else {
    app.innerHTML = homePage();
  }

  setActiveNav(route);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);          </p>
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
            <p class="article-category">${articles.meeting.category}</p>
            <h3>${articles.meeting.title}</h3>
            <p class="article-excerpt">${articles.meeting.intro}</p>
            <p class="article-meta">${articles.meeting.readTime}</p>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["try-it-now"].category}</p>
            <h3>${articles["try-it-now"].title}</h3>
            <p class="article-excerpt">${articles["try-it-now"].intro}</p>
            <p class="article-meta">${articles["try-it-now"].readTime}</p>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["full-steam"].category}</p>
            <h3>${articles["full-steam"].title}</h3>
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
    app.innerHTML = renderHomePage() + renderFooter();
  } else if (route === "/articles") {
    app.innerHTML = renderArticlesPage() + renderFooter();
  } else if (route === "/about") {
    app.innerHTML = renderAboutPage() + renderFooter();
  } else if (route === "/contact") {
    app.innerHTML = renderContactPage() + renderFooter();
  } else {
    app.innerHTML = renderHomePage() + renderFooter();
  }

  setActiveNav(route);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
