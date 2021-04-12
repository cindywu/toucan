export interface IReference {
  id: string
  name: string
  parent: string
  description: string
  labels: Array<ILabel>
  date: string
}

export interface ILabel {
  id: string
  name: string
  color: string
}