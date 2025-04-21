import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
export interface BurgerMenuState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: BurgerMenuState = {
  isOpen: false,
};

export const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
        state.isOpen = false;
      },
  },
});

export const { toggle, closeMenu } = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;

export const selectBurgerMenuIsOpen = (state: RootState) => state.burgerMenu.isOpen;
