import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginState } from './store/login/login-actions';
import { RootState } from './store';
import { UnknownAction } from '@reduxjs/toolkit';
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';
import Auth from './components/Auth/Auth';
import RestaurantManager from './components/RestaurantManager/RestaurantManager';
import { ApolloProvider } from '@apollo/client';
import { initApolloClientWithTokenValue } from './services/graphql-utils';

function App() {
  const authToken = useSelector((state: RootState) => state.login.token);
  const notification = useSelector((state: RootState) => state.notification);
  const graphqlClient = initApolloClientWithTokenValue();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginState() as unknown as UnknownAction);
  }, [dispatch]);

  return (
    <>
      <Header />
      {notification.status && notification.message && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}

      <div className='App'>
        {!authToken && <Auth />}
        {authToken && (
          <ApolloProvider client={graphqlClient}>
            <RestaurantManager />
          </ApolloProvider>
        )}
      </div>
    </>
  );
}

export default App;
