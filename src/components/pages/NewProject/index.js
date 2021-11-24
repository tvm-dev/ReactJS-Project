import styles from './NewProject.module.css'
import ProjectForm from '../Project/ProjectForm'


function NewProject(){
    return (
        <div className={styles.newproject_container} >
            <h1>Create Project</h1>
            <p>Create your Project for add services!</p>
            <ProjectForm btnText="Create Project" />
        </div>

    )
}

export default NewProject