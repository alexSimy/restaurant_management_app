import { AppDispatch } from '..';
import { loginActions } from './login-slice';
import { notificationActions } from '../notification/notification-slice';
import Cookie from 'js-cookie';

export const checkLoginState = () => {
  const action = (dispatch: AppDispatch) => {
    const cookieToken = Cookie.get('token');
    if (cookieToken) {
      dispatch(loginActions.setToken(cookieToken));
    }
  };
  return action;
};

export const loginAction = (username: string, password: string) => {
  const action = async (dispatch: AppDispatch) => {
    const postLogin = async (
      username: string,
      password: string
    ): Promise<string> => {
      const reqBody = {
        username: username,
        password: password,
      };
      const data = JSON.stringify(reqBody);

      const url = 'http://localhost:5000/api/v1/users/login';
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch(url, {
        method: 'post',
        body: data,
        headers: headers,
      });
      if (!response.ok) {
        throw new Error('Could not find the user!');
      }
      const userData = await response.json();
      return userData;
    };

    try {
      const userDataToken = await postLogin(username, password);
      if (userDataToken) {
        dispatch(loginActions.setToken(userDataToken));
        Cookie.set('token', userDataToken);
        dispatch(
          notificationActions.setMessage({ status: null, message: null })
        );
      }
    } catch (err) {
      dispatch(
        notificationActions.setMessage({
          status: 'error',
          message: 'Could not find the user!',
        })
      );
    }
  };

  return action;
};

export const registerAction = (username: string, password: string) => {
  const action = async (dispatch: AppDispatch) => {
    const postLogin = async (
      username: string,
      password: string
    ): Promise<string> => {
      const reqBody = {
        username: username,
        password: password,
      };
      const data = JSON.stringify(reqBody);

      const url = 'http://localhost:5000/api/v1/users/register';
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const response = await fetch(url, {
        method: 'post',
        body: data,
        headers: headers,
      });
      if (!response.ok) {
        throw new Error('Could not find the user!');
      }
      const userData = await response.json();
      return userData;
    };

    try {
      const userDataToken = await postLogin(username, password);
      if (userDataToken) {
        dispatch(loginActions.setToken(userDataToken));
        Cookie.set('token', userDataToken);
        dispatch(
          notificationActions.setMessage({ status: null, message: null })
        );
      }
    } catch (err) {
      dispatch(
        notificationActions.setMessage({
          status: 'error',
          message: 'Could not register the user!',
        })
      );
    }
  };

  return action;
};

export const logoutAction = () => {
  const action = async (dispatch: AppDispatch) => {
    dispatch(loginActions.setToken(null));
    Cookie.remove('token');
  };
  return action;
};
