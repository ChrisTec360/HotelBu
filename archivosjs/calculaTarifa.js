// script.js

document.addEventListener('DOMContentLoaded', function () {
    var nombreInput = document.getElementById('nombre');
    var habitacionInput = document.getElementById('habitacion');
    var entradaDateInput = document.getElementById('entradaDate');
    var salidaDateInput = document.getElementById('salidaDate');
    var tarifaInput = document.getElementById('tarifaInput');
    var btnRegistrado = document.getElementById('btnRegistrado');

    nombreInput.addEventListener('input', validarCampos);
    habitacionInput.addEventListener('input', validarCampos);
    entradaDateInput.addEventListener('input', validarCampos);
    salidaDateInput.addEventListener('input', validarCampos);

    function validarCampos() {
        // Verificar si los campos de entrada y salida tienen valores
        var camposLlenos =
            entradaDateInput.value !== '' &&
            salidaDateInput.value !== '';

        // Habilitar o deshabilitar el botón de pago según la validación
        btnRegistrado.disabled = !camposLlenos;

        // Si la entrada y salida tienen valores, calcular y actualizar la tarifa
        if (camposLlenos) {
            var entradaFecha = new Date(entradaDateInput.value);
            var salidaFecha = new Date(salidaDateInput.value);

            // Calcular la diferencia en días entre las fechas de entrada y salida
            var diferenciaDias = Math.ceil((salidaFecha - entradaFecha) / (1000 * 60 * 60 * 24));

            // Actualizar el campo de tarifa con la diferencia de días
            tarifaInput.value = diferenciaDias;
        } else {
            // Si algún campo está vacío, deshabilitar el campo de tarifa
            tarifaInput.value = '';
        }
    }

    // También puedes llamar a la función al cargar la página para manejar casos donde los campos ya están llenos inicialmente
    validarCampos();
});
