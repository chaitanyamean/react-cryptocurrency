// headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '4dc620da8bmshcb2eef6a3af7c02p1f47f7jsne3f4930f882b'
//   }
// url: 'https://bing-news-search1.p.rapidapi.com/news
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '4dc620da8bmshcb2eef6a3af7c02p1f47f7jsne3f4930f882b'
    
}
 
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
