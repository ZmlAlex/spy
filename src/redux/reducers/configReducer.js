import {createSlice} from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    loading: 'idle',
    playerCount: 3,
    timerCount: 3,
    package: 'Базовый',
    tutorialIsRead: false,
  },
  reducers: {
    changeConfig(state, action) {
      state[action.payload.option] = action.payload.value;
    },
  },
});

export const {changeConfig} = configSlice.actions;

export default configSlice.reducer;
