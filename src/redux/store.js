import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filtersReducer } from './filtersSlice';
import { usersReducer } from './usersSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const usersPersistConfig = {
//   key: 'users',
//   storage,
//   whitelist: ['items'],
// };
const filtersPersistConfig = {
    key: 'filters',
    storage,
  };

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);