import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: `https://jsonplaceholder.typicode.com/`}),
    // tagTypes: ['Posts'],  for vw psts
    endpoints: (build)=>({
        getPosts: build.query({
            query: (limit = '') => `posts?${limit && `_limit=${limit}`}`,
        }),
        
        addPost: build.mutation({
            query: (body)=>({
                url: `posts`,
                method: `POST`,
                body,
            })
        })
    })
})

export const {useGetPostsQuery,useAddPostMutation} = postApi;