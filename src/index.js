require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = parseInt(process.env.PORT)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var  email = require("./email")

app.post('/enviarEmail', async (req, res)  => {

    try {

      let parametros = req.body;

      let retEnvio = await email.enviarEmail(parametros)

      res.send(retEnvio)

    } catch (error) {
        res.send(400, error)
    }  
})

app.listen(port, () => {
  console.log(`---------------------------------`)
  console.log(`Send email listening `)
  console.log(`Port: ${port}`)
  console.log(`http://localhost:${port}`)
  console.log(`---------------------------------`)
})
