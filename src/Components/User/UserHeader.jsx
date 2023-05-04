import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

function UserHeader() {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    const { pathname } = location
    
    switch(pathname) {
    case '/conta/postar':
      setTitle('Postar Foto')
      break
    case '/conta/estatisticas':
      setTitle('Estatísticas')
      break
    default:
      setTitle('Minha Conta')
      break
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
