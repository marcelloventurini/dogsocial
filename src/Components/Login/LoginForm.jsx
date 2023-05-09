import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import React from 'react'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head'

function LoginForm() {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animationLeft'>
      <Head title='Login' />
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        {loading ?
          <Button disabled>Carregando...</Button> :
          <Button>Entrar</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.remember} to='/login/lembrar'>
        Esqueci a senha.
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui cadastro? Registre-se.</p>
        <Link className={stylesBtn.button} to='/login/criar'>
          Criar Conta
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
