const form = document.querySelector("#research-form");
const button = form?.querySelector("button[type='submit']");
const runState = document.querySelector("#run-state");
const tabButtons = document.querySelectorAll(".inspector-tabs button");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!button || !runState) return;
  button.disabled = true;
  button.innerHTML = "<span aria-hidden='true'>•••</span> Running preview";
  runState.classList.add("is-loading");
  runState.querySelector("span").textContent = "Validating request…";
  window.setTimeout(() => {
    button.disabled = false;
    button.innerHTML = "<span aria-hidden='true'>▶</span> Run preview";
    runState.classList.remove("is-loading");
    runState.querySelector("span").textContent = "Completed in 842 ms";
  }, 650);
});

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });
  });
});
