import { func } from 'prop-types'
import styles from './FeedPhotosItem.module.css'

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo)
  }
  
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.span}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
