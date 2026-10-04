const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");

// Abre e fecha o menu
botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        botaoMenu.textContent = "✕";
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }

});


// Fecha o menu quando clicar em um link
linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

        botaoMenu.textContent = "☰";

        botaoMenu.setAttribute("aria-label", "Abrir menu");

    });

});

// =========================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =========================

const elementosAnimados = document.querySelectorAll(".animar");

const observador = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            
            entrada.target.classList.add("aparecer");
        }

    });

}, {
    threshold: 0.15
});

elementosAnimados.forEach(function (elemento) {
    observador.observe(elemento);
});

// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cardsAnimados = document.querySelectorAll(".animar-card");

const observadorCards = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
           entrada.target.classList.add("aparecer-card");
        }

    });

}, {
    threshold: 0.15
});

cardsAnimados.forEach(function (card) {
    observadorCards.observe(card);
});

// =========================
// CABEÇALHO AO ROLAR
// =========================

const cabecalho = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        cabecalho.classList.add("rolando");
    } else {
        cabecalho.classList.remove("rolando");
    }

});

// =========================
// DESTACAR SEÇÃO ATUAL NO MENU
// =========================

const secoes = document.querySelectorAll("section[id]");
const linksNavegacao = document.querySelectorAll(".menu a");

window.addEventListener("scroll", function () {

    let secaoAtual = "inicio";

    secoes.forEach(function (secao) {

        const topoSecao = secao.offsetTop - 150;
        const alturaSecao = secao.offsetHeight;

        if (
            window.scrollY >= topoSecao &&
            window.scrollY < topoSecao + alturaSecao
        ) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    linksNavegacao.forEach(function (link) {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.classList.add("ativo");
        }

    });

});