document.addEventListener("DOMContentLoaded", function () {
  console.log("Página y scripts cargados correctamente.");
    // Load Mermaid
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "assets/styles/extra.css";
  css.media = "print";
  css.onload = function () {
    this.media = "all";
  };
  document.head.appendChild(css);
});
