import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { useEffect } from 'react'
import { GET_STATISTICS } from '../../api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
import UserStatisticsGraphs from './UserStatisticsGraphs'

function UserStatistics() {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATISTICS()
      await request(url, options)
    }

    getData()
  }, [request])

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if (data) {
    return (
      <div>
        <Head title='Estatísticas' />
        <UserStatisticsGraphs data={data} />
      </div>
    )
  } else return null
}

export default UserStatistics
