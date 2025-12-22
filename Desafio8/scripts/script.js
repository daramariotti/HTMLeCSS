const botao = document.getElementById("botao-tema");
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem("tema");
temaEscuro(temasalvo === "escuro");

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add("escuro");
    // Altera o texto dentro do span para o ícone de sol do Material Symbols
    botao.innerHTML =
      '<span class="material-symbols-outlined"> light_mode </span>';
  } else {
    body.classList.remove("escuro");
    // Altera o texto dentro do span para o ícone de lua do Material Symbols
    botao.innerHTML =
      '<span class="material-symbols-outlined"> brightness_4 </span>';
  }
}

botao.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que o link '#' recarregue a página
  const isescuro = body.classList.toggle("escuro");
  temaEscuro(isescuro);
  localStorage.setItem("tema", isescuro ? "escuro" : "claro");
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll(".menu ul a.link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
