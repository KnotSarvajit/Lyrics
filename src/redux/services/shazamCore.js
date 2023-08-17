import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c8d4239becmsh894462841aeb492p147263jsn36dd92cb7d18');

            return headers;
        },
    }),

    endpoints: (builder) =>({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;