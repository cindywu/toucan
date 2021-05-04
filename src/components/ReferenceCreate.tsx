import React, { useRef } from 'react'
import { useReferences } from './App'

export default function ReferenceCreate() {
  const { 
    showReferenceCreate,
    handleReferenceAdd,
    handleShowReferenceCreateChange
  } = useReferences()

  const nameRef = useRef()
  const parentRef = useRef()
  const descriptionRef = useRef()

  return (
    showReferenceCreate && 
      <div className="reference-create__container">
        <div className="reference-create__header">
          <div className="reference-create__title">
            {/* New reference */}
          </div>
          <div>
            <button className="btn btn--secondary">Expand</button>
            <button 
              className="btn btn--secondary"
              onClick={handleShowReferenceCreateChange}
            >&times;</button>
          </div>
        </div>
        <div className="reference-create__details-grid">
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            className="reference-create__input"
            placeholder="name"
          />
          <input
            type="text"
            autoComplete="off"
            name="parent"
            id="parent"
            className="reference-create__input"
            placeholder="parent"
          />
          <textarea 
            name="description" 
            id="description" 
            className="reference-create__input"
            placeholder="title"
          />
        </div>
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
