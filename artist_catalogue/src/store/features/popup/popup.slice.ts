import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  isOpen: boolean;
  calledFrom: string;
  id: number | null;
}

const initialState: InitialState = {
  isOpen: false,
  calledFrom: '',
  id: null,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: { payload: InitialState }) => {
      state.isOpen = action.payload.isOpen;
      state.calledFrom = action.payload.calledFrom;
      state.id = action.payload.id ?? null;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.calledFrom = '';
      state.id = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
