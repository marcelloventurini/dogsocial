import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { Suspense, lazy, useEffect } from 'react'
import { GET_STATISTICS } from '../../api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'

const UserStatisticsGraphs = lazy(() => import('./UserStatisticsGraphs'))

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
      <Suspense fallback={<div></div>}>
        <Head title='Estatísticas' />
        <UserStatisticsGraphs data={data} />
      </Suspense>
    )
  } else return null
}

export default UserStatistics
