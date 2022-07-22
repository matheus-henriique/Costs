import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return(
    <footer className={styles.footer}>
     <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <a href='https://www.instagram.com/mhlr_henri/' target="_blanck" ><FaInstagram /></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/matheus-henrique-5a0098226/' target="_blanck" ><FaLinkedin /></a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer