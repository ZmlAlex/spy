import {createSlice} from '@reduxjs/toolkit';

const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    slides: [
      {id: 1, role: 'spy', text: 'blabla'},
      {id: 2, role: 'player', text: ' player text'},
      {id: 3, role: 'third', text: 'blabla'},
      {id: 4, role: 'fourth', text: ' player text'},
    ],
  },
  reducers: {
    createSlides(state, action) {
      state.slides = action.payload;
    },
  },
});

export const {openModal, closeModal, createSlides} = rolesSlice.actions;

export default rolesSlice.reducer;
