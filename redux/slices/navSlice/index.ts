import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface NavStateType {
  origin?: string;
  destination?: string;
  travelTimeInformation?: number;
}

// Define the initial state using that type
const initialState: NavStateType = {};

export const navSlice = createSlice({
  name: 'nav',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTravelTimeInformation } =
  navSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
