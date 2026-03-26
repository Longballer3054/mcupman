const articles = [
  {
    slug: "meeting",
    title: "The Meeting That Should Have Been an Email",
    content: "Meetings fail when there is no owner, no outcome, and too many voices."
  },
  {
    slug: "try-it-now",
    title: "Try It Now",
    content: "If the fix is not tracked, explained, and documented, it is not a fix."
  },
  {
    slug: "full-steam",
    title: "Full Steam",
    content: "If transition is based on a date instead of readiness, it will fail."
  }
];

function getRoute() {
  return window.location.hash.replace("#", "") || "/";
}

function renderHome() {
  return `
    <h1>Lessons from the field.</h1>
    <p>Life outside the work.</p>

    <div class="photo-grid">
      <div class="photo">Records</div>
      <div class="photo">Travel</div>
      <div class="photo">Golf</div>
      <div class="photo">Life</div>
    </div>

    <a class="button" href="#/articles">Read Articles</a>
  `;
}

function renderArticles() {
  return `
    <h1>Articles</h1>
    ${articles.map(a => `
      <div class="card">
        <h3>${a.title}</h3>
        <a href="#/article/${a.slug}">Read</a>
      </div>
    `).join("")}
  `;
}

function renderArticle(slug) {
  const a = articles.find(x => x.slug === slug);
  return `
    <a href="#/articles">← Back</a>
    <h1>${a.title}</h1>
    <p>${a.content}</p>
  `;
}

function renderAbout() {
  return `
    <h1>About</h1>
    <p>I work at the intersection of operations, technology, and execution.</p>
    <p>Outside of work: records, travel, golf, outdoors.</p>
  `;
}

function renderContact() {
  return `
    <h1>Contact</h1>
    <p>Email: hello@mcupman.com</p>
  `;
}

function router() {
  const route = getRoute();
  const app = document.getElementById("app");

  if (route === "/") {
    app.innerHTML = renderHome();
  } else if (route === "/articles") {
    app.innerHTML = renderArticles();
  } else if (route.startsWith("/article/")) {
    app.innerHTML = renderArticle(route.split("/")[2]);
  } else if (route === "/about") {
    app.innerHTML = renderAbout();
  } else if (route === "/contact") {
    app.innerHTML = renderContact();
  }
}

window.addEventListener("hashchange", router);
router();      "Recurring issues are rarely new problems. They are old problems that were never documented."
    ],
    takeaway:
      "If the fix is not tracked, explained, and documented, it is not a fix. It is a temporary reset waiting to fail again."
  },

  "full-steam": {
    category: "Post Launch",
    readTime: "5 min read",
    title: "Full Steam",
    lyric: "I’m gonna keep it going, keep it going full steam",
    artist: "Lyric reference",
    intro:
      "Every launch comes with a plan. There is a go live date, a support model, and a clean assumption that Professional Services will stay engaged for two to three weeks post launch.",
    story: [
      "Just enough time to stabilize. Just enough time to resolve minor issues. Just enough time to hand things off cleanly. That is the plan.",
      "It almost never works that way.",
      "The system goes live. At first, things look manageable. Then the tickets start. One becomes five. Five becomes twenty. Twenty becomes a list that no one wants to read all the way through.",
      "Some are real defects. Some are configuration gaps. Some are edge cases that were never tested. Some are things that worked before, but do not anymore.",
      "Hypercare stretches. Week two becomes week four. Week four quietly turns into something open ended."
    ],
    wrong: [
      "The timeline was fixed, but reality was not.",
      "The assumption was that the system would be mostly stable at launch with only minor issues remaining.",
      "There was no meaningful transition strategy between Professional Services, Support, and Customer Success.",
      "Professional Services slowly became permanent support."
    ],
    different: [
      "Define transition as a phase, not a moment.",
      "Adjust timelines based on complexity, client size, integrations, and issue volume.",
      "Use data to define readiness instead of transitioning based on time alone.",
      "Create overlap where Support and Customer Success ramp up while Professional Services is still actively involved in troubleshooting."
    ],
    notes: [
      "Hypercare always looks shorter on paper than it does in practice.",
      "Early warning sign: ticket volume increases after go live instead of stabilizing.",
      "A clean handoff is not about timing. It is about readiness."
    ],
    takeaway:
      "If transition is based on a date instead of readiness, Professional Services does not exit. It just slowly becomes support."
  }
};

function getRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "");
}

function renderHomePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
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

        <div class="hero-brand-panel reveal">
          <div class="hero-brand-top">
            <div class="hero-brand-logo">MU</div>
            <div>
              <p class="eyebrow">Brand mark</p>
              <h2>Make the logo part of the site, not an afterthought.</h2>
            </div>
          </div>
          <p class="hero-brand-copy">
            The identity should feel more like a stamp on a journal than a tiny decorative icon in the corner.
          </p>
        </div>
      </div>
    </section>

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Personal</p>
              <h3 class="photo-card-title">Records and a nightcap</h3>
              <p class="photo-card-text">Slow it down. Put something good on. Let the noise fall off for a minute.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">New places and better stories</h3>
              <p class="photo-card-text">Part of the fun is the food. The other part is everything that happens around it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Golf, hiking, and outside air</h3>
              <p class="photo-card-text">A reminder that not every good hour needs a screen attached to it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
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
          <article class="article-card reveal">
            <p class="article-category">Leadership</p>
            <h3>The Meeting That Should Have Been an Email</h3>
            <p class="article-excerpt">A breakdown of how unclear ownership and undefined outcomes turn meetings into delay.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="meeting">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Execution</p>
            <h3>Try It Now</h3>
            <p class="article-excerpt">Why quick fixes without tracking and root cause lead to the same problems showing up again.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="try-it-now">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Post Launch</p>
            <h3>Full Steam</h3>
            <p class="article-excerpt">How unrealistic hypercare timelines turn Professional Services into long term support.</p>
            <p class="article-meta">5 min read</p>
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
          <article class="article-card reveal">
            <p class="article-category">Leadership</p>
            <h3>The Meeting That Should Have Been an Email</h3>
            <p class="article-excerpt">A breakdown of how unclear ownership and undefined outcomes turn meetings into delay.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="meeting">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Execution</p>
            <h3>Try It Now</h3>
            <p class="article-excerpt">Why quick fixes without tracking and root cause lead to the same problems showing up again.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="try-it-now">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Post Launch</p>
            <h3>Full Steam</h3>
            <p class="article-excerpt">How unrealistic hypercare timelines turn Professional Services into long term support.</p>
            <p class="article-meta">5 min read</p>
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
          <p class="lead">The goal for this site is balance. Half field notes, half personal identity.</p>
          <p>
            I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.
          </p>
          <p>
            Over the years, I’ve been involved in large scale implementations, launches, and operational challenges where the gap between strategy and execution becomes very real. That experience shapes how I think, how I lead, and how I write.
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

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Records</p>
              <h3 class="photo-card-title">A slower pace</h3>
              <p class="photo-card-text">Good albums, better evenings, and room to think.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">A wider view</h3>
              <p class="photo-card-text">Different places tend to sharpen perspective.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Step away from the noise</h3>
              <p class="photo-card-text">Golf, hiking, movement, and being outside helps reset everything.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Life</p>
              <h3 class="photo-card-title">More than work</h3>
              <p class="photo-card-text">The personal side should feel just as real as the professional one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="contact-panel reveal">
          <p class="eyebrow">Contact</p>
          <h2>Say hello or send a story.</h2>
          <p>
            Have an idea, a question, or something that belongs in the field notes pile? Reach out.
          </p>
          <p>
            This page should feel approachable, personal, and simple.
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
        ${article.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>

      <section class="article-block">
        <h2>What went wrong</h2>
        <ul>
          ${article.wrong.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="article-block">
        <h2>What could have been done differently</h2>
        <ul>
          ${article.different.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="article-block field-notes">
        <h2>Field Notes</h2>
        <ul>
          ${article.notes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="takeaway-box">
        <p class="box-label">One Line Takeaway</p>
        <p>${article.takeaway}</p>
      </section>
    </article>
  `;
}

function openArticle(articleKey) {
  const article = articles[articleKey];
  if (!article) return;

  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = renderArticle(article);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeArticle() {
  const modal = document.getElementById("article-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindArticleButtons() {
  document.querySelectorAll(".article-link").forEach((button) => {
    button.addEventListener("click", () => {
      openArticle(button.dataset.article);
    });
  });
}

function bindRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function router() {
  const route = getRoute();
  const app = document.getElementById("app");

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

  bindArticleButtons();
  bindRevealAnimation();
  window.scrollTo(0, 0);
}

document.getElementById("modal-close").addEventListener("click", closeArticle);
document.getElementById("modal-overlay").addEventListener("click", closeArticle);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeArticle();
});

window.addEventListener("hashchange", router);
router();      "Try it now is one of the most dangerous phrases in a delivery cycle.",
      "Early warning sign: fixes happening in chat instead of in the system.",
      "Recurring issues are rarely new problems. They are old problems that were never documented."
    ],
    takeaway:
      "If the fix is not tracked, explained, and documented, it is not a fix. It is a temporary reset waiting to fail again."
  },

  "full-steam": {
    category: "Post Launch",
    readTime: "5 min read",
    title: "Full Steam",
    lyric: "I’m gonna keep it going, keep it going full steam",
    artist: "Lyric reference",
    intro:
      "Every launch comes with a plan. There is a go live date, a support model, and a clean assumption that Professional Services will stay engaged for two to three weeks post launch.",
    story: [
      "Just enough time to stabilize. Just enough time to resolve minor issues. Just enough time to hand things off cleanly. That is the plan.",
      "It almost never works that way.",
      "The system goes live. At first, things look manageable. Then the tickets start. One becomes five. Five becomes twenty. Twenty becomes a list that no one wants to read all the way through.",
      "Some are real defects. Some are configuration gaps. Some are edge cases that were never tested. Some are things that worked before, but do not anymore.",
      "Hypercare stretches. Week two becomes week four. Week four quietly turns into something open ended."
    ],
    wrong: [
      "The timeline was fixed, but reality was not.",
      "The assumption was that the system would be mostly stable at launch with only minor issues remaining.",
      "There was no meaningful transition strategy between Professional Services, Support, and Customer Success.",
      "Professional Services slowly became permanent support."
    ],
    different: [
      "Define transition as a phase, not a moment.",
      "Adjust timelines based on complexity, client size, integrations, and issue volume.",
      "Use data to define readiness instead of transitioning based on time alone.",
      "Create overlap where Support and Customer Success ramp up while Professional Services is still actively involved in troubleshooting."
    ],
    notes: [
      "Hypercare always looks shorter on paper than it does in practice.",
      "Early warning sign: ticket volume increases after go live instead of stabilizing.",
      "A clean handoff is not about timing. It is about readiness."
    ],
    takeaway:
      "If transition is based on a date instead of readiness, Professional Services does not exit. It just slowly becomes support."
  }
};

function renderHomePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">MCUPMAN • personal and professional</p>
          <h1>
            Lessons from the field.
            <span class="muted">Life outside the work.</span>
          </h1>
          <p class="hero-subhead">
            A 50/50 mix of execution lessons, personal perspective, records, travel, outdoor moments, and the stories that shape how I think about work and life.
          </p>
          <div class="button-row">
            <a class="btn btn-primary" href="#articles">Read Articles</a>
            <a class="btn btn-secondary" href="#about">About Mike</a>
          </div>
        </div>

        <div class="hero-brand-panel reveal">
          <div class="hero-brand-top">
            <div class="hero-brand-logo">MU</div>
            <div>
              <p class="eyebrow">Brand mark</p>
              <h2>Make the logo part of the site, not an afterthought.</h2>
            </div>
          </div>
          <p class="hero-brand-copy">
            The identity should feel more like a stamp on a journal than a tiny decorative icon in the corner.
          </p>
        </div>
      </div>
    </section>

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Personal</p>
              <h3 class="photo-card-title">Records and a nightcap</h3>
              <p class="photo-card-text">Slow it down. Put something good on. Let the noise fall off for a minute.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">New places and better stories</h3>
              <p class="photo-card-text">Part of the fun is the food. The other part is everything that happens around it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Golf, hiking, and outside air</h3>
              <p class="photo-card-text">A reminder that not every good hour needs a screen attached to it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Perspective</p>
              <h3 class="photo-card-title">Life away from the laptop</h3>
              <p class="photo-card-text">The personal side should feel as intentional as the professional one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="articles" class="section">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">From the field</p>
            <h2 class="section-title">Articles and lessons learned</h2>
          </div>
          <a class="section-header-link" href="#about">See the personal side</a>
        </div>

        <div class="article-grid">
          <article class="article-card reveal">
            <p class="article-category">Leadership</p>
            <h3>The Meeting That Should Have Been an Email</h3>
            <p class="article-excerpt">A breakdown of how unclear ownership and undefined outcomes turn meetings into delay.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="meeting">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Execution</p>
            <h3>Try It Now</h3>
            <p class="article-excerpt">Why quick fixes without tracking and root cause lead to the same problems showing up again.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="try-it-now">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Post Launch</p>
            <h3>Full Steam</h3>
            <p class="article-excerpt">How unrealistic hypercare timelines turn Professional Services into long term support.</p>
            <p class="article-meta">5 min read</p>
            <button class="article-link" data-article="full-steam">Read Article</button>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="section">
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
          <p>
            I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.
          </p>
          <p>
            Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, hiking, and the parts of life that matter more than another calendar invite.
          </p>
          <p>
            This should feel less like a basic professional profile and more like a modern personal journal with a point of view.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <div class="contact-panel reveal">
          <p class="eyebrow">Contact</p>
          <h2>Say hello or send a story.</h2>
          <p>
            This should feel personal, approachable, and a little more like the end of a magazine feature than a corporate footer.
          </p>
          <div class="button-row">
            <a class="btn btn-primary" href="mailto:hello@mcupman.com">Email Mike</a>
            <a class="btn btn-secondary" href="#articles">Read Articles</a>
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
        ${article.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>

      <section class="article-block">
        <h2>What went wrong</h2>
        <ul>
          ${article.wrong.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="article-block">
        <h2>What could have been done differently</h2>
        <ul>
          ${article.different.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="article-block field-notes">
        <h2>Field Notes</h2>
        <ul>
          ${article.notes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="takeaway-box">
        <p class="box-label">One Line Takeaway</p>
        <p>${article.takeaway}</p>
      </section>
    </article>
  `;
}

function openArticle(articleKey) {
  const article = articles[articleKey];
  if (!article) return;

  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = renderArticle(article);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeArticle() {
  const modal = document.getElementById("article-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindArticleButtons() {
  document.querySelectorAll(".article-link").forEach((button) => {
    button.addEventListener("click", () => {
      openArticle(button.dataset.article);
    });
  });
}

function bindRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function router() {
  const app = document.getElementById("app");
  app.innerHTML = renderHomePage();
  bindArticleButtons();
  bindRevealAnimation();
}

document.getElementById("modal-close").addEventListener("click", closeArticle);
document.getElementById("modal-overlay").addEventListener("click", closeArticle);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeArticle();
});

window.addEventListener("hashchange", router);
router();      "Try it now is one of the most dangerous phrases in a delivery cycle.",
      "Early warning sign: fixes happening in chat instead of in the system.",
      "Recurring issues are rarely new problems. They are old problems that were never documented."
    ],
    takeaway:
      "If the fix is not tracked, explained, and documented, it is not a fix. It is a temporary reset waiting to fail again."
  },

  "full-steam": {
    category: "Post Launch",
    readTime: "5 min read",
    title: "Full Steam",
    lyric: "I’m gonna keep it going, keep it going full steam",
    artist: "Lyric reference",
    intro:
      "Every launch comes with a plan. There is a go live date, a support model, and a clean assumption that Professional Services will stay engaged for two to three weeks post launch.",
    story: [
      "Just enough time to stabilize. Just enough time to resolve minor issues. Just enough time to hand things off cleanly. That is the plan.",
      "It almost never works that way.",
      "The system goes live. At first, things look manageable. Then the tickets start. One becomes five. Five becomes twenty. Twenty becomes a list that no one wants to read all the way through.",
      "Some are real defects. Some are configuration gaps. Some are edge cases that were never tested. Some are things that worked before, but do not anymore.",
      "Hypercare stretches. Week two becomes week four. Week four quietly turns into something open ended."
    ],
    wrong: [
      "The timeline was fixed, but reality was not.",
      "The assumption was that the system would be mostly stable at launch with only minor issues remaining.",
      "There was no meaningful transition strategy between Professional Services, Support, and Customer Success.",
      "Professional Services slowly became permanent support."
    ],
    different: [
      "Define transition as a phase, not a moment.",
      "Adjust timelines based on complexity, client size, integrations, and issue volume.",
      "Use data to define readiness instead of transitioning based on time alone.",
      "Create overlap where Support and Customer Success ramp up while Professional Services is still actively involved in troubleshooting."
    ],
    notes: [
      "Hypercare always looks shorter on paper than it does in practice.",
      "Early warning sign: ticket volume increases after go live instead of stabilizing.",
      "A clean handoff is not about timing. It is about readiness."
    ],
    takeaway:
      "If transition is based on a date instead of readiness, Professional Services does not exit. It just slowly becomes support."
  }
};

function renderHomePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">MCUPMAN • personal and professional</p>
          <h1>
            Lessons from the field.
            <span class="muted">Life outside the work.</span>
          </h1>
          <p class="hero-subhead">
            A 50/50 mix of execution lessons, personal perspective, records, travel, outdoor moments, and the stories that shape how I think about work and life.
          </p>
          <div class="button-row">
            <a class="btn btn-primary" href="#articles">Read Articles</a>
            <a class="btn btn-secondary" href="#about">About Mike</a>
          </div>
        </div>

        <div class="hero-brand-panel reveal">
          <div class="hero-brand-top">
            <div class="hero-brand-logo">MU</div>
            <div>
              <p class="eyebrow">Brand mark</p>
              <h2>Make the logo part of the site, not an afterthought.</h2>
            </div>
          </div>
          <p class="hero-brand-copy">
            The identity should feel more like a stamp on a journal than a tiny decorative icon in the corner.
          </p>
        </div>
      </div>
    </section>

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Personal</p>
              <h3 class="photo-card-title">Records and a nightcap</h3>
              <p class="photo-card-text">Slow it down. Put something good on. Let the noise fall off for a minute.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">New places and better stories</h3>
              <p class="photo-card-text">Part of the fun is the food. The other part is everything that happens around it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Golf, hiking, and outside air</h3>
              <p class="photo-card-text">A reminder that not every good hour needs a screen attached to it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <div class="photo-card-content">
              <p class="photo-card-label">Perspective</p>
              <h3 class="photo-card-title">Life away from the laptop</h3>
              <p class="photo-card-text">The personal side should feel as intentional as the professional one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="articles" class="section">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">From the field</p>
            <h2 class="section-title">Articles and lessons learned</h2>
          </div>
          <a class="section-header-link" href="#about">See the personal side</a>
        </div>

        <div class="article-grid">
          <article class="article-card reveal">
            <p class="article-category">Leadership</p>
            <h3>The Meeting That Should Have Been an Email</h3>
            <p class="article-excerpt">A breakdown of how unclear ownership and undefined outcomes turn meetings into delay.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="meeting">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Execution</p>
            <h3>Try It Now</h3>
            <p class="article-excerpt">Why quick fixes without tracking and root cause lead to the same problems showing up again.</p>
            <p class="article-meta">4 min read</p>
            <button class="article-link" data-article="try-it-now">Read Article</button>
          </article>

          <article class="article-card reveal">
            <p class="article-category">Post Launch</p>
            <h3>Full Steam</h3>
            <p class="article-excerpt">How unrealistic hypercare timelines turn Professional Services into long term support.</p>
            <p class="article-meta">5 min read</p>
            <button class="article-link" data-article="full-steam">Read Article</button>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="section">
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
          <p>
            I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function in the real world.
          </p>
          <p>
            Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, hiking, and the parts of life that matter more than another calendar invite.
          </p>
          <p>
            This should feel less like a basic professional profile and more like a modern personal journal with a point of view.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <div class="contact-panel reveal">
          <p class="eyebrow">Contact</p>
          <h2>Say hello or send a story.</h2>
          <p>
            This should feel personal, approachable, and a little more like the end of a magazine feature than a corporate footer.
          </p>
          <div class="button-row">
            <a class="btn btn-primary" href="mailto:hello@mcupman.com">Email Mike</a>
            <a class="btn btn-secondary" href="#articles">Read Articles</a>
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
        ${article.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>

      <section class="article-block">
        <h2>What went wrong</h2>
        <ul>
          ${article.wrong.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="article-block">
        <h2>What could have been done differently</h2>
        <ul>
          ${article.different.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="article-block field-notes">
        <h2>Field Notes</h2>
        <ul>
          ${article.notes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="takeaway-box">
        <p class="box-label">One Line Takeaway</p>
        <p>${article.takeaway}</p>
      </section>
    </article>
  `;
}

function openArticle(articleKey) {
  const article = articles[articleKey];
  if (!article) return;

  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = renderArticle(article);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeArticle() {
  const modal = document.getElementById("article-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindArticleButtons() {
  document.querySelectorAll(".article-link").forEach((button) => {
    button.addEventListener("click", () => {
      openArticle(button.dataset.article);
    });
  });
}

function bindRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function router() {
  const app = document.getElementById("app");
  app.innerHTML = renderHomePage();
  bindArticleButtons();
  bindRevealAnimation();
}

document.getElementById("modal-close").addEventListener("click", closeArticle);
document.getElementById("modal-overlay").addEventListener("click", closeArticle);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeArticle();
});

window.addEventListener("hashchange", router);
router();      <p>Hypercare always lasts longer than planned.</p>

      <div class="takeaway">
        If transition is based on a date, it will fail.
      </div>
    `
  }
];

function router() {
  const app = document.getElementById("app");
  const hash = window.location.hash.replace("#/", "");

  if (hash.startsWith("article/")) {
    const slug = hash.replace("article/", "");
    const article = articles.find(a => a.slug === slug);

    app.innerHTML = `
      <div class="article">
        <a href="#/articles">← Back</a>
        <h1>${article.title}</h1>
        <p class="quote">"${article.quote}" — ${article.artist}</p>
        ${article.content}
      </div>
    `;
    return;
  }

  if (hash === "articles") {
    app.innerHTML = `
      <h1>Articles</h1>
      ${articles.map(a => `
        <div class="card">
          <h3>${a.title}</h3>
          <a href="#/article/${a.slug}">Read</a>
        </div>
      `).join("")}
    `;
    return;
  }

  // homepage
  app.innerHTML = `
    <h1>Lessons from the field, not the textbook.</h1>
    <p>I work at the intersection of operations, technology, and execution.</p>

    <a class="button" href="#/articles">Read Articles</a>
  `;
}

window.addEventListener("hashchange", router);
router();
