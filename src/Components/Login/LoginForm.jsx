import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import React from 'react'

function LoginForm() {
  const username = useForm()
  const password = useForm()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser()
    }
  }, [])

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const data = await response.json()
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const response = await fetch(url, options)
      const data = await response.json()
      window.localStorage.setItem('token', data.token)

      getUser(data.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastrar</Link>
    </section>
  )
}

export default LoginForm
