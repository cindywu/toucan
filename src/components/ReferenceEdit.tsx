import React from 'react'
import ReferenceLabelEdit from './ReferenceLabelEdit'

export default function ReferenceEdit() {
  return (
    <div className="reference-edit">
      <div className="reference-edit__remove-button-container">
        <button className="btn reference-edit__remove-button">&times;</button>
      </div>
      <div className="reference-edit__details-grid">
        <label 
          htmlFor="id"
          className="reference-edit__label">
          ID
        </label>
        <input 
          type="text" 
          name="id" 
          id="id" 
          className="reference-edit__input" />
        <label 
          htmlFor="name"
          className="reference-edit__label">
          Name
        </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          className="reference-edit__input" />
        <label 
          htmlFor="parent"
          className="reference-edit__label">
          Parent
        </label>
        <input 
          type="text" 
          name="parent" 
          id="parent" 
          className="reference-edit__input" />
        <label 
          htmlFor="date"
          className="reference-edit__label">
          Date
        </label>
        <input 
          type="text" 
          name="date" 
          id="date" 
          className="reference-edit__input" />
        <label 
          htmlFor="description"
          className="reference-edit__label">
          Description
        </label>
        <textarea 
          name="description" 
          id="description" 
          className="reference-edit__input"/>
      </div>
      <br />
      <label className="reference-edit__label">Labels</label>
      <div className="reference-edit__label-grid">
        <div>Name</div>
        <div>Color</div>
        <div></div>
        <ReferenceLabelEdit />
        <ReferenceLabelEdit />
      </div>
      <div className="reference-edit__add-label-btn-container">
        <button className="btn btn--primary">Add Label</button>
      </div>
    </div>
  )
}
