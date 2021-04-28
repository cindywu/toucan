export interface IReference {
  id: string
  name: string
  parent: string
  date: string
  description: string
  labels: Array<ILabel>
  comments: Array<IComment>
}

export interface ILabel {
  id: string
  name: string
  color: string
}

export interface IComment {
  id: string
  user: string
  content: string
}