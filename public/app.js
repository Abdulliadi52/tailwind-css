const menu = document.getElementById("menu");
const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
