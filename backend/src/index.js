const express = require('express')

const app = express()
const port = 3333


app.get('/projects', (request, response) => {
   return response.send({message:'Hello world'}) 
})

app.listen(port)