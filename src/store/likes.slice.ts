import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EReactions, ILikeState, TLikeSet } from '../types/types';

const initialState: ILikeState = {};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setInitial: (state, { payload }: PayloadAction<TLikeSet>) => {
      const { id, likes, dislikes } = payload;
      state[id] = {
        values: {
          [EReactions.LIKES]: likes,
          [EReactions.DISLIKES]: dislikes,
        },
        currentState: EReactions.NONE,
      };
    },
    setReaction: (
      state,
      { payload }: PayloadAction<{ id: number; type: EReactions }>
    ) => {
      const { id, type } = payload;
      if (!state[id]) return;

      if (state[id].currentState === type) {
        state[id].values[type]!--;
        state[id].currentState = EReactions.NONE;
      } else {
        state[id].values[type]!++;
        if (state[id].currentState !== EReactions.NONE)
          state[id].values[state[id].currentState]!--;
        state[id].currentState = type;
      }
    },
  },
});

export const { actions: likesActions, reducer: likesReducer } = likesSlice;
