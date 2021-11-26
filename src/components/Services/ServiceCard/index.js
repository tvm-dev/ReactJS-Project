import styles from '../../pages/Projects/ProjectCard/ProjectCard.module.css'


function ServiceCard({ id, name, cost, description, handleRemove }){

    const remove = (e) => {}

  return (
      <div className={styles.project_card}>
        <h4>{name}</h4>
        <p><span>Total Cost:</span> $ {cost} </p>
        <p>{ description }</p>
        <div className={styles.project_card_actions}>
          <button onClick={remove} > </button>
         
          Delete
        </div>


      </div>

  )
}
export default ServiceCard