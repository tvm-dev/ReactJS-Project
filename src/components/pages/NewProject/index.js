import styles from './NewProject.module.css'
import ProjectForm from '../../../components/pages/Projects/ProjectForm'
import { useNavigate } from 'react-router-dom'


function NewProject(){

    const navigate  = useNavigate()
    //const history = useHistory();

    function createPost(project){
        //Starting Costs and Projects
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //Redirect
            navigate('/projects', {message: 'Project was create successfully!'})
           
        })
        .catch((err) => console.log(err))
    }


    return (
        <div className={styles.newproject_container} >
            <h1>Create Project</h1>
            <p>Create your Project for add services!</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project" />
        </div>

    )
}

export default NewProject