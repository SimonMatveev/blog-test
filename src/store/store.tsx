import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { storeApi } from './api/storeApi';
import { likesReducer } from './likes.slice';
import { searchReducer } from './search.slice';

const reducers = combineReducers({
  [storeApi.reducerPath]: storeApi.reducer,
  likes: likesReducer,
  search: searchReducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
