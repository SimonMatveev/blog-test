import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const searchSlice = createSlice({
  name: 'taskMenuActive',
  initialState,
  reducers: {
    setSearch: (state, { payload }: { payload: string }) => {
      state.value = payload;
    },
    resetSearch: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;
