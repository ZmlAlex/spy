import {createSlice} from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    loading: 'idle',
    playerCount: 3,
    timerCount: 3,
    package: {
      name: '',
      id: null,
      level: null,
      places: [],
    },
    language: null,
    tutorialIsRead: false,
  },
  reducers: {
    changeConfig(state, action) {
      state[action.payload.option] = action.payload.value;
    },
    resetConfig(state, action) {
      state.tutorialIsRead = false;
      state.language = null;
    },
  },
});

export const {changeConfig, resetConfig} = configSlice.actions;

export default configSlice.reducer;
