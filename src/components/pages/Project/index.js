import styles from './Project.module.css';
//import .env from '/.env';
import Loading from '../../Loading'
import Container from '../../pages/layout/Container'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProjectForm from '../../pages/Projects/ProjectForm'
import Message from '../../Messages'
import ServiceForm from '../../Services/ServiceForm';


function Project(){

    const { id } = useParams()
    const [ project, setProject ] = useState([])
    const [ showProjectForm, setShowProjectForm ] = useState(false)
    const [ showServiceForm, setShowServiceForm ] = useState(false)
    const [message, setMessage ] = useState()
    const [type, setType ] = useState()


    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
    
            }).then(resp => resp.json())
            .then((data) => {
            setProject(data)  
            })
            .catch((err) => console.log)
        }, 300)
       
    }, [id])

    function editPost(project) {
        //Make a validation budget
        setMessage('')
       if(project.budget < project.cost) {
        setMessage('The Budget cannot be bigger than project!')
        setType('error')
        return false

   }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
             setProject(data)
             setShowProjectForm(false)
              setMessage('Project Updated!')
              setType('success')
              
    })
        .catch((err) => console.log(err))
     }
         
    function createService(){
        
    } 

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)

    }

    function toogleServiceForm(){
        setShowServiceForm(!showServiceForm)

    }


    return ( 
        
        <>
    
                {project.name ? (
        <div className={styles.project_details} >
            <Container customClass="column">

                        {message && <Message type={type} msg={message} />}


                <div className={ styles.details_container } >
                    <h1>Project: {project.name}</h1>
                    <button className={ styles.btn } onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Edit Project' : 'Close'}
                    </button>
                    {!showProjectForm ? (
                    <div className={styles.project_info} >

                        <p><span>Category: </span> {project.category.name}</p>
                        <p><span>Total Budget: </span> $ {project.budget}</p>
                        <p><span>Total used: </span> {project.cost}</p>
                         </div>
                         ) : (
                             <div className={styles.project_info}>
                                 
                                 <ProjectForm
                                 
                                 handleSubmit={editPost}
                                 btnText="Save Edition"
                                 projectData={project}
                                 
                                 />
                                 
                                 </div>
                        )}
                    </div>

                   <div className={styles.service_form_container}>
                       <h2>Add a new service:</h2>

                       <button className={ styles.btn } onClick={toogleServiceForm}>
                        {!showServiceForm ? 'Add' : 'Close'}
                    </button>
                            
                            <div className={styles.project_info}>
                    {showServiceForm && (
                        <ServiceForm
                        handleSubmit={createService}
                        btnText="Add service"
                        projectData={project}
                        />    

                    )}

                            </div>
                       </div>

                       <h2>Services</h2>         
                       <Container customClass="start"> 
                            <p>services items</p>
                        </Container>

            </Container>
            </div>
      
        
                ) : (
        
                <Loading />
    
                )} 
        
            </>
        )
    }

export default Project