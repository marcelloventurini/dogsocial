import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginRememberPassword from './LoginRememberPassword'
import LoginResetPassword from './LoginResetPassword'
import React from 'react'
import { UserContext } from '../../UserContext'

function Login() {
  const { login } = React.useContext(UserContext)
  if(login === true) return <Navigate to='/conta' />
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='lembrar' element={<LoginRememberPassword />} />
        <Route path='redefinir' element={<LoginResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login
