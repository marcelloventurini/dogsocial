import React from 'react'
import { TOKEN_POST, USER_GET } from './api'

export const UserContext = React.createContext()

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const data = await response.json()

    setData(data)
    setLogin(true)
    console.log(data)
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password })
    const response = await fetch(url, options)
    const { token } = await response.json()

    window.localStorage.setItem('token', token)
    
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}
