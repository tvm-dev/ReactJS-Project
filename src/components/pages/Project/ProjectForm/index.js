import Input from '../../Form/Input'
import Select from '../../Form/Select'
import SubmitButton from '../../Form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useEffect, useState } from 'react'


function ProjectForm({ handleSubmit, btnText, projectData }){
  const [categories, setCategories] = useState([])
  const [ project, setProject ] = useState(projectData || {} ) 

    useEffect(() => {
      fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
       },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
      e.preventDefault()
      handleSubmit(project)
      //console.log(project)
    }

    function handleChange(e) {
      setProject({ ...project, [e.target.name]: e.target.value })
     
     
    }

    function handleCategory(e) {
      setProject({ ...project, category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }
     })
      
    }

    return (
       <form onSubmit={submit} className={styles.form}>

            <Input
             type="text"
             text="Project name"
             name="name" 
             placeholder="Insert the Project name"
             handleOnChange={handleChange}
             value={project.name ? project.name : ''}
             />

            <Input
             type="number"
             text="Budget Project"
             name="budget" 
             placeholder="Insert the total Budget"
             handleOnChange={handleChange}
             value={project.budget ? project.budget : ''}
             />
            <Select 
              name="category_id" 
              text="Select one Category" 
              options={categories} 
              handleOnChange={handleCategory}
              value={project.category ? project.category.id : '' }
              />
            <SubmitButton text={btnText} />
      </form>
    )
}

export default ProjectForm