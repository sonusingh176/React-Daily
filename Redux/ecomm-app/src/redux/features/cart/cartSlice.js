import { createSlice } from '@reduxjs/toolkit'

const initialCartState  = {
    cart:[],
  }

  const cartSlice = createSlice({
    name: 'cart',
    initialState : initialCartState  ,
    reducers: {
      addToCart:(state,action)=>{
        //add qty property
        action.payload.qty=1
        state.cart.push(action.payload);

      },

      IncreaseQty:(state,action)=>{
        // console.log(action.payload);
        let id=action.payload;
        let currentProduct= state.cart.find(item=>item.id ===id)
        currentProduct.qty  = currentProduct.qty + 1;      
      },
      decrementQty:(state,action)=>{
        let id=action.payload;
        let currentProduct= state.cart.find(item=>item.id ===id)
        currentProduct.qty =currentProduct.qty-1;

      },
      

      removeFromCart:(state,action)=>{

      },
    } 

})


export const {addToCart,removeFromCart,IncreaseQty,decrementQty} =cartSlice.actions;

export default cartSlice.reducer;

