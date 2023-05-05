import { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext)
  
  return (
    <>
      <ul className={styles.comments}>
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
