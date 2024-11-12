import {createSlice} from '@reduxjs/toolkit'

 export const alertSlice = createSlice({
    // A name, used in action types
    name: 'alerts',
    // The initial state for the reducer
    initialState:{
        loading: false,
    },
    reducers: {
        showLoading: (state) =>{
            state.loading = true
        },
        hideLoading: (state) =>{
            state.loading = false
        }
    }
})

export const  {showLoading,hideLoading} = alertSlice.actions;

// export default alertSlice.reducer