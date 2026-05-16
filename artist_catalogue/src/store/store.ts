import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './features/popup/popup.slice';
import { apiSlice } from './features/api/apiSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
