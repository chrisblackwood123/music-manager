import { createSlice } from '@reduxjs/toolkit';

interface Artist {
    id: number;
    name: string;
  }
  

const artistSlice = createSlice({
  name: 'artists',
  initialState: [] as Artist[],
  reducers: {
    addArtist: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addArtist } = artistSlice.actions;
export default artistSlice.reducer;