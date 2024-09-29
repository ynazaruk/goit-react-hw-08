import { configureStore } from'@reduxjs/toolkit';
import { persistStore, persistReducer } from'redux-persist';
import storage from'redux-persist/lib/storage';
import authReducer from'./auth/slice';
import contactsReducer from'./contacts/slice';
import filtersReducer from'./filters/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
export default store;