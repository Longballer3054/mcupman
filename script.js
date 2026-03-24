const articles = [
  {
    slug: "meeting",
    title: "The Meeting That Should Have Been an Email",
    quote: "You say you want a revolution… well, you know",
    artist: "The Beatles",
    content: `
      <p>It started like most bad meetings do. No agenda, too many people.</p>

      <h2>What went wrong</h2>
      <p>No ownership. No outcome. Too many voices.</p>

      <h2>What could have been done differently</h2>
      <p>Define outcome. Limit attendees. Send context ahead.</p>

      <h2>Field Notes</h2>
      <p>Quick sync with no agenda is always a warning sign.</p>

      <div class="takeaway">
        If a meeting has no owner and no defined outcome, it is delay.
      </div>
    `
  },
  {
    slug: "try-it-now",
    title: "Try It Now",
    quote: "Is there gas in the car? Yes, there’s gas in the car",
    artist: "Steely Dan",
    content: `
      <p>A feature gets deployed. You test it. It doesn’t work.</p>

      <p>You reach out. The response comes back: Try it now.</p>

      <h2>What went wrong</h2>
      <p>No tracking. No root cause. No documentation.</p>

      <h2>What could have been done differently</h2>
      <p>Create the ticket anyway. Require visibility for fixes.</p>

      <h2>Field Notes</h2>
      <p>Fixes in chat instead of systems create repeat problems.</p>

      <div class="takeaway">
        If the fix is not tracked, it is not a fix.
      </div>
    `
  },
  {
    slug: "full-steam",
    title: "Full Steam",
    quote: "I’m gonna keep it going full steam",
    artist: "",
    content: `
      <p>Every launch assumes 2–3 weeks of hypercare.</p>

      <p>It almost never works that way.</p>

      <h2>What went wrong</h2>
      <p>Timeline fixed. Reality not.</p>

      <h2>What could have been done differently</h2>
      <p>Define transition phases and readiness.</p>

      <h2>Field Notes</h2>
      <p>Hypercare always lasts longer than planned.</p>

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
