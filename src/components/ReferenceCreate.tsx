import React from 'react'
import { useReferences } from './App'

export default function ReferenceCreate() {
  const { 
    showReferenceCreate,
    handleReferenceAdd
  } = useReferences()

  return (
    showReferenceCreate && 
      <div className="reference-create__container">
        <div className="reference-create__item">Name: New</div>
        <div className="reference-create__item">Parent: Parent</div>
        <div className="reference-create__item">Description: description</div>
        <div className="reference-create__btn-container">
          <button className="btn btn--secondary">
            Upload File
          </button>
          <button 
          className="btn btn--primary"
          onClick={handleReferenceAdd}
        >
          Save Reference
        </button>
        </div>
      </div>
  )
}
