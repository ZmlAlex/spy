import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer,
} from 'react-redux-i18n';

import AsyncStorage from '@react-native-community/async-storage';
import configSlice from '../reducers/configReducer';
import modalSlice from '../reducers/modalReducer';
import rolesSlice from '../reducers/rolesReducer';

import {translationsObject} from '../../languages';

const rootReducer = combineReducers({
  config: configSlice,
  modal: modalSlice,
  roles: rolesSlice,
  i18n: i18nReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['i18n', 'roles'], // languages will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
});

syncTranslationWithStore(store);
const persistor = persistStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));

export {store, persistor};
