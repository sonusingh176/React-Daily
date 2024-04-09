import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'


const rootReducer = combineReducers({
    cart:cartReducer,
    
})

export const store = configureStore({
  reducer: {rootReducer},
})