import { useState } from 'react'
import styles from '../../pages/Projects/ProjectForm/ProjectForm.module.css'
import Input from '../../pages/Form/Input'
import SubmitButton from '../../pages/Form/SubmitButton'

function ServiceForm({ handleSubmit, btnText, projectData }){
    
        function submit(){

        }
        function handleChange(e){

        }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Service name"
            name="name"
            placeholder="Type the service name"
            handleOnChange={handleChange}
            />

            <Input
            type="number"
            text="Service Cost"
            name="cost"
            placeholder="Type the total value"
            handleOnChange={handleChange}
            />

            <Input
            type="text"
            text="Service description"
            name="description"
            placeholder="Type the description service"
            handleOnChange={handleChange}
            />

        <SubmitButton text={btnText} />
        </form>
    )

}

export default ServiceForm