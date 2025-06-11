const nav = document.querySelector('nav');
const cardapioBtn = document.querySelector('.cardapio-btn');

cardapioBtn.addEventListener("click", function () {
    nav.classList.toggle("nav-aberto");
    nav.classList.toggle("nav-fechado");
});

// Fecha ao clicar fora do nav
document.addEventListener("click", function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnButton = cardapioBtn.contains(event.target);

    if (!isClickInsideNav && !isClickOnButton) {
        if (nav.classList.contains("nav-aberto")) {
            nav.classList.remove("nav-aberto");
            nav.classList.add("nav-fechado");
        }
    }
});
