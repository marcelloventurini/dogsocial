import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg'
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Logout } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)

  function handleLogout() {
    userLogout()
    navigate('/login')
  }

  const { pathname } = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)} 
          className={`${styles.mobileButton}
          ${mobileMenu && styles.mobileButtonActive}`}>
        </button>)}

      <nav className={`${mobile ? styles.navMobile : styles.nav}
        ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/conta' end>
          <MyPhotos /> {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <Statistics /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <AddPhoto /> {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <Logout /> {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
