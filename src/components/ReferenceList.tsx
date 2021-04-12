import React from 'react'
import Reference from './Reference'

export default function ReferenceList(props) {
  const { 
    references, 
    handleReferenceAdd, 
    handleReferenceDelete
  } = props
  
  return (
    <div className="reference-list">
      <div className="reference-list__add-reference-btn-container">
        <button 
          className="btn btn--primary" 
          onClick={handleReferenceAdd}
        >+</button>
      </div>
      <div className="reference-list__reference-list-container">
        {references.map(reference => {
          return (
            <Reference 
              key={reference.id} 
              handleReferenceDelete = {handleReferenceDelete}
              {...reference}
            />
          )
        })}
      </div>
    </div>
  )
}
