const express = require('express');
const paypal = require('paypal-rest-sdk');

const app = express();

// Configurar las credenciales de PayPal
paypal.configure({
    mode: 'sandbox', // 'sandbox' para pruebas, 'live' para producción
    client_id: 'AViuVbm56qfunyXlvUycU8TpJQFXglFRu_h7hrqvIzEoV9YINfL7RITDC00tF3cYRVfbfE-dHFIDZRXH',
    client_secret: 'EAXZMle_8jxf_Hnsg2GHqaoMcbxbabcnqbmg6sBR0q4lSV5De8gzmSUkwGpwrkiEJCb3sSOwqSQoyIDx',
});


// Ruta para procesar el pago
app.get('/pagar', (req, res) => {

    //obtener datos del formulario
    const { nombre, habitacion, entrada, salida, tarifaInput } = req.query;
    console.log('Datos antes de hacer el pago:', { nombre, habitacion, entrada, salida, tarifaInput });

    const producto = {
        name: 'Habitación en Hotel',
        sku: '001',
        price: tarifaInput,  // Precio total
        currency: 'MXN',
        quantity: 1,
    };

     // Configurar la transacción
    const transaccion = {
        item_list: {
            items: [producto],
        },
        amount: {
            currency: 'MXN',
            total: tarifaInput,
        },
        description: `Reservación de habitación para ${nombre}`,
    };


    const pago = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: 'http://localhost:3000/exito',
            cancel_url: 'http://localhost:3000/cancelar',
        },
        transactions: [transaccion],
    };

    // Crear el pago y obtener la URL de aprobación de PayPal
    paypal.payment.create(pago, (error, pago) => {
        if (error) {
            console.error(error.response);
            res.status(500).send('Error al iniciar el pago');
            //throw error;
        } else {
            console.log('Respuesta de PayPal:', JSON.stringify(pago));
            for (let i = 0; i < pago.links.length; i++) {
                if (pago.links[i].rel === 'approval_url') {
                    res.redirect(pago.links[i].href);
                }
            }
        }
    });
});

// Rutas para éxito y cancelación
app.get('/exito', (req, res) => {
    //obtener datos del formulario
    const { nombre, habitacion, entrada, salida, tarifaInput } = req.query;
    console.log('Datos en el éxito:', `${nombre}`, habitacion, entrada, salida, tarifaInput );
    res.send('Pago exitoso');

   // res.redirect('/htmls/Home.html');

});

app.get('/cancelar', (req, res) => {
    res.send('Pago cancelado');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
