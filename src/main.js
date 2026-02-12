import "./styles.css";
import { initHeroParallax } from "./sections/hero.js";
import { initRevealAnimations, initPinnedStory } from "./sections/scroll.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="#top">Charles Hummel</a>
      <nav class="links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="parallax-hero" id="top">
    <div class="parallax-layer layer-back"></div>
    <div class="parallax-layer layer-mid"></div>
    <div class="parallax-layer layer-front"></div>

    <div class="hero-content">
      <p class="kicker">Software Engineer • Gameplay Programmer</p>
      <h1>Charles Hummel</h1>
      <p class="muted hero-sub">
        I build performant systems, gameplay, and tools — and I ship.
      </p>

      <div class="cta">
        <a class="btn" href="#projects">View Projects</a>
        <a class="btn btn-ghost" href="#contact">Contact</a>
      </div>

      <div class="hero-stats">
        <div class="stat card-mini">
          <div class="stat-num">7+</div>
          <div class="stat-label">Years coding</div>
        </div>
        <div class="stat card-mini">
          <div class="stat-num">4</div>
          <div class="stat-label">Roblox games</div>
        </div>
        <div class="stat card-mini">
          <div class="stat-num">1</div>
          <div class="stat-label">Steam release</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PINNED / CINEMATIC STORY SECTION -->
  <section class="pinned" id="story">
    <div class="pinned-bg">
      <div class="bg bg-1 is-active"></div>
      <div class="bg bg-2"></div>
      <div class="bg bg-3"></div>
    </div>

    <div class="pinned-steps container">
      <article class="step is-active" data-bg="1">
        <h2>Systems + Gameplay</h2>
        <p class="muted">
          Tight gameplay loops, clean architecture, and performance-first thinking.
        </p>
      </article>

      <article class="step" data-bg="2">
        <h2>Tools + Pipelines</h2>
        <p class="muted">
          Debugging, build workflows, automation — everything that makes teams faster.
        </p>
      </article>

      <article class="step" data-bg="3">
        <h2>Polish + Shipping</h2>
        <p class="muted">
          I like finishing: feel, UI, iteration, and production-ready results.
        </p>
      </article>
    </div>
  </section>

  <main>
    <section id="projects" class="section">
      <div class="container">
        <h2 class="reveal">Projects</h2>
        <p class="muted reveal">A few things I've shipped or am actively building.</p>

        <div class="grid">
          <article class="card project reveal">
            <h3>chRayTracer</h3>
            <p class="muted">Open-source ray tracer to deepen my graphics pipeline knowledge.</p>
            <div class="tags">
              <span>C++</span><span>OpenGL</span><span>Graphics</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/mnsb223" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>

          <article class="card project reveal">
            <h3>Gnome Expedition</h3>
            <p class="muted">Steam release built to learn Unreal Engine and ship a full game.</p>
            <div class="tags">
              <span>C++</span><span>Blueprint</span><span>Unreal Engine</span>
            </div>
            <div class="project-links">
              <a href="https://store.steampowered.com/app/3136930/Gnome_Expedition/" target="_blank" rel="noreferrer">Steam</a>
            </div>
          </article>

          <article class="card project reveal">
            <h3>Do Nothing, Get Rich!</h3>
            <p class="muted">Roblox game built for fun while learning Roblox Studio and DataStores.</p>
            <div class="tags">
              <span>Luau</span><span>Roblox Studio</span><span>DataStores</span>
            </div>
            <div class="project-links">
              <a href="https://www.roblox.com/games/136258889896405/Do-Nothing-Get-Rich" target="_blank" rel="noreferrer">Roblox</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <h2 class="reveal">About</h2>
        <div class="card reveal">
          <p>
            I build projects I enjoy and take the time to ship things I’m proud of.
            If I don’t know something, I learn it fast and apply it.
          </p>

          <h3>Skills</h3>
          <div class="tags">
            <span>C++</span><span>C#</span><span>Python</span><span>Unity</span><span>Unreal</span>
            <span>Git</span><span>Networking</span><span>Web</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <h2 class="reveal">Contact</h2>
        <div class="card reveal">
          <p>Email: <a href="mailto:charles.hummel07@gmail.com">charles.hummel07@gmail.com</a></p>
          <p class="muted">
            <a href="https://github.com/mnsb223" target="_blank" rel="noreferrer">GitHub</a>
            · <a href="https://www.linkedin.com/in/charles-hummel-7010a9372/" target="_blank" rel="noreferrer">LinkedIn</a>
            · <a href="https://steamcommunity.com/id/mnsb223" target="_blank" rel="noreferrer">Steam</a>
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p class="muted">© <span id="year"></span> Charles Hummel</p>
    </div>
  </footer>
`;

document.getElementById("year").textContent = new Date().getFullYear();

// Animations
initHeroParallax();
initPinnedStory();
initRevealAnimations();
