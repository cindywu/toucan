import React, { useState, createContext, useContext, useEffect } from 'react'
import ReferenceList from './ReferenceList'
import NavigationSidebar from './NavigationSidebar'
import ReferenceEdit from './ReferenceEdit'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
import { IReference } from './core'

interface References extends Array<IReference>{}

type ReferencesContextType = {
  references: References
  selectedReference: IReference | undefined
  handleReferenceAdd: () => void
  handleReferenceDelete: (id: string) => void
  handleReferenceSelect: (id: string) => void
  handleReferenceDeselect: () => void
  handleReferenceChange: (id: string, reference: IReference) => void
}

const defaultContextValue = {
  references: [],
  selectedReference: undefined,
  handleReferenceAdd: () => {},
  handleReferenceDelete: (id: string) => {},
  handleReferenceSelect: (id: string) => {},
  handleReferenceDeselect: () => {},
  handleReferenceChange: (id: string, reference: IReference) => {}
}

const ReferencesContext = createContext<ReferencesContextType>(defaultContextValue)

type Props = {
  children: React.ReactNode
}

const LOCAL_STORAGE_KEY = 'toucan.references'

export const ReferenceProvider = ({ children }: Props) => {
  const [references, setReferences] = useState(sampleReferences)
  const [selectedReferenceId, setSelectedReferenceId] = useState()

  const selectedReference = references.find(reference => reference.id === selectedReferenceId)

  useEffect(() => {
    const referenceJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (referenceJSON != null) setReferences(JSON.parse(referenceJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(references))
  }, [references])

  function handleReferenceSelect(id) {
    setSelectedReferenceId(id)
  }

  function handleReferenceDeselect() {
    setSelectedReferenceId(undefined)
  }

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
      ],
      comments: [
        {
          id: uuidv4(),
          user: '@cindy',
          content: 'i am a comment'
        }
      ]
    }
    setSelectedReferenceId(newReference.id)
    setReferences([...references, newReference])
  }

  function handleReferenceChange(id, reference) {
    const newReferences = [...references]
    const index = newReferences.findIndex(r => r.id === id)
    newReferences[index] = reference
    setReferences(newReferences)
  }

  function handleReferenceDelete(id) {
    setReferences(references.filter(reference => reference.id !== id))
  }

  return (
    <ReferencesContext.Provider value={{
      references,
      selectedReference,
      handleReferenceAdd,
      handleReferenceDelete,
      handleReferenceSelect,
      handleReferenceDeselect,
      handleReferenceChange
    }}>
      {children}
    </ReferencesContext.Provider>
  )
}

export const useReferences = () => useContext(ReferencesContext)

function App() {
  return (
    <ReferenceProvider>
      <div className="app-container">
        <NavigationSidebar />
        <ReferenceList />
        <ReferenceEdit />
      </div>
    </ReferenceProvider>
  )
}

const sampleReferences = [
  {
    id: '6fb78320-ecf8-48c8-bcf0-23251a5d26cb',
    name: 'Clery 2013',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: '8ae7634b-52b0-4f29-bad1-33108b22fdba',
        name: 'Book',
        color: '#D8EDF2'
      },
      {
        id: 'c1519e4a-ebee-4c96-94fd-c79566c5c30e',
        name: 'Missing',
        color: '#DB615D'
      }
    ],
    comments: [
      {
        id: '9d2e85a5-7448-4b1d-ae7b-eb5fa08060a4',
        user: '@cindy',
        content: 'why are we reading this?'
      }
    ]
  },
  {
    id: 'd7d2b2bb-82dd-49a6-b599-1908e4369cfa',
    name: 'Bromberg 1982',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 'f4f2cc13-4147-40cb-8cd0-c1b00b9a3257',
        name: 'Missing',
        color: '#DB615D'
      }
    ],
    comments: [
      {
        id: '48a799bc-979a-4d9e-a5f3-357e8ad03b69',
        user: '@cindy',
        content: 'why are we reading this?'
      }
    ]
  },
  {
    id: 'caf4d6a7-7800-4a14-8bbe-84313fc6f738',
    name: 'Wurden 2016',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: '0a94716d-842d-4477-b344-8d97cc1e6299',
        name: 'Journal article',
        color: '#EDC963'
      }
    ],
    comments: [
      {
        id: '82e49ac5-a8da-4297-ba8e-04c12326f994',
        user: '@cindy',
        content: 'why are we reading this?'
      }
    ]
  },
  {
    id: '9abab388-7f2a-4f0a-b826-137ca6c6669b',
    name: 'Kirpatrick 1995',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: '9dbea036-6777-4913-9894-561a64d7f105',
        name: 'Journal article',
        color: '#EDC963'
      }
    ],
    comments: [
      {
        id: 'fed8a7dd-75eb-4c6d-a787-13e6aeab478d',
        user: '@cindy',
        content: 'why are we reading this?'
      }
    ]
  },
  {
    id: '6082d45d-bca3-4919-96a7-6c5b7d04be8a',
    name: 'Atzeni 2004',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
    labels: [
      {
        id: 'b2635bb6-ed76-4de2-ad72-7e245a696f09',
        name: 'Book',
        color: '#D8EDF2'
      }
    ],
    comments: [
      {
        id: 'b9fcd023-7453-4422-a25c-1cf3c1db45f3',
        user: '@cindy',
        content: 'why are we reading this?'
      }
    ]
  }
]

export default App
