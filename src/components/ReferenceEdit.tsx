import React from 'react'
import ReferenceLabelEdit from './ReferenceLabelEdit'
import ReferenceCommentEdit from './ReferenceCommentEdit'
import { useReferences } from './App'
import {v4 as uuidv4} from 'uuid'

export default function ReferenceEdit() {
  const { 
    selectedReference, 
    handleReferenceChange, 
    handleReferenceDelete,
    handleReferenceDeselect
  } = useReferences()

  if (selectedReference === undefined) {
    return null
  }

  function handleChange(changes) {
    handleReferenceChange(selectedReference.id, { ...selectedReference, ...changes })
  }

  function handleLabelChange(id, label) {
    const newLabels = [...selectedReference.labels]
    const index = newLabels.findIndex(label => label.id === id)
    newLabels[index] = label
    handleChange({ labels: newLabels })
  }

  const handleLabelAdd = () =>  {
    const newLabel = {
      id: uuidv4(),
      name: '',
      color: '',
    }
    handleChange({ labels: [...selectedReference.labels, newLabel]})
  }

  const handleLabelDelete = (id: string) => {
    handleChange({
      labels: selectedReference.labels.filter((label) => label.id !== id)
    })
  }

  function handleCommentChange(id, comment) {
    const newComments = [...selectedReference.comments]
    const index = newComments.findIndex(comment => comment.id === id)
    newComments[index] = comment
    handleChange({ comments: newComments })
  }

  const handleCommentAdd = () => {
    const newComment = {
      id: uuidv4(),
      user: '@cindy',
      content: ''
    }
    handleChange({ comments: [...selectedReference.comments, newComment]})
  }

  const handleCommentDelete = (id: string) => {
    handleChange({
      comments: selectedReference.comments.filter((comment) => comment.id !== id)
    })
  }

  return (
    selectedReference &&
    <div className="reference-edit">
      <div className="reference-edit__remove-button-container">
        <button 
          className="btn reference-edit__remove-button"
          onClick={handleReferenceDeselect}
        >
          &times;
        </button>
      </div>
      <div className="reference-edit__details-grid">
        <label 
          htmlFor="name"
          className="reference-edit__label">
          Name
        </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={selectedReference.name}
          onChange={e => handleChange({ name: e.target.value })}
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
          value={selectedReference.parent}
          onChange={e => handleChange({ parent: e.target.value })}
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
          value={selectedReference.date}
          onChange={e => handleChange({ date: e.target.value })}
          className="reference-edit__input" />
        <label 
          htmlFor="description"
          className="reference-edit__label">
          Description
        </label>
        <textarea 
          name="description" 
          id="description" 
          onChange={e => handleChange({ description: e.target.value })}
          value={selectedReference.description}
          className="reference-edit__input"/>
      </div>
      <br />
      <label className="reference-edit__label">Labels</label>
      <div className="reference-edit__label-grid">
        <div>Name</div>
        <div>Color</div>
        <div></div>
        {selectedReference.labels.map(label => (
           <ReferenceLabelEdit 
            handleLabelChange={handleLabelChange}
            handleLabelAdd={handleLabelAdd}
            handleLabelDelete={handleLabelDelete}
            key={label.id} 
            label={label}
          />
        ))}
      </div>
      <div className="reference-edit__add-label-btn-container">
        <button 
          className="btn btn--primary"
          onClick={() => handleLabelAdd()}
        >
          Add Label
        </button>
      </div>
      <br></br>
      <label className="reference-edit__comment">Comments</label>
      <div className="reference-edit__comment-grid">
        <div>User</div>
        <div>Content</div>
        <div></div>
        {selectedReference.comments.map(comment => (
          <ReferenceCommentEdit 
            handleCommentChange={handleCommentChange}
            handleCommentAdd={handleCommentAdd}
            handleCommentDelete={handleCommentDelete}
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
      <div className="reference-edit__add-comment-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleCommentAdd()}
        >
          Add Comment
        </button>
      </div>
      <div className="reference-edit__add-label-btn-container">
        <button 
          className="btn btn--danger"
          onClick={() => handleReferenceDelete(selectedReference.id)}
        >
          Archive
        </button>
      </div>
    </div>
  )
}
