import styles from './Footer.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>DogSocial. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer
