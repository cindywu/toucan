import React from 'react'
import Label from './Label'

export default function LabelList({ labels }) {
  const labelElements = labels.map(label => {
    return <Label key={label.id} {...label}/>
  })
  return (
    <div>
      {labelElements}
    </div>
  )
}
