import Feed from './Feed/Feed'
import Head from './Helper/Head'

function Home() {
  return (
    <section className='container mainContainer'>
      <Head title='Feed' description='Home do site com o feed.' />
      <Feed />
    </section>
  )
}

export default Home
