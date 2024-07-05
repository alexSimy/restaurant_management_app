import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initState: { token: string | null } = { token: null };

const loginSlice = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
