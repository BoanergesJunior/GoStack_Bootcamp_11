import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import './App.css'
import backgroundImage from './assets/background.jpg'
import api from './services/api'

function App() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function heandleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`)
        // setProjects([...projects, `Novo projeto ${Date.now()}`])

        const response = await api.post('projects', {
            nome: `Novo projeto ${Date.now()}`,
            tipo: "Projeto mobile"
        })

        const project = response.data
        setProjects([...projects,  project])
    }

    return (
        <React.Fragment>
            <Header title="Projects"/>

            <ul>
                {projects.map(project => <li key={project.id}>{project.nome}</li>)}
            </ul>

            <button type="button" onClick={heandleAddProject}>Adicionar projeto</button>

        </React.Fragment>
    )
}

export default App