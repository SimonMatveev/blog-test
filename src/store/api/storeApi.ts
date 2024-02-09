import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetPostArg, IGetPostsArg, IPost } from '../../types/types';
import { URL_BASE_API } from '../../utils/config';
import { setLikeState } from '../../utils/functions';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_BASE_API,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], IGetPostsArg>({
      query: ({ title }) => {
        return {
          url: title ? `/posts?title=${title}` : '/posts',
        };
      },
      async onCacheEntryAdded(
        { state: likeState },
        { dispatch, getCacheEntry, cacheDataLoaded }
      ) {
        await cacheDataLoaded;
        const data = getCacheEntry().data;
        if (data) {
          data.forEach((post) => {
            setLikeState(post, likeState, dispatch);
          });
        }
      },
    }),
    getPost: builder.query<IPost, IGetPostArg>({
      query: ({ id }) => `/posts/${id}`,
      async onCacheEntryAdded(
        { state: likeState },
        { dispatch, getCacheEntry, cacheDataLoaded }
      ) {
        await cacheDataLoaded;
        const data = getCacheEntry().data;
        setLikeState(data, likeState, dispatch);
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = storeApi;
