const articles = {
  meeting: {
    category: "Leadership",
    readTime: "4 min read",
    title: "The Meeting That Should Have Been an Email",
    lyric: "You say you want a revolution… well, you know",
    artist: "The Beatles",
    intro:
      "It started like most bad meetings do. No agenda. Too many people. Just enough urgency to make everyone believe it had to happen.",
    story: [
      "The invite said quick sync, which is usually the first sign something is about to take longer than it should and accomplish less than expected.",
      "By minute ten, the updates began. Not decisions. Not alignment. Just updates.",
      "By minute twenty, the conversation drifted. Someone raised a new concern. Another added context. Another tried to connect it to something from last week that nobody fully remembered.",
      "By minute thirty, the room was active. It felt productive. It was not."
    ],
    wrong: [
      "No one owned the meeting in a real sense.",
      "There was no defined purpose.",
      "Too many perspectives without structure created noise instead of clarity.",
      "The meeting existed because writing felt harder."
    ],
    different: [
      "Start with the outcome before the meeting is even scheduled.",
      "Reduce the room to only the people required to decide, approve, or execute.",
      "Send context ahead of time so the meeting can be used for direction, not discovery.",
      "If it can be written clearly, it should not be a meeting."
    ],
    notes: [
      "This pattern shows up when visibility is mistaken for progress.",
      "Early warning sign: quick sync with no agenda.",
      "Meetings without ownership do not fail loudly. They fail quietly by consuming time and producing nothing."
    ],
    takeaway:
      "If a meeting has no owner and no defined outcome, it is not alignment. It is delay with calendar invites."
  },

  "try-it-now": {
    category: "Execution",
    readTime: "4 min read",
    title: "Try It Now",
    lyric: "Is there gas in the car? Yes, there’s gas in the car",
    artist: "Steely Dan",
    intro:
      "A feature gets deployed. A fix is pushed. Something simple is ready to be tested. You try it. It does not work.",
    story: [
      "So you do what most people do. You send a quick message, make a call, or reach out directly because it feels like the fastest path.",
      "A few minutes later, the response comes back: Try it now.",
      "You test again. This time it works. That should feel like progress, but it is not.",
      "No one explained what was wrong. No one documented what changed. No one captured why it broke in the first place. The only thing that happened was the symptom disappeared.",
      "The right move was to create a bug ticket so the issue could be tracked, tied to a release, and understood later. Instead, the easy path won."
    ],
    wrong: [
      "The process was bypassed in favor of speed.",
      "There was no documented root cause.",
      "There was no ticket, no history, and no pattern tracking.",
      "The symptom disappeared, but the problem was never really fixed."
    ],
    different: [
      "Create the ticket anyway, even if the issue gets fixed quickly.",
      "Require visibility for every fix: what changed, what was wrong, and whether it is a one off or a pattern.",
      "Use the system of record, not chat, as the source of truth.",
      "Slow down just enough to avoid repeating the same issue later."
    ],
    notes: [
      "Try it now is one of the most dangerous phrases in a delivery cycle.",
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

function renderHomePage() {
  return `
    <section class="hero">
      <div class="hero-logo-watermark">
        <img src="images/logo.png" alt="" aria-hidden="true" />
      </div>

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
          <div class="hero-brand-center">
            <img src="images/logo.png" alt="MCUPMAN logo" class="hero-logo-main" />
          </div>
        </div>
      </div>
    </section>

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <img src="images/records.jpg" alt="Records and music" />
            <div class="photo-card-content">
              <p class="photo-card-label">Personal</p>
              <h3 class="photo-card-title">Records and a nightcap</h3>
              <p class="photo-card-text">Slow it down. Put something good on. Let the noise fall off for a minute.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/travel.jpg" alt="Travel and new places" />
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">New places and better stories</h3>
              <p class="photo-card-text">Part of the fun is the food. The other part is everything that happens around it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/outdoors.jpg" alt="Golf hiking and outdoors" />
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Golf, hiking, and outside air</h3>
              <p class="photo-card-text">A reminder that not every good hour needs a screen attached to it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
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
            <img src="images/records.jpg" alt="Records and music" />
            <div class="photo-card-content">
              <p class="photo-card-label">Records</p>
              <h3 class="photo-card-title">A slower pace</h3>
              <p class="photo-card-text">Good albums, better evenings, and room to think.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/travel.jpg" alt="Travel and exploration" />
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">A wider view</h3>
              <p class="photo-card-text">Different places tend to sharpen perspective.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/outdoors.jpg" alt="Outdoors and golf" />
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Step away from the noise</h3>
              <p class="photo-card-text">Golf, hiking, movement, and being outside helps reset everything.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/life.jpg" alt="Life outside of work" />
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

  setActiveNav(route);
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
        
    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <img src="images/records.jpg" alt="Records and music" />
            <div class="photo-card-content">
              <p class="photo-card-label">Personal</p>
              <h3 class="photo-card-title">Records and a nightcap</h3>
              <p class="photo-card-text">Slow it down. Put something good on. Let the noise fall off for a minute.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/travel.jpg" alt="Travel and new places" />
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">New places and better stories</h3>
              <p class="photo-card-text">Part of the fun is the food. The other part is everything that happens around it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/outdoors.jpg" alt="Golf hiking and outdoors" />
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Golf, hiking, and outside air</h3>
              <p class="photo-card-text">A reminder that not every good hour needs a screen attached to it.</p>
            </div>
          </div>

          <div class="photo-card reveal">
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

<div class="hero-brand-panel reveal">
  <div class="hero-brand-center">
    <img src="images/logo.png" alt="MCUPMAN logo" class="hero-logo-main" />
  </div>
</div>

    <section class="section photo-strip">
      <div class="container">
        <div class="photo-grid">
          <div class="photo-card reveal">
            <img src="images/records.jpg" alt="Records and music" />
            <div class="photo-card-content">
              <p class="photo-card-label">Records</p>
              <h3 class="photo-card-title">A slower pace</h3>
              <p class="photo-card-text">Good albums, better evenings, and room to think.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/travel.jpg" alt="Travel and exploration" />
            <div class="photo-card-content">
              <p class="photo-card-label">Travel</p>
              <h3 class="photo-card-title">A wider view</h3>
              <p class="photo-card-text">Different places tend to sharpen perspective.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/outdoors.jpg" alt="Outdoors and golf" />
            <div class="photo-card-content">
              <p class="photo-card-label">Outdoors</p>
              <h3 class="photo-card-title">Step away from the noise</h3>
              <p class="photo-card-text">Golf, hiking, movement, and being outside helps reset everything.</p>
            </div>
          </div>

          <div class="photo-card reveal">
            <img src="images/life.jpg" alt="Life outside of work" />
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
router();
