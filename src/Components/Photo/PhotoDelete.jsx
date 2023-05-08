import useFetch from '../../Hooks/useFetch'
import { PHOTO_DELETE } from '../../api'
import styles from './PhotoDelete.module.css'

function PhotoDelete({ id }) {
  const { loading, request } = useFetch()
  
  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja apagar a foto?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      
      if (response.ok) {
        window.location.reload()
      }
    }
  }
  
  return (
    <>
      {loading ?
        <button disabled className={styles.delete}>
          Excluir
        </button> :
        <button onClick={handleClick} className={styles.delete}>
          Excluir
        </button>}
    </>
  )
}

export default PhotoDelete
