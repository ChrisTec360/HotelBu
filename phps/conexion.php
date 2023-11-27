<?php
$host = '127.0.0.1/3308';
$usuario = 'nuevo_usuario';
$contraseña = 'contraseniasegura';
$base_de_datos = 'bugambiliashotel';

// Conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta SQL
$sql = "SELECT * FROM registros";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        echo "ID: " . $fila["id"] . "<br>";
        echo "Nombre: " . $fila["nombre"] . "<br>";
        echo "Habitación: " . $fila["habitacion"] . "<br>";
        echo "Entrada: " . $fila["entrada"] . "<br>";
        echo "Salida: " . $fila["salida"] . "<br>";
        echo "Tarifa: " . $fila["tarifa"] . "<br>";
    }
} else {
    echo "No se encontraron resultados.";
}

$conexion->close();
?>
