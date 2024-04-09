import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi =createApi({
    reducerPath:'shopApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.escuelajs.co/api/v1'}),
    endpoints:(builder)=>({
        getWholeProduct : builder.query({
            query:()=>`/products`
        })

    })
})

export const  {useGetWholeProductQuery} = shopApi

