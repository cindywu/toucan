import React, { useRef } from 'react'

export default function CommentForm() {

  const contentRef = useRef()
  

  function handleCommentAdd() {
    // TOOD: save comment
    console.log('handleCommentAdd')
    console.log(contentRef.current)
  }

  return (
    <div className="comment-form__container-container">
      <div className="comment__timeline">
        <div className="comment__user-avatar"></div>
      </div>
      <div className="comment-form__container">
        <form className="comment-form__form" onSubmit={handleCommentAdd}>
          <textarea
            className="comment-form__textarea"
            placeholder="What's on your mind..."
            ref={contentRef}
            required
          />
        </form>
        <div className="comment-form__submit-comment-container">
          <button className="btn btn--primary" onClick={handleCommentAdd}>Comment</button>
        </div>
      </div>
    </div>
  )
}
