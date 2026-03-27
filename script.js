const articles = {
  meeting: {
    category: "Leadership",
    readTime: "4 min read",
    title: "The Meeting That Should Have Been an Email",
    lyric: "You say you want a revolution… well, you know",
    artist: "The Beatles",
    intro:
      "It started like most bad meetings do. No agenda. Too many people. Just enough urgency to make everyone believe it had to happen.",
    body: `
      <p>The invite said quick sync, which is usually the first sign something is about to take longer than it should and accomplish less than expected.</p>
      <p>By minute ten, the updates began. Not decisions. Not alignment. Just updates.</p>
      <p>By minute twenty, the conversation drifted. Someone raised a new concern. Another added context. Another tried to connect it to something from last week that nobody fully remembered.</p>
      <p>By minute thirty, the room was active. It felt productive. It was not.</p>
      <h2>What went wrong</h2>
      <ul>
        <li>No one owned the meeting in a real sense.</li>
        <li>There was no defined purpose.</li>
        <li>Too many perspectives without structure created noise instead of clarity.</li>
        <li>The meeting existed because writing felt harder.</li>
      </ul>
      <h2>What could have been done differently</h2>
      <ul>
        <li>Start with the outcome before the meeting is even scheduled.</li>
        <li>Reduce the room to only the people required to decide, approve, or execute.</li>
        <li>Send context ahead of time so the meeting can be used for direction, not discovery.</li>
        <li>If it can be written clearly, it should not be a meeting.</li>
      </ul>
      <h2>Field Notes</h2>
      <ul>
        <li>This pattern shows up when visibility is mistaken for progress.</li>
        <li>Early warning sign: quick sync with no agenda.</li>
        <li>Meetings without ownership do not fail loudly. They fail quietly by consuming time and producing nothing.</li>
      </ul>
      <div class="takeaway-box">
        <p class="box-label">One Line Takeaway</p>
        <p>If a meeting has no owner and no defined outcome, it is delay with calendar invites.</p>
      </div>
    `
  },

  "try-it-now": {
    category: "Execution",
    readTime: "4 min read",
    title: "Try It Now",
    lyric: "Is there gas in the car? Yes, there’s gas in the car",
    artist: "Steely Dan",
    intro:
      "A feature gets deployed. You test it. It does not work.",
    body: `
      <p>So you do what most people do. You send a quick message, make a call, or reach out directly because it feels like the fastest path.</p>
      <p>A few minutes later, the response comes back: Try it now.</p>
      <p>You test again. This time it works. That should feel like progress, but it is not.</p>
      <p>No one explained what was wrong. No one documented what changed. No one captured why it broke in the first place. The only thing that happened was the symptom disappeared.</p>
      <p>The right move was to create a bug ticket so the issue could be tracked, tied to a release, and understood later. Instead, the easy path won.</p>
      <h2>What went wrong</h2>
      <ul>
        <li>The process was bypassed in favor of speed.</li>
        <li>There was no documented root cause.</li>
        <li>There was no ticket, no history, and no pattern tracking.</li>
        <li>The symptom disappeared, but the problem was never really fixed.</li>
      </ul>
      <h2>What could have been done differently</h2>
      <ul>
        <li>Create the ticket anyway, even if the issue gets fixed quickly.</li>
        <li>Require visibility for every fix: what changed, what was wrong, and whether it is a one off or a pattern.</li>
        <li>Use the system of record, not chat, as the source of truth.</li>
        <li>Slow down just enough to avoid repeating the same issue later.</li>
      </ul>
      <h2>Field Notes</h2>
      <ul>
        <li>Try it now is one of the most dangerous phrases in a delivery cycle.</li>
        <li>Early warning sign: fixes happening in chat instead of in the system.</li>
        <li>Recurring issues are rarely new problems. They are old problems that were never documented.</li>
      </ul>
      <div class="takeaway-box">
        <p class="box-label">One Line Takeaway</p>
        <p>If the fix is not tracked, explained, and documented, it is not a fix.</p>
      </div>
    `
  },

  "full-steam": {
    category: "Post Launch",
    readTime: "5 min read",
    title: "Full Steam",
    lyric: "I’m gonna keep it going, keep it going full steam",
    artist: "Lyric reference",
    intro:
      "Every launch comes with a plan, and it almost never works that way.",
    body: `
      <p>There is a go live date, a support model, and a clean assumption that Professional Services will stay engaged for two to three weeks post launch.</p>
      <p>Just enough time to stabilize. Just enough time to resolve minor issues. Just enough time to hand things off cleanly. That is the plan.</p>
      <p>It almost never works that way.</p>
      <p>The system goes live. At first, things look manageable. Then the tickets start. One becomes five. Five becomes twenty. Twenty becomes a list that no one wants to read all the way through.</p>
      <p>Hypercare stretches. Week two becomes week four. Week four quietly turns into something open ended.</p>
      <h2>What went wrong</h2>
      <ul>
        <li>The timeline was fixed, but reality was not.</li>
        <li>The assumption was that the system would be mostly stable at launch with only minor issues remaining.</li>
        <li>There was no meaningful transition strategy between Professional Services, Support, and Customer Success.</li>
        <li>Professional Services slowly became permanent support.</li>
      </ul>
      <h2>What could have been done differently</h2>
      <ul>
        <li>Define transition as a phase, not a moment.</li>
        <li>Adjust timelines based on complexity, client size, integrations, and issue volume.</li>
        <li>Use data to define readiness instead of transitioning based on time alone.</li>
        <li>Create overlap where Support and Customer Success ramp up while Professional Services is still actively involved in troubleshooting.</li>
      </ul>
      <h2>Field Notes</h2>
      <ul>
        <li>Hypercare always looks shorter on paper than it does in practice.</li>
        <li>Early warning sign: ticket volume increases after go live instead of stabilizing.</li>
        <li>A clean handoff is not about timing. It is about readiness.</li>
      </ul>
      <div class="takeaway-box">
        <p class="box-label">One Line Takeaway</p>
        <p>If transition is based on a date instead of readiness, Professional Services slowly becomes support.</p>
      </div>
    `
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

function renderFooter() {
  return `
    <footer style="margin-top:80px; padding:40px 0; border-top:1px solid rgba(255,255,255,0.1); text-align:center;">
      <p style="color:#9f978a; font-size:0.85rem; letter-spacing:0.08em;">
        © 2026 MCUPMAN. Built on lessons from the field.
      </p>
    </footer>
  `;
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
            <p class="article-category">${articles.meeting.category}</p>
            <h3>${articles.meeting.title}</h3>
            <p class="article-excerpt">${articles.meeting.intro}</p>
            <p class="article-meta">${articles.meeting.readTime}</p>
            <button class="article-link" data-article="meeting">Read Article</button>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["try-it-now"].category}</p>
            <h3>${articles["try-it-now"].title}</h3>
            <p class="article-excerpt">${articles["try-it-now"].intro}</p>
            <p class="article-meta">${articles["try-it-now"].readTime}</p>
            <button class="article-link" data-article="try-it-now">Read Article</button>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["full-steam"].category}</p>
            <h3>${articles["full-steam"].title}</h3>
            <p class="article-excerpt">${articles["full-steam"].intro}</p>
            <p class="article-meta">${articles["full-steam"].readTime}</p>
            <button class="article-link" data-article="full-steam">Read Article</button>
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
        <p class="hero-subhead">
          Three pieces to start. More to come.
        </p>

        <div class="article-grid" style="margin-top:32px;">
          <article class="article-card">
            <p class="article-category">${articles.meeting.category}</p>
            <h3>${articles.meeting.title}</h3>
            <p class="article-excerpt">${articles.meeting.takeaway}</p>
            <p class="article-meta">${articles.meeting.readTime}</p>
            <button class="article-link" data-article="meeting">Read Article</button>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["try-it-now"].category}</p>
            <h3>${articles["try-it-now"].title}</h3>
            <p class="article-excerpt">${articles["try-it-now"].takeaway}</p>
            <p class="article-meta">${articles["try-it-now"].readTime}</p>
            <button class="article-link" data-article="try-it-now">Read Article</button>
          </article>

          <article class="article-card">
            <p class="article-category">${articles["full-steam"].category}</p>
            <h3>${articles["full-steam"].title}</h3>
            <p class="article-excerpt">${articles["full-steam"].takeaway}</p>
            <p class="article-meta">${articles["full-steam"].readTime}</p>
            <button class="article-link" data-article="full-steam">Read Article</button>
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
          <p class="lead">
            The goal for this site is balance. Half field notes, half personal identity.
          </p>
          <p>
            I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.
          </p>
          <p>
            Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, hiking, and the parts of life that matter more than another calendar invite.
          </p>
          <p>
            This site is where those two sides meet.
          </p>
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
          <p>
            Have an idea, a question, or something worth sharing? Reach out.
          </p>
          <div class="button-row">
            <a class="btn btn-primary" href="mailto:hello@mcupman.com">Email Mike</a>
            <a class="btn btn-secondary" href="#/articles">Read Articles</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderArticle(article) {
  return `
    <article class="article-view">
      <p class="article-category">${article.category}</p>
      <h1 id="article-title">${article.title}</h1>
      <p class="read-time">${article.readTime}</p>

      <div class="lyric-box">
        <p class="box-label">Opening lyric</p>
        <p class="lyric-text">“${article.lyric}”</p>
        <p class="lyric-artist">${article.artist}</p>
      </div>

      <section>
        <p class="article-lead">${article.intro}</p>
        ${article.body}
      </section>
    </article>
  `;
}

function openArticle(articleKey) {
  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("modal-content");
  const article = articles[articleKey];

  if (!modal || !modalContent || !article) return;

  modalContent.innerHTML = renderArticle(article);
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeArticle() {
  const modal = document.getElementById("article-modal");
  if (!modal) return;

  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function bindArticleButtons() {
  const buttons = document.querySelectorAll(".article-link");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const articleKey = button.getAttribute("data-article");
      openArticle(articleKey);
    });
  });
}

function bindModalEvents() {
  const modalClose = document.getElementById("modal-close");
  const modalOverlay = document.getElementById("modal-overlay");

  if (modalClose) {
    modalClose.onclick = closeArticle;
  }

  if (modalOverlay) {
    modalOverlay.onclick = closeArticle;
  }

  document.onkeydown = (event) => {
    if (event.key === "Escape") {
      closeArticle();
    }
  };
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
  bindArticleButtons();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  router();
  bindModalEvents();
});          <h1>
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
        <p class="hero-subhead">
          Three pieces to start. More to come.
        </p>

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
          <p class="lead">
            The goal for this site is balance. Half field notes, half personal identity.
          </p>
          <p>
            I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.
          </p>
          <p>
            Over the years, I’ve been involved in large scale implementations, launches, and operational challenges where the gap between strategy and execution becomes very real.
          </p>
          <p>
            Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, hiking, and the parts of life that matter more than another calendar invite.
          </p>
          <p>
            This site is where those two sides meet.
          </p>
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
          <p>
            Have an idea, a question, or something worth sharing? Reach out.
          </p>
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

function renderFooter() {
  return `
    <footer style="margin-top:80px; padding:40px 0; border-top:1px solid rgba(255,255,255,0.1); text-align:center;">
      <p style="color:#9f978a; font-size:0.85rem; letter-spacing:0.08em;">
        © 2026 MCUPMAN. Built on lessons from the field.
      </p>
    </footer>
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

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
