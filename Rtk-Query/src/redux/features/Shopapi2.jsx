import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shopApi2= createApi({
    reducerPath:'shopApi2',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints:(builder)=>({
        getProduct:builder.query({
            query:()=>`/products`
        })
    })
})

export const  {useGetProductQuery} =shopApi2