import {createSlice} from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'config',
  initialState: {
    isOpen: false,
    maxValue: 3,
    minValue: 3,
    mode: 'players',
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
    },
    closeModal(state, action) {
      state.isOpen = false;
    },
    changeMode(state, action) {
      state.maxValue = action.payload.maxValue;
      state.minValue = action.payload.minValue;
      state.mode = action.payload.mode;
    },
  },
});

export const {openModal, closeModal, changeMode} = modalSlice.actions;

export default modalSlice.reducer;
