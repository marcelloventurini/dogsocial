import { useEffect } from 'react'

function Head(props) {
  useEffect(() => {
    document.title = props.title
    document.querySelector('meta[name="description"]')
      .setAttribute('content', props.description || '')
  }, [props])

  return (
    <>
    </>
  )
}

export default Head
