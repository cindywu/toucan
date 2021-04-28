import React from 'react'
import Reference from './Reference'
import { useReferences } from './App'
import type { IReference } from './core'


const AddReferenceButton = () => {
  const { handleReferenceAdd } = useReferences()

  return (
    <div className="reference-list__add-reference-btn-container">
      <button 
        className="btn btn--add-reference" 
        onClick={handleReferenceAdd}
      >+</button>
    </div>
  )
}

export default function ReferenceList() {
  const { references } = useReferences()
  
  return (
    <div className="reference-list">
      <AddReferenceButton />
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
    </div>
  )
}
