import {combineReducers, configureStore} from '@reduxjs/toolkit';
import configSlice from '../reducers/configReducer';

const rootReducer = combineReducers({
  conifg: configSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
