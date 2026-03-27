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
          <img src="images/logo.png" alt="MCUPMAN logo" class="logo-large" />
        </div>
      </div>

      <div class="spacer"></div>

      <div class="photo-grid">
        <div class="photo">
          <img src="images/records.jpg" alt="Records" />
          <div class="caption">
            <strong>Records</strong>
            <p>Slow it down and let the noise fall off for a minute.</p>
          </div>
        </div>

        <div class="photo">
          <img src="images/travel.jpg" alt="Travel" />
          <div class="caption">
            <strong>Travel</strong>
            <p>New places and better stories.</p>
          </div>
        </div>

        <div class="photo">
          <img src="images/outdoors.jpg" alt="Outdoors" />
          <div class="caption">
            <strong>Outdoors</strong>
            <p>Golf, hiking, and outside air.</p>
          </div>
        </div>
      </div>

      <div class="spacer"></div>

      <h2>Featured articles</h2>
      <div class="cards">
        <div class="card">
          <strong>The Meeting That Should Have Been an Email</strong>
          <p>Leadership lessons from messy meetings.</p>
        </div>
        <div class="card">
          <strong>Try It Now</strong>
          <p>Why undocumented fixes come back again.</p>
        </div>
        <div class="card">
          <strong>Full Steam</strong>
          <p>Why hypercare plans almost never go as planned.</p>
        </div>
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
          <p class="eyebrow">About</p>
          <h1>Operator by trade.<br><span class="muted">Human outside of it.</span></h1>
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
        <p class="eyebrow">Contact</p>
        <h1>Say hello or send a story.</h1>
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
window.addEventListener("DOMContentLoaded", router);
