import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: number
  name: string
  price: number
  image?: string
}

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }

      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      state.items = state.items.filter((item) => item.id !== productId)
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
