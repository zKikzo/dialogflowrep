const express = require('express')
const app = express()

// Ruta para recibir eventos del Webhook
app.post('/webhook', (req, res) => {
  // Aquí puedes procesar el evento del Webhook
  console.log('Recibido evento del Webhook:', req.body)
  res.sendStatus(200)
})

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000')
})
