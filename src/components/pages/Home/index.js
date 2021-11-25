import styles from './Home.module.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../Buttons/LinkButton'

function Home(){
    return (
        <section className={styles.home_container} >
            <h1>Welcome to the <span>Costs</span></h1>
            <p>Start manage your projects right now! </p>

            <LinkButton to="/newproject" text="Create a Project" />
            
            <img src={savings} alt="Costs" />
            
        </section>
        
    )
}

export default Home