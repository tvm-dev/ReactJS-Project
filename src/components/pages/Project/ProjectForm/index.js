import Input from '../../Form/Input'
import Select from '../../Form/Select'
import SubmitButton from '../../Form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useEffect, useState } from 'react'


function ProjectForm({ btnText }){
  const [categories, setCategories] = useState([])

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



    return (
       <form className={styles.form}>

            <Input type="text" text="Project name" name="name" placeholder="Insert the Project name" />
            <Input type="number" text="Budget Project" name="budget" placeholder="Insert the total Budget" />
            <Select name="category_id" text="Select one Category" options={categories} />
            <SubmitButton text={btnText} />
      </form>
    )
}

export default ProjectForm