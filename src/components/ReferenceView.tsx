import React from 'react'
import { useReferences } from './App'

export default function ReferenceView() {
  const {
    selectedReference
  } = useReferences()

  return (
    <div className="reference-view__reference-view-container">
    <div className="reference-view__reference-name">{selectedReference.name}</div>
    <div className="reference-view__reference-description">{selectedReference.description}</div>
    <div className="reference-view__add-sub-reference-button-container">
      <button className="btn btn-secondary">+ Add sub-references</button>
    </div>
  </div>
  )
}
