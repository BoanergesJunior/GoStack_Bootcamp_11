import React from 'react'
import Header from './Components/Header'
function App() {
    return (
        <React.Fragment>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>

            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Login</li>
                    <li>Projects</li>
                </ul>
            </Header>
        </React.Fragment>
    )
}

export default App