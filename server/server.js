require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

/*post --> envio de informacion */

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json(({
            mensaje: 'el nombre es necesario'
        }))
    } else {
        res.json({
            persona: body
        })
    }
})



app.get('/', function(req, res) {
    res.json('Hello World')
})


app.get('/usuario', function(req, res) {
    res.json('get usuario')
})


/*actualizar*/

app.put('/usuario/:id', function(req, res) {

    let user = req.params.id;

    res.json({
        id: user
    })
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, console.log('escuchando puerto 3000'))