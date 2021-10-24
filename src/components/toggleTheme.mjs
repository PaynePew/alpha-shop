const body = document.querySelector("body");

function toggleTheme() {
  const switchToTheme = body.classList.contains("theme-light")
    ? "theme-dark"
    : "theme-light";
  body.setAttribute("class", switchToTheme);
}

export default toggleTheme;
