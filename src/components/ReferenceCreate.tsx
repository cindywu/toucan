import React from 'react'
import { useReferences } from './App'

export default function ReferenceCreate() {
  const { 
    showReferenceCreate,
    handleReferenceAdd,
    handleShowReferenceCreateChange
  } = useReferences()

  return (
    showReferenceCreate && 
      <div className="reference-create__container">
        <div className="reference-create__header">
          <div className="reference-create__title">
            New reference
          </div>
          <div>
            <button className="btn btn--secondary">Expand</button>
            <button 
              className="btn btn--secondary"
              onClick={handleShowReferenceCreateChange}
            >&times;</button>
          </div>
        </div>
        <div className="reference-create__item">Name: New</div>
        <div className="reference-create__item">Parent: Parent</div>
        <div className="reference-create__item">Description: description</div>
        <div className="reference-create__btn-container">
          <div className="reference-create__btn-container-left">
            <button className="btn btn--secondary">
              Attach file
            </button>
          </div>
          <div className="reference-create__btn-container-right">
            <button 
              className="btn btn--primary"
              onClick={handleReferenceAdd}
            >
              Save Reference
            </button>
          </div>
        </div>
      </div>
  )
}
