import React from 'react'

export default function ReferenceLabelEdit(props) {
  const { 
    label,
    handleLabelChange,
    handleLabelDelete
   } = props

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
      <button 
        className="btn btn--danger"
        onClick={() => handleLabelDelete(label.id)}
      >
        &times;
      </button>
    </>
  )
}
