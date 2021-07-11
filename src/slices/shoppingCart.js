import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    // increment: (state) => {
    //  state.items += 1
    // },

    //👆 For Reference of How a Reducer is...
  },
})

// export const { increment } = shoppingCartSlice.actions


// 👆For Reference of How to export a reducer is...

export const selectCount = (state) => state.shoppingCart.items

export default shoppingCartSlice.reducer
