const express = require('express')

const app = express()
const port = 3333

app.use(express.json())

app.get('/projects', (request, response) => {
   return response.send([
       'Projeto1',
       'Projeto2'
   ]) 
})

app.post('/projects', (request, response) => {
    const {nome, idade} = request.body
    
    console.log(nome)
    console.log(idade)

    return response.send([
        'Projeto1',
        'Projeto2',
        'Projeto3'
    ])
})

app.put('/projects/:id', (request, response) => {
    return response.send([
        'Projeto4',
        'Projeto2',
        'Projeto3'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.send([
        'Projeto2',
        'Projeto3'
    ])
})

app.listen(port, () => {
    console.log(`Back-end started on: http://localhost:${port}`)
})