// NAVBAR

const btn = document.querySelector(".navbar-toggler");
const icon = document.querySelector(".navbar-toggler-icon");

btn.addEventListener("click", () => {
  if (btn.classList.contains("collapsed")) {
    icon.style.backgroundImage = "url('assets/img/collapse.svg')";
    icon.style.transition = "0.3s";
  } else {
    icon.style.backgroundImage = "url('assets/img/close.svg')";
    icon.style.transition = "0.3s";
  }
});

// MENU PAGE (SEARCH)

const txtSearch = document.querySelector(".search-title");
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("focus", () => {
  txtSearch.classList.add("focus-input");
});

searchInput.addEventListener("blur", () => {
  txtSearch.classList.remove("focus-input");
});
