document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Envía el formulario usando AJAX
    var formData = new FormData(this);
    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Si la respuesta es exitosa, muestra una alerta SweetAlert2
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Tu reserva ha sido realizada correctamente.',
            });
            // Limpia el formulario si lo deseas
            this.reset();
        } else {
            // Si hay algún error, muestra una alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al procesar tu solicitud.',
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
