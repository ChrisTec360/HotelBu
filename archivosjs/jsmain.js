// Obtener la fecha y hora actual en el formato adecuado (YYYY-MM-DDTHH:MM)
var currentDateTime = new Date().toISOString().slice(0, 16);

// Establecer la fecha y hora mínima en el input con ID "entradaDate"
document.getElementById('entradaDate').min = currentDateTime;


