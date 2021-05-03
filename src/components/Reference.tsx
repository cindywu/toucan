import React from 'react'
import LabelList from './LabelList'
import { useReferences } from './App'

export default function Reference(props) {
  const { handleReferenceSelect } = useReferences()

  const { 
    id,
    name, 
    parent,
    date, 
    labels,
    description,
  } = props

  const handleClick = () => {
    handleReferenceSelect(id)
  }

  return (
    <div className="reference" onClick={handleClick}>
      <div className="reference__container">
        <div className="reference__left">
          <span className="reference__name mr-1">{name}</span>
          <span className="reference__parent">{` › `}</span>
          <span className="reference__parent mr-1">{parent}</span>
          <span className="reference__description">{description}</span>
        </div>
        <div className="reference__right">
          <LabelList labels={labels}/>
          <span className="reference__date">{date}</span>
        </div>
        
      </div>
    </div>
  )
}
