import React, { useState } from 'react'
import Header from './Components/Header'
function App() {

    const [projects, setProjects] = useState(['Denvolviment de app', 'Front-end web'])

    function heandleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`)
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects);
    }

    return (
        <React.Fragment>
            <Header title="Projects"/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={heandleAddProject}>Adicionar projeto</button>

        </React.Fragment>
    )
}

export default App