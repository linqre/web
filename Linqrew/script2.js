const urls = {
  offsets: "https://raw.githubusercontent.com/virtualtable/coredumps/refs/heads/main/offsets.json",
  shuffles: "https://raw.githubusercontent.com/virtualtable/coredumps/refs/heads/main/shuffles.cpp",
  encs: "https://raw.githubusercontent.com/virtualtable/coredumps/refs/heads/main/encs.cpp"
};

const output = document.getElementById("output");
const buttons = document.querySelectorAll(".tab-btn");
const copyBtn = document.getElementById("copyBtn");

function setActive(button) {
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

async function loadContent(type, button) {
  setActive(button);
  output.textContent = "Loading...";
  try {
    const response = await fetch(urls[type]);
    if (!response.ok) throw new Error("Failed to fetch");
    const text = await response.text();
    output.textContent = text;
  } catch (e) {
    output.textContent = "Failed to load content.";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => loadContent(btn.dataset.type, btn));
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.textContent).then(() => {
    alert("Copied to clipboard!");
  });
});
