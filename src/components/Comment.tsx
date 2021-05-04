import React from 'react'

export default function Comment({ user, content }) {
  return (
    <div className="comment__container-container">
      <div className="comment__timeline">
        <div className="comment__user-avatar"></div>
      </div>
      <div className="comment__container">
        <div className="comment__user-info">
          <span className="comment__user mr-1">{user}</span>
          <span className="comment__date">5 days ago</span>
        </div>
        <div className="comment__content">
          {content}
        </div>
      </div>
    </div>
  )
}
