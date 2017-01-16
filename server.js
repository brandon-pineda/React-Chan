// const cors = require('cors')
const express = require('express')
const fetch = require('node-fetch')
// const jwt = require('express-jwt')
// const rsaValidation = require('auth0-api-jwt-rsa-validation')

const app = express()
// app.use(cors())
app.set('port', (process.env.PORT || 3001))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/boards', function(req, res){
    fetch('https://a.4cdn.org/boards.json')
        .then( (res) => {
            return res.json()
        }).then( (json) => {
            res.send(json)
        })
})

app.get('/board/api', (req, res) => {
    const param = req.query.q

    fetch(`https://a.4cdn.org/${param}/1.json`)
        .then( (res) => {
            return res.json()
        }).then( (json) => {
            res.send(json)
        })
})



app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})
