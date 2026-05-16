import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6a060615c83ba8ad9b3d249d.mockapi.io/',
  }),
  tagTypes: ['Songs'],
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: () => 'songs',
      providesTags: ['Songs'],
    }),
    postSongs: builder.mutation({
      query: ({ song, album, profileUrl, lyrics, artist }) => ({
        url: 'songs',
        method: 'POST',
        body: { song, album, profileUrl, lyrics, artist },
      }),
      invalidatesTags: ['Songs'],
    }),
    deleteSong: builder.mutation({
      query: (id) => ({
        url: `songs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Songs'],
    }),
    updateSongs: builder.mutation({
      query: ({ id, song, album, profileUrl, lyrics, artist, fav }) => ({
        url: `songs/${id}`,
        method: 'PUT',
        body: { song, album, profileUrl, lyrics, artist, fav },
      }),
      invalidatesTags: ['Songs'],
    }),
  }),
});

export const {
  useGetSongsQuery,
  usePostSongsMutation,
  useDeleteSongMutation,
  useUpdateSongsMutation,
} = apiSlice;
