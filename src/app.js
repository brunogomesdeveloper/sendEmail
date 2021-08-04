const express = require('express')
const bodyParser = require('body-parser');
const app = express()

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

module.exports = app
