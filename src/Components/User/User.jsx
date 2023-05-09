import { useContext } from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStatistics from './UserStatistics'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'

function User() {
  const { data } = useContext(UserContext)

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='/postar' element={<UserPhotoPost />} />
        <Route path='/estatisticas' element={<UserStatistics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
