import {createSlice} from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    loading: 'idle',
  },
  reducers: {
    addConfig(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    changeConfig(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.users = action.payload;
      }
    },
  },
});

export const {addConfig, changeConfig} = configSlice.actions;

export default configSlice.reducer;
