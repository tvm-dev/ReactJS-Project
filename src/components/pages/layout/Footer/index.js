import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
    return (<footer className={styles.footer}>
        <ul className={styles.social_list} >
            <li><FaFacebook /> </li>
            <li><FaInstagram /> </li>
            <li><FaYoutube /> </li>
            <li><FaLinkedin /> </li>
            <li><FaDiscord /> </li>
        </ul>

            <p className={styles.copy_right} ><span>Costs</span> &copy; 2021</p>
      </footer>
    )
}

export default Footer