import React from 'react'
import Reference from './Reference'

export default function ReferenceList({ references }) {
  
  return (
    <div className="reference-list">
      <div className="reference-list__add-reference-btn-container">
        <button className="btn btn--primary">+</button>
      </div>
      <div>
        {references.map(reference => {
          return (
            <Reference 
              key={reference.id} 
              {...reference}
            />
          )
        })}
      </div>
    </div>
  )
}
