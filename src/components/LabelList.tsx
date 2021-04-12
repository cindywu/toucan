import React from 'react'
import Label from './Label'

export default function LabelList({ labels }) {
  const labelElements = labels.map(label => {
    return <Label key={label.id} {...label}/>
  })
  return (
    <span className="label-list mr-1">
      {labelElements}
    </span>
  )
}
