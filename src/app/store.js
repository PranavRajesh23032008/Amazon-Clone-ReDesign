import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from '../slices/shoppingCart'

 const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
})

export { store }
