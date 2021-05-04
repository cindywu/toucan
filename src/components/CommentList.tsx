import React from 'react'
import { useReferences } from './App'
import type { IComment } from './core'
import Comment from './Comment'

export default function CommentList() {
  const {
    selectedReference
  } = useReferences()

  const {
    comments
  } = selectedReference

  return (
    <div className="comment-list__container">
      <div className="comment-list__title">Discussion</div>
      {comments.map((comment: IComment) => {
        return (
          <Comment 
            key={comment.id}
            {...comment}
          />
        )
      })}
    </div>
  )
}
