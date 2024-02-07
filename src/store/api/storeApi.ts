import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetPostsArg, IPost } from '../../types/types';
import { URL_BASE_API } from '../../utils/config';
import { likesActions } from '../likes.slice';

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
        const { setInitial } = likesActions;
        const data = getCacheEntry().data;
        if (data) {
          data.forEach((post) => {
            if (!likeState[post.id]) {
              dispatch(setInitial({ id: post.id }));
            }
          });
        }
      },
    }),
    getPost: builder.query<IPost, string>({
      query: (postId) => `/posts/${postId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = storeApi;
