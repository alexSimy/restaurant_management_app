import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/login-slice';
import notificationReducer from './notification/notification-slice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
