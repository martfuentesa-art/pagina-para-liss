// =====================================
// CONTRASEÑA
// =====================================

const CONTRASENA = "24072026";

const passwordInput = document.getElementById("passwordInput");
const entrar = document.getElementById("entrar");
const errorPassword = document.getElementById("errorPassword");


// =====================================
// FUNCIÓN PARA CAMBIAR DE PÁGINA
// =====================================

function cambiarPagina(paginaActual, paginaNueva) {

    const actual = document.getElementById(paginaActual);
    const nueva = document.getElementById(paginaNueva);

    actual.classList.remove("activa");

    setTimeout(() => {

        nueva.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 300);
}


// =====================================
// CONTRASEÑA
// =====================================

entrar.addEventListener("click", function () {

    if (passwordInput.value === CONTRASENA) {

        errorPassword.textContent = "";

        cambiarPagina("passwordPage", "inicio");

    } else {

        errorPassword.textContent =
            "❌ Contraseña incorrecta. Inténtalo nuevamente.";

        passwordInput.value = "";

        passwordInput.focus();
    }

});


// Permitir presionar ENTER
passwordInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        entrar.click();
    }

});


// =====================================
// INICIO → HISTORIA
// =====================================

document.getElementById("comenzar").addEventListener("click", function () {

    cambiarPagina("inicio", "historia");

});


// =====================================
// HISTORIA → MOMENTOS
// =====================================

document.getElementById("fotos").addEventListener("click", function () {

    cambiarPagina("historia", "momentos");

});


// =====================================
// MOMENTOS → CARTA
// =====================================

document.getElementById("cartaBtn").addEventListener("click", function () {

    cambiarPagina("momentos", "carta");

});


// =====================================
// CARTA → SORPRESA
// =====================================

document.getElementById("sorpresa").addEventListener("click", function () {

    cambiarPagina("carta", "final");

});


// =====================================
// BOTONES "ATRÁS"
// =====================================

const botonesVolver = document.querySelectorAll(".volver");

botonesVolver.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const paginaAnterior = boton.dataset.anterior;

        const paginaActual =
            document.querySelector(".pagina.activa");

        cambiarPagina(
            paginaActual.id,
            paginaAnterior
        );

    });

});