import { createSlice } from '@reduxjs/toolkit';

const initState: { message: string | null; status: string | null } = {
  message: null,
  status: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initState,
  reducers: {
    setMessage(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
