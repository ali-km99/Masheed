export interface Product {
  name: string
  title: string
  type: string[]
  img: string
  text: string
}

export interface ProductCategory {
  id: string
  mainImg: string
  name: string
  text: string
  products: Product[]
}
