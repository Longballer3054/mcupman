/**
 * MCUPMAN website router and content script
 */

const SITE = {
  name: "MCUPMAN",
  email: "hello@mcupman.com"
};

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
  },

  burnout: {
    slug: "burnout",
    category: "Leadership",
    readTime: "5 min read",
    title: "Burnout Does Not Always Look Like Collapse",
    intro: "Sometimes burnout does not show up as a breakdown. Sometimes it shows up as going quiet.",
    takeaway:
      "Burnout often begins long before performance drops. It starts when clarity, energy, and care begin to fade.",
    featured: false,
    body: `
      <p>Most people imagine burnout as something obvious. A hard stop. A visible crash. A person who simply cannot keep going.</p>
      <p>But that is not always how it starts. In many cases, burnout arrives much earlier and much quieter.</p>
      <p>It can look like someone still doing the work, still showing up to meetings, still answering messages, still hitting deadlines. From the outside, everything may appear fine.</p>
      <p>But inside, something has shifted. The energy is flatter. The patience is thinner. The pride in the work starts to fade. What once felt engaging now feels heavy.</p>

      <h2>Why it gets missed</h2>
      <p>Burnout is often missed because responsibility can mask it. High performers are especially good at carrying too much for too long. They know how to compensate. They know how to keep things moving. They know how to avoid becoming the problem.</p>
      <p>That is exactly why leaders need to pay attention before the obvious signals appear. By the time quality drops or a person disengages publicly, the problem has usually been building for a while.</p>

      <h2>What it often looks like first</h2>
      <p>It looks like shorter answers. Less curiosity. Less follow through on things that used to matter deeply. It can show up as frustration, detachment, or just a steady loss of sharpness.</p>
      <p>It is not always about workload alone. Burnout can come from unclear priorities, constant context switching, low trust, repeated rework, or the feeling that effort is no longer connected to meaningful progress.</p>

      <h2>What leaders should do</h2>
      <p>Do not wait for collapse. Create room for honest conversations before things get critical. Clarify priorities. Remove unnecessary noise. Help people understand what matters now and what can wait.</p>
      <p>And most importantly, do not confuse availability with capacity. Just because someone keeps delivering does not mean the current pace is sustainable.</p>

      <h2>Field Notes</h2>
      <p>Burnout rarely begins with a dramatic moment. More often, it starts with a slow disconnect between effort and meaning. Good leaders learn to notice the quieter signals early.</p>
    `
  },

  ownership: {
    slug: "ownership",
    category: "Leadership",
    readTime: "4 min read",
    title: "Ownership Is Not the Same as Doing Everything",
    intro: "Strong ownership does not mean carrying every problem alone.",
    takeaway:
      "Ownership means driving the outcome, not becoming the bottleneck.",
    featured: false,
    body: `
      <p>Ownership is one of those words people like to use because it sounds strong, clear, and responsible. But in practice, it gets misunderstood all the time.</p>
      <p>Some people hear ownership and think it means doing everything themselves. Taking every action. Responding to every question. Carrying the entire problem until it is resolved.</p>
      <p>That is not ownership. That is overload with a better label.</p>

      <h2>What ownership actually means</h2>
      <p>Real ownership means the outcome has a clear home. Someone is accountable for direction, follow through, escalation, and closure. That person may not do every task, but they make sure the work moves and the gaps do not stay hidden.</p>
      <p>Ownership creates clarity. Everyone knows who is tracking the issue, who is coordinating the next move, and who will speak if progress stalls.</p>

      <h2>Where teams get stuck</h2>
      <p>Teams struggle when ownership gets confused with heroics. One person starts picking up every loose end. They answer every message, attend every meeting, and chase every dependency. At first it looks helpful. Over time it creates fragility.</p>
      <p>The team begins to rely on one person instead of a process. Decision making slows because everything routes through the same person. The result is not better control. It is a hidden bottleneck.</p>

      <h2>How to lead with ownership</h2>
      <p>Define who owns the outcome. Clarify who supports it. Decide what must be escalated and when. Give people room to execute without giving up accountability.</p>
      <p>Ownership works best when it is visible, shared correctly, and supported by a system that does not depend on one person holding everything together.</p>

      <h2>Field Notes</h2>
      <p>The strongest operators are not the ones who carry every problem alone. They are the ones who create enough clarity that the work keeps moving without confusion.</p>
    `
  },

  clarity: {
    slug: "clarity",
    category: "Execution",
    readTime: "4 min read",
    title: "Clarity Solves More Problems Than Speed",
    intro: "A fast team with low clarity usually just makes mistakes quicker.",
    takeaway:
      "When priorities, ownership, and next steps are clear, execution improves naturally.",
    featured: false,
    body: `
      <p>When a team feels pressure, the first instinct is usually to move faster. Respond faster. Meet faster. Push harder. Add urgency to everything.</p>
      <p>Sometimes speed helps. But in many cases, the real problem is not pace. It is a lack of clarity.</p>
      <p>If people are unclear on priority, responsibility, or the actual decision being made, moving faster just creates more noise. Work gets repeated. Messages get crossed. Meetings multiply. Everyone stays busy and little gets cleaner.</p>

      <h2>Why clarity matters</h2>
      <p>Clarity reduces friction. It tells people what matters now, what can wait, who owns what, and what success looks like. It lowers the cost of coordination.</p>
      <p>Without clarity, even strong teams drift. Good people start solving different versions of the same problem. Progress becomes harder to measure because the target keeps moving.</p>

      <h2>What clarity looks like</h2>
      <p>Clear priorities. Clear roles. Clear handoffs. Clear decisions written down in a way people can return to later. Not perfect detail. Just enough structure that the team can move without guessing.</p>
      <p>Clarity is not bureaucracy. It is what allows a team to move with confidence instead of constant interpretation.</p>

      <h2>What leaders should reinforce</h2>
      <p>Before asking a team to move faster, make sure they understand the actual problem. Confirm what matters most. Narrow the focus. Remove competing signals. State the next step in language that is hard to misunderstand.</p>
      <p>Speed becomes useful when the direction is stable. Until then, clarity creates more value than pressure.</p>

      <h2>Field Notes</h2>
      <p>Many execution issues look like pace problems from a distance. Up close, they are often clarity problems that were never cleaned up early enough.</p>
    `
  },

  momentum: {
    slug: "momentum",
    category: "Execution",
    readTime: "5 min read",
    title: "Momentum Comes From Progress You Can See",
    intro: "Teams stay energized when movement is visible, not when promises are repeated.",
    takeaway:
      "Momentum grows when people can see clear progress, even if the progress is incremental.",
    featured: false,
    body: `
      <p>Momentum is often talked about like it is emotional. A feeling. A vibe. Something a team either has or does not have.</p>
      <p>But in practice, momentum is usually much more concrete. It comes from visible progress.</p>
      <p>When people can see work moving, decisions getting made, blockers coming down, and outcomes getting closer, energy tends to rise. The team believes effort is leading somewhere. That belief matters.</p>

      <h2>Why momentum fades</h2>
      <p>Momentum fades when the same issues stay open too long, when priorities keep shifting, or when effort disappears into systems that never seem to close the loop. People begin to feel like movement is happening around them but not through them.</p>
      <p>That is when teams become flat. They still work, but with less conviction.</p>

      <h2>How to create it</h2>
      <p>Break large work into visible wins. Show what changed. Confirm what is complete. Make decisions explicit. Celebrate closed loops, not just activity.</p>
      <p>Momentum does not require dramatic breakthroughs. It often comes from small evidence that the work is advancing in a real way.</p>

      <h2>What leaders miss</h2>
      <p>Leaders sometimes try to create momentum with messaging alone. More encouragement. More urgency. More reminders about why the work matters. Those things can help, but they do not replace proof.</p>
      <p>People trust what they can see. A resolved issue, a delivered milestone, a cleaner process, a shorter list of unknowns. Progress creates credibility. Credibility creates energy.</p>

      <h2>Field Notes</h2>
      <p>Teams do not need constant hype. They need evidence that the work is moving. Once people can see progress, momentum becomes easier to sustain.</p>
    `
  },

  tryItNow: {
    slug: "try-it-now",
    category: "Execution",
    readTime: "4 min read",
    title: "TRY IT NOW",
    intro: "Sometimes the fastest way to build confidence is to stop circling the idea and test it in the real world.",
    takeaway:
      "Progress often starts when talk gives way to action and the team learns from something real.",
    featured: false,
    body: `
      <p>There is a point in almost every project where the conversation starts to loop. The same concerns come up. The same questions get asked. The same possibilities are discussed from slightly different angles.</p>
      <p>At that stage, more discussion does not always create more clarity. Sometimes the next best step is simple. Try it now.</p>
      <p>That does not mean being careless. It means moving from theory to evidence. It means putting a version of the idea in motion so the team can react to something real instead of debating something abstract.</p>

      <h2>Why this matters</h2>
      <p>Teams can lose a lot of time waiting for certainty that never comes. They want every answer before taking the first step. They want every edge case solved before testing the core idea.</p>
      <p>But real progress usually comes from interaction. A small pilot. A quick proof point. A limited release. A visible attempt that shows what works, what breaks, and what needs to change.</p>

      <h2>What TRY IT NOW really means</h2>
      <p>It means reducing the distance between idea and learning. It means choosing movement over endless review. It means understanding that action, when scoped correctly, can reveal more than another round of discussion.</p>
      <p>The key is discipline. Keep the test focused. Know what you are trying to learn. Make sure the risk is understood. Then move.</p>

      <h2>Where teams get stuck</h2>
      <p>They get stuck when caution becomes culture. When every next step requires too much alignment. When people are more comfortable sounding thoughtful than being exposed to a real result.</p>
      <p>That kind of environment creates delay disguised as diligence. Work feels active, but nothing meaningful changes.</p>

      <h2>Field Notes</h2>
      <p>TRY IT NOW is not about reckless action. It is about respecting the value of learning quickly. In the right moment, a small real step is worth more than another week of hypotheticals.</p>
    `
  }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return map[char] || char;
  });
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function getRoute() {
  const hash = window.location.hash || "#/";
  const route = hash.replace(/^#/, "").trim();
  return route ? (route.startsWith("/") ? route : `/${route}`) : "/";
}

function normalizeRoute(route) {
  if (!route) return "/";
  const cleaned = route.trim().replace(/\/+/g, "/");
  return cleaned || "/";
}

function getAllArticles() {
  return Object.values(ARTICLES);
}

function getArticleBySlug(slug) {
  return ARTICLES[slug] || null;
}

function getFeaturedArticle() {
  return getAllArticles().find((article) => article.featured) || getAllArticles()[0] || null;
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
  return `<img src="${safeSrc}" alt="${safeAlt}" loading="lazy"${safeClass}>`;
}

function articleCard(article) {
  return `
    <article class="card">
      <strong>${escapeHtml(article.title)}</strong>
      <p>${escapeHtml(article.takeaway)}</p>
      <p class="muted">${escapeHtml(article.readTime)}</p>
      <div class="buttons">
        <a class="btn btn-primary" href="#/article/${encodeURIComponent(article.slug)}">Read Article</a>
      </div>
    </article>
  `;
}

function setActiveNav(route) {
  const navLinks = document.querySelectorAll(".site-nav a");
  const normalizedRoute = normalizeRoute(route);

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = (link.getAttribute("href") || "").replace(/^#/, "") || "/";
    const normalizedHref = normalizeRoute(href);

    const isHome = normalizedHref === "/" && normalizedRoute === "/";
    const isExactMatch = normalizedHref === normalizedRoute;
    const isArticleSection =
      normalizedHref === "/articles" && normalizedRoute.startsWith("/article/");

    if (isHome || isExactMatch || isArticleSection) {
      link.classList.add("active");
    }
  });
}

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
    <section class="hero-grid">
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
    </section>

    <div class="spacer"></div>

    <section class="photo-grid">
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
    </section>

    <div class="spacer"></div>

    ${featuredSection}
  `);
}

function articlesPage() {
  const cards = getAllArticles().map(articleCard).join("");

  return layout(`
    <section>
      <h1>Articles</h1>
      <div class="cards">
        ${cards}
      </div>
    </section>
  `);
}

function articlePage(slug) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return notFoundPage("Article not found", "The article you selected could not be found.");
  }

  return layout(`
    <p class="eyebrow">${escapeHtml(article.category)}</p>
    <h1>${escapeHtml(article.title)}</h1>
    <p class="muted">${escapeHtml(article.readTime)}</p>

    <div class="buttons">
      <a class="btn btn-secondary" href="#/articles">Back to Articles</a>
    </div>

    <div class="spacer"></div>

    <article class="article-content card">
      ${article.body}
      <hr>
      <p><strong>One line takeaway:</strong> ${escapeHtml(article.takeaway)}</p>
    </article>
  `, "article-view");
}

function aboutPage() {
  return layout(`
    <section class="two-col">
      <div>
        <p class="eyebrow">About</p>
        <h1>Operator by trade.<br><span class="muted">Human outside of it.</span></h1>
      </div>
      <div>
        <p>I work at the intersection of operations, technology, and execution, helping companies turn complex ideas into systems that actually function.</p>
        <p>Outside of work, I like to slow things down. Records, travel, a drink at the end of the day, golf, and hiking.</p>
      </div>
    </section>
  `);
}

function contactPage() {
  const safeEmail = escapeAttribute(SITE.email);

  return layout(`
    <section class="contact-box">
      <p class="eyebrow">Contact</p>
      <h1>Say hello or send a story.</h1>
      <p>Reach out at the link below.</p>
      <div class="buttons">
        <a class="btn btn-primary" href="mailto:${safeEmail}">Email Mike</a>
      </div>
    </section>
  `);
}

function notFoundPage(
  title = "Page not found",
  message = "The page you requested does not exist."
) {
  return layout(`
    <section>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <div class="buttons">
        <a class="btn btn-primary" href="#/">Go Home</a>
      </div>
    </section>
  `);
}

function renderRoute(rawRoute) {
  const route = normalizeRoute(rawRoute);

  if (route === "/") return homePage();
  if (route === "/articles") return articlesPage();
  if (route === "/about") return aboutPage();
  if (route === "/contact") return contactPage();

  if (route.startsWith("/article/")) {
    const parts = route.split("/");
    const slug = decodeURIComponent(parts[2] || "");

    if (!slug || parts.length > 3) {
      return notFoundPage();
    }

    return articlePage(slug);
  }

  return notFoundPage();
}

function router() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("App root #app was not found.");
    return;
  }

  try {
    const route = getRoute();
    app.innerHTML = renderRoute(route);
    setActiveNav(route);
    window.scrollTo(0, 0);
  } catch (error) {
    console.error("Router error:", error);
    app.innerHTML = notFoundPage(
      "Something went wrong",
      "The page could not be rendered."
    );
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
