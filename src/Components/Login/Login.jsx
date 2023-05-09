import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginRememberPassword from './LoginRememberPassword'
import LoginResetPassword from './LoginResetPassword'
import React from 'react'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import NotFound from '../NotFound'

function Login() {
  const { login } = React.useContext(UserContext)
  if(login === true) return <Navigate to='/conta' />
  
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='lembrar' element={<LoginRememberPassword />} />
          <Route path='redefinir' element={<LoginResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
