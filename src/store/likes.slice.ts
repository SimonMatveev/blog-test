import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILikeState, TLikeSet } from '../types/types';
import { getRandomN } from '../utils/functions';

const initialState: ILikeState = {};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<TLikeSet>) => {
      const { id } = payload;
      state[id] = {
        likes: getRandomN(50),
        dislikes: getRandomN(50),
        liked: 0,
      };
    },
    like: (state, { payload }: PayloadAction<number>) => {
      if (!state[payload]) return;
      if (state[payload].liked === 1) {
        state[payload].likes--;
        state[payload].liked = 0;
      } else {
        state[payload].likes++;
        if (state[payload].liked === -1) state[payload].dislikes--;
        state[payload].liked = 1;
      }
    },
    dislike: (state, { payload }: PayloadAction<number>) => {
      if (!state[payload]) return;
      if (state[payload].liked === -1) {
        state[payload].dislikes--;
        state[payload].liked = 0;
      } else {
        state[payload].dislikes++;
        if (state[payload].liked === 1) state[payload].likes--;
        state[payload].liked = -1;
      }
    },
  },
});

export const { actions: likesActions, reducer: likesReducer } = likesSlice;
