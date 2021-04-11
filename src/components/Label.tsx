import React from 'react'

export default function Label({ name, color}) {
  return (
    <>
      <span>{color}</span>
      <span>{name}</span>
    </>
  )
}
