import React from 'react'
import Reference from './Reference'
import ReferenceView from './ReferenceView'
import { useReferences } from './App'
import type { IReference } from './core'


const AddReferenceButton = () => {
  const { 
    expandSelectedReference,
    handleShowReferenceCreateChange,
    handleReferenceDeselect,
    selectedReference
  } = useReferences()

  return (
    <div className="reference-list__add-reference-btn-container">
      {selectedReference && expandSelectedReference &&
        <button 
          className='btn btn--secondary'
          onClick={handleReferenceDeselect}
        >
          Go back
        </button>
      }
      <button 
        className="btn btn--add-reference" 
        onClick={handleShowReferenceCreateChange}
      >+</button>
    </div>
  )
}

export default function ReferenceList() {
  const { references, selectedReference, expandSelectedReference } = useReferences()

  return (
    <div className="reference-list">
      <AddReferenceButton />
      {selectedReference && expandSelectedReference ?
        <ReferenceView />
      : 
        <div className="reference-list__reference-list-container">
          {references.map((reference: IReference) => {
            return (
              <Reference
                key={reference.id} 
                {...reference}
              />
            )
          })}
        </div>
      }
      
    </div>
  )
}
