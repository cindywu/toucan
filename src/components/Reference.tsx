import React from 'react'
import LabelList from './LabelList'

export default function Reference(props) {
  const { 
    name, 
    parent, 
    tags, 
    date, 
    description,
    labels
  } = props

  return (
    <div>
      <div>
        <p>{name}</p>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Parent:</span>
        <span>{parent}</span>
      </div>
      <div>
        <span>Tags:</span>
        <span>{tags}</span>
      </div>
      <div>
        <span>Date:</span>
        <span>{date}</span>
      </div>
      <div>
        <span>Description:</span>
        <span>{description}</span>
      </div>
      <div>
        <span>Labels:</span>
        <div>
          <LabelList labels={labels}/>
        </div>
      </div>
    </div>
  )
}
