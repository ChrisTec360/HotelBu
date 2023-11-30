window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btnIrArriba = document.getElementById("btnIrArriba");

    // Mostrar el botón cuando el usuario ha bajado 20px desde la parte superior de la página
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnIrArriba.style.display = "block";
    } else {
        btnIrArriba.style.display = "none";
    }
}

function irArriba() {
    // Desplazarse suavemente hacia arriba cuando se hace clic en el botón
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}