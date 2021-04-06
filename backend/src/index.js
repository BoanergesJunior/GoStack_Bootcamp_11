const cors = require('cors')
const express = require('express')
const {uuid, isUuid} = require('uuidv4')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const projects = []

function logResquests(request, response, next){
    const { method, url } = request

    const logLabel = `[${method.toUpperCase()} ${url}]`

    console.time(logLabel);

    next()

    console.timeEnd(logLabel);
}

function validateProjectId(request, response, next){
    const { id } = request.params

    if(!isUuid(id)){
        return response.status(400).send({message:'Invalid project id!'})
    }

    return next()
}

app.use(logResquests)
app.use('/projects/:id', validateProjectId)

app.get('/projects', (request, response) => {
    const { nome } = request.query

    const results = nome
    ? projects.filter(project => project.nome === nome)
    : projects
    
    return response.send(results) 
})

app.post('/projects', (request, response) => {
    const {nome, tipo} = request.body
    
    const project = {id: uuid(), nome, tipo}

    projects.push(project)

    return response.send(project)
})

app.put('/projects/:id', (request, response) => {
    const {id} = request.params
    const {nome, tipo} = request.body
    
    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0){
        return response.status(400).send({error: 'Project not found'})
    }

    const project = {
        id,
        nome,
        tipo 
    }

    projects[projectIndex] = project

    return response.send(project)
})

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params

    const projectIndex = projects.findIndex(project => project.id === id)
    
    if(projectIndex < 0){
        return response.status(400).send({error: 'Project not found'})
    }

    projects.splice(projectIndex, 1)
    
    return response.status(204).send();
})

app.listen(port, () => {
    console.log(`Back-end started on: http://localhost:${port}`)
})


