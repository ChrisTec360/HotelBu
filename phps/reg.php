<?php
// Establece la conexión a la base de datos (ajusta estos valores según tu configuración)
$servername = 'elhotelboo.caknmo2pt9jy.us-east-2.rds.amazonaws.com';
$port = 3306;
$username = 'adminbeluga';
$password = 'adanarYchristiaNmariOluZ';
$database = 'hotelbugambilias';

$conexion = new mysqli($servername, $username, $password, $database, $port);
if (isset($_POST['btnRegistrado'])) { // Verificar si se ha enviado el formulario

    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $habitacion = $_POST['habitacion'];
    $entrada = date('Y-m-d H:i:s', strtotime($_POST['entrada']));
    $salida = date('Y-m-d H:i:s', strtotime($_POST['salida']));
    $tarifa = $_POST['tarifa'];
    // Preparar la consulta SQL para insertar el registro
    $sql = "INSERT INTO reservaciones(nombre, habitacion, entrada, salida, tarifa) VALUES (?, ?, ?, ?, ?)";
    // Prepara la sentencia
    if ($stmt = $conexion->prepare($sql)) {
        // Vincula los parámetros
        $stmt->bind_param("sissd", $nombre, $habitacion, $entrada, $salida, $tarifa);

        // Ejecuta la sentencia
        if ($stmt->execute()) {
            header("Location: ../htmls/reservacion.html");
        } else {
            echo "Error al insertar registro: " . $stmt->error;
        }

        // Cierra la sentencia
        $stmt->close();
    } else {
        echo "Error en la preparación de la consulta: " . $conexion->error;
    }

    // Cierra la conexión
    $conexion->close();
} else {
    echo "No se ha enviado el formulario.";
}
?>