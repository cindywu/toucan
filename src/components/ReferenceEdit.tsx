import React from 'react'
import ReferenceLabelEdit from './ReferenceLabelEdit'

export default function ReferenceEdit() {
  return (
    <div className="reference-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="parent">Parent</label>
        <input type="text" name="parent" id="parent" />
        <label htmlFor="date">Date</label>
        <input type="text" name="date" id="date" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
      </div>
      <br />
      <label>Labels</label>
      <div>
        <div>Name</div>
        <div>Color</div>
        <ReferenceLabelEdit />
        <ReferenceLabelEdit />
      </div>
      <div>
        <button>Add Label</button>
      </div>
    </div>
  )
}
