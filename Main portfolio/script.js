const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});



function toggleContactVisibility() {
  const show = document.getElementById("show");
  const contactSection = document.querySelector(".second");

  if (window.innerWidth <= 1200) {
    show.style.display = "inline-block";
    show.addEventListener("click", () => {
      contactSection.classList.toggle("hide");
      show.innerText = contactSection.classList.contains("hide") ? "Show Contact" : "Hide Contact";
    });
  } else {
    show.style.display = "none";
    contactSection.classList.remove("hide");
  }
}

window.addEventListener("load", toggleContactVisibility);
window.addEventListener("resize", toggleContactVisibility);

// Navigation button handlers
const sections = ["about", "resume", "project", "contact"];

function showSection(section) {
  sections.forEach(s => {
    const el = document.querySelector(`.${s}`);
    el.classList.add("hide");
  });
  const activeSection = document.querySelector(`.${section}`);
  activeSection.classList.remove("hide");
}

// Assign event listeners
sections.forEach(sec => {
  const btn = document.querySelector(`.${sec}Btn`);
  if (btn) {
    btn.addEventListener("click", () => showSection(sec));
  }
});


