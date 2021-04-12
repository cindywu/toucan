import React, { useState } from 'react'
import ReferenceList from './ReferenceList'
import NavigationSidebar from './NavigationSidebar'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [references, setReferences] = useState(sampleReferences)
  
  function handleReferenceAdd() {
    const newReference = {
      id: uuidv4(),
      name: 'New',
      parent: 'Parent',
      date: 'date',
      description:'description',
      labels: [
        {
          id: uuidv4(),
          name: 'name',
          color: 'color'
        }
      ]
    }
    setReferences([...references, newReference])
  }

  function handleReferenceDelete(id) {

    setReferences(references.filter(reference => reference.id !== id))
  }

  return (
    <div className="app-container">
      <NavigationSidebar />
      <ReferenceList 
        references={references}
        handleReferenceAdd={handleReferenceAdd}
        handleReferenceDelete={handleReferenceDelete}
      />
    </div>
  )
}

const sampleReferences = [
  {
    id: 1,
    name: 'Clery 2013',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 1,
        name: 'Book',
        color: '#D8EDF2'
      },
      {
        id: 2,
        name: 'Missing',
        color: '#DB615D'
      }
    ]
  },
  {
    id: 2,
    name: 'Bromberg 1982',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 2,
        name: 'Missing',
        color: '#DB615D'
      }
    ]
  },
  {
    id: 3,
    name: 'Wurden 2016',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 3,
        name: 'Journal article',
        color: '#EDC963'
      }
    ]
  },
  {
    id: 4,
    name: 'Kirpatrick 1995',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 3,
        name: 'Journal article',
        color: '#EDC963'
      }
    ]
  },
  {
    id: 5,
    name: 'Atzeni 2004',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 1,
        name: 'Book',
        color: '#D8EDF2'
      }
    ]
  }
]

export default App
