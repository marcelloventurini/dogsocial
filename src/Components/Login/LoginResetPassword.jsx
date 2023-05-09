import { useEffect, useState } from 'react'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import { RESET_PASSWORD } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'

function LoginResetPassword() {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm('')
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login  = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    if (password.validate()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value
      })
      
      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <h1 className='title'>Redefina a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova Senha' type='password'
          name='password' {...password} />
        {loading ?
          <Button disabled>Redefinindo...</Button> :
          <Button>Redefinir Senha</Button>}
      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginResetPassword
