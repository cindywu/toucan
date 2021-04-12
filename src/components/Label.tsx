import React from 'react'

export default function Label({ name, color}) {
  const labelColor = {
    color: color
  } as React.CSSProperties

  return (
    <span className="label mr-1">
      <span className="mr-1" style={labelColor}>●</span>
      <span>{name}</span>
    </span>
  )
}
