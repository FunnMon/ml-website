// ====== Quick stats (edit these) ======
const stats = {
  hoursThisWeek: 6,
  lessonsDone: 8,
  streakDays: 4,
  progressPercent: 35
};

// Render stats
document.getElementById("hoursThisWeek").textContent = String(stats.hoursThisWeek);
document.getElementById("lessonsDone").textContent = String(stats.lessonsDone);
document.getElementById("streakDays").textContent = String(stats.streakDays);

function renderProgress() {
  const pct = Math.max(0, Math.min(100, stats.progressPercent));
  const fill = document.getElementById("progressFill");
  const text = document.getElementById("progressText");
  fill.style.width = `${pct}%`;
  fill.parentElement.setAttribute("aria-valuenow", String(pct));
  text.textContent = `${pct}% complete`;
}
renderProgress();

// +5% button
document.getElementById("bumpProgressBtn").addEventListener("click", () => {
  stats.progressPercent = Math.min(100, stats.progressPercent + 5);
  renderProgress();
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

// Add sample note
document.getElementById("addNoteBtn").addEventListener("click", () => {
  const feed = document.getElementById("noteFeed");
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="feed__title">Gradient descent checklist</span>
    <span class="feed__meta muted">Learning rate, normalization, convergence diagnostics</span>
  `;
  feed.prepend(li);
});

// Contact form (demo-only)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Thanks! (Demo form — connect this to Formspree/Netlify Forms later.)";
  e.target.reset();
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());
