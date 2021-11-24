import Input from '../../Form/Input'
import Select from '../../Form/Select'
import SubmitButton from '../../Form/SubmitButton'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}){
    return (
       <form className={styles.form}>

            <Input type="text" text="Project name" name="name" placeholder="Insert the Project name" />
            <Input type="number" text="Budget Project" name="budget" placeholder="Insert the total Budget" />
            <Select name="category_id" text="Select one Category" />
            <SubmitButton text={btnText} />
      </form>
    )
}

export default ProjectForm