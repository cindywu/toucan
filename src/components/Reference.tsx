import React from 'react'
import LabelList from './LabelList'
import { useReferences } from './App'

export default function Reference(props) {
  const { handleReferenceDelete } = useReferences()

  const { 
    id,
    name, 
    parent,
    date, 
    labels,
  } = props

  const handleClick = () => {
    console.log('clicked', name)
  }

  return (
    <div className="reference" onClick={handleClick}>
      <div className="reference__container">
        <span 
          className="mr-1 reference__date" 
          onClick={() => handleReferenceDelete(id)}>Delete</span>
        <span className="reference__name mr-1">{name}</span>
        <span className="reference__parent">{` › `}</span>
        <span className="reference__parent mr-1">{parent}</span>
        <LabelList labels={labels}/>
        <span className="reference__date">{date}</span>
      </div>
    </div>
  )
}
