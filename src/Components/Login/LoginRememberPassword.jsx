import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { REMEMBER_PASSWORD } from '../../api'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

function LoginRememberPassword() {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (login.validate()) {
      const { url, options } = REMEMBER_PASSWORD({ login: login.value,
        url: 'http://localhost:5173/login/lembrar' })
      request(url, options)
    }
  }
  
  return (
    <section>
      <Head title='Lembrar Senha' />
      <h1 className='title'>Esqueceu a senha?</h1>
      {data ?
        <p style={{ color: '#4c1' }}>{data}</p> :
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='email' {...login} />
          {loading ?
            <Button disabled>Enviando...</Button> :
            <Button>Lembrar minha senha.</Button>}
        </form>}
      <Error error={error} />
    </section>
  )
}

export default LoginRememberPassword
