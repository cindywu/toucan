import React from 'react'

export default function ReferenceLabelEdit(props) {
  const { label, handleLabelChange } = props

  function handleChange(changes) {
    handleLabelChange(label.id, { ...label, ...changes })
  }

  return (
    <>
      <input 
        className="reference-edit__input" 
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={label.name}
      />
      <input 
        className="reference-edit__input" 
        type="text"
        onChange={(e) => handleChange({ color: e.target.value })}
        value={label.color}
      />
      <button className="btn btn--danger">
        &times;
      </button>
    </>
  )
}
