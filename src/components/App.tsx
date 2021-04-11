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
    tags: 'book, missing',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 1,
        name: 'Book',
        color: 'blue'
      },
      {
        id: 2,
        name: 'Missing',
        color: 'red'
      }
    ]
  },
  {
    id: 2,
    name: 'Bromberg 1982',
    parent: 'Wurzel 202X',
    tags: 'missing',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 2,
        name: 'Missing',
        color: 'red'
      }
    ]
  },
  {
    id: 3,
    name: 'Wurden 2016',
    parent: 'Wurzel 202X',
    tags: 'journal article',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 3,
        name: 'Journal article',
        color: 'yellow'
      }
    ]
  },
  {
    id: 4,
    name: 'Kirpatrick 1995',
    parent: 'Wurzel 202X',
    tags: 'journal article',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 3,
        name: 'Journal article',
        color: 'yellow'
      }
    ]
  },
  {
    id: 5,
    name: 'Atzeni 2004',
    parent: 'Wurzel 202X',
    tags: 'book',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 1,
        name: 'Book',
        color: 'blue'
      }
    ]
  }
]

export default App
