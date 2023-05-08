import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments)
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext)
  
  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            {comment.comment_author}: {comment.comment_content}
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComments
