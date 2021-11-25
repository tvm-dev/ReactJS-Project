import { useLocation } from "react-router-dom"
import Message from "../../Messages"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from "../../Buttons/LinkButton"
import ProjectCard from "./ProjectCard"

import { useEffect, useState } from "react"


function Projects(){

    const [projects, setProjects] = useState([])


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application-json',

            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((err) => 
        console.log(err))
    }, [])


    return (
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>My Projects</h1>
                    <LinkButton to="/newproject" text="Create a Project" />
            </div>
           {message && <Message type="success" msg={message} />}

            <Container customclass="start">

                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard
                        
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                   
                   />)}
                   

            </Container>

        </div>
    )
}

export default Projects