import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}

const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/'
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products'
    })
  })
})

export const { useGetProductsQuery } = productsApi
export default productsApi
