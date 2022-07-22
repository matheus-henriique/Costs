import {Link} from 'react-router-dom'

import { BsJustify } from 'react-icons/bs'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
  return(
    <div className={styles.container}>
    <nav className={styles.navbar} >
      
      <Link to='/'>
        <img src={logo} alt="Costs" />
      </Link>
      
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="/projects">Projetos</Link></li>
        <li className={styles.item}><Link to="/company">Empresa</Link></li>
        <li className={styles.item}><Link to="/contact">Contato</Link></li>
      </ul>
      <div className={styles.menu}>
      <BsJustify/>
      </div>
    </nav>
    </div>
  )
}

export default Navbar