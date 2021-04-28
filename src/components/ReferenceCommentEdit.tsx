import React from 'react'

export default function ReferenceCommentEdit(props) {
  const { 
    comment,
    handleCommentChange,
    handleCommentDelete
   } = props

  function handleChange(changes) {
    handleCommentChange(comment.id, { ...comment, ...changes })
  }

  return (
    <>
      <input 
        className="reference-edit__input" 
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={comment.user}
      />
      <input 
        className="reference-edit__input" 
        type="text"
        onChange={(e) => handleChange({ color: e.target.value })}
        value={comment.content}
      />
      <button 
        className="btn btn--danger"
        onClick={() => handleCommentDelete(comment.id)}
      >
        &times;
      </button>
    </>
  )
}
