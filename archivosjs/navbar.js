document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.style.background = "#333"; /* Cambia el color de fondo al hacer scroll */
        } else {
            navbar.style.background = "transparent";
        }
    };
});