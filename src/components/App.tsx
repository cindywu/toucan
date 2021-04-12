import React from 'react'
import ReferenceList from './ReferenceList'
import NavigationSidebar from './NavigationSidebar'
import '../css/app.css'

function App() {
  return (
    <div className="app-container">
      <NavigationSidebar />
      <ReferenceList references={sampleReferences}/>
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
