export interface Products {
  id?: string,
  name: string,
  image: string,
  description?: string,
  status: string,
  price: number,
  color: string
}

export interface AddCart extends Products {
  quantity: number
}
