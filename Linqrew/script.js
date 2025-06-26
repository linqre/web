const loadingBar = document.getElementById("loading-bar");
let width = 0;
let loadingInterval;

function startLoading() {
  width = 0;
  loadingBar.style.width = "0%";
  loadingBar.style.opacity = "1";
  loadingInterval = setInterval(() => {
    if (width >= 90) {
      clearInterval(loadingInterval);
    } else {
      width += Math.random() * 10;
      if (width > 90) width = 90;
      loadingBar.style.width = width + "%";
    }
  }, 200);
}

function finishLoading() {
  loadingBar.style.width = "100%";
  setTimeout(() => {
    loadingBar.style.opacity = "0";
    loadingBar.style.width = "0%";
  }, 400);
}

window.addEventListener("load", () => {
  finishLoading();
  animateProgressBars();
});

startLoading();

function animateProgressBars() {
  const skills = [
    { id: "cpp", value: 18 },
    { id: "html", value: 53 },
    { id: "css", value: 62 },
    { id: "js", value: 42 },
    { id: "python", value: 35 },
    { id: "lua", value: 75 },
  ];

  skills.forEach(({ id, value }) => {
    const bar = document.getElementById(id);
    const text = document.getElementById(id + "-text");

    if (bar && text) {
      let current = 0;
      const step = Math.max(1, Math.floor(value / 20));
      const interval = setInterval(() => {
        if (current >= value) {
          bar.style.width = value + "%";
          text.textContent = value + "%";
          clearInterval(interval);
        } else {
          current += step;
          if (current > value) current = value;
          bar.style.width = current + "%";
          text.textContent = current + "%";
        }
      }, 50);
    }
  });
}

const discordBtn = document.getElementById("discord-btn");
const discordModal = document.getElementById("discord-modal");
const closeModal = document.getElementById("close-modal");
const copyButtons = document.querySelectorAll(".copy-btn");

discordBtn.addEventListener("click", () => {
  discordModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  discordModal.classList.add("hidden");
});

copyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const username = btn.getAttribute("data-username");
    navigator.clipboard.writeText(username);
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 1000);
  });
});
