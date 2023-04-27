import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login / Criar Conta</Link>
      </nav>
    </div>
  )
}

export default Header
