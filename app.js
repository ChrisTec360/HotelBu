const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Agrega esta línea para importar el módulo CORS

const app = express();

// Configuración de bodyParser para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/htmls/registro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmls', 'registro.html'));
});


// Middleware para permitir solicitudes desde diferentes orígenes (CORS)
app.use(cors()); // Agrega esta línea para habilitar CORS

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'elhotelboo.caknmo2pt9jy.us-east-2.rds.amazonaws.com',
    user: 'adminbeluga',
    password: 'adanarYchristiaNmariOluZ',
    database: 'hotelbugambilias'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos MySQL');
    }
});

// Manejar la solicitud POST para el registro
app.post('/registrar', (req, res) => {
    const nombreUsuario = req.body.nombreUsuario;
    const amUsuario = req.body.amUsuario;
    const apUsuario = req.body.apUsuario;
    const correoUsuario = req.body.correoUsuario;
    const contraUsuario = req.body.contraUsuario;

// Verifica que la conexión esté abierta antes de ejecutar consultas
if (!connection || connection.state === 'disconnected') {
    console.error('Error: La conexión a la base de datos está cerrada o desconectada');
    return res.status(500).send('Error interno del servidor');
}

  // Realizar la inserción en la base de datos
    const sql = 'INSERT INTO usuarios (nombre, ap, am, correo, contrasena) VALUES (?, ?, ?, ?, ?)';
    const values = [nombreUsuario, apUsuario, amUsuario, correoUsuario, contraUsuario];

    connection.query(sql, values, (err, result) => {
        if (err) {
        console.error('Error al insertar datos:', err);
        res.status(500).send('Error interno del servidor');
        } else {
        console.log('Registro exitoso');
        res.status(200).send('Registro exitoso');
        }
    });
});

// Iniciar el servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
