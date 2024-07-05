import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginState } from './store/login/login-actions';
import { RootState } from './store';
import { UnknownAction } from '@reduxjs/toolkit';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='App'>Starting ...</div>
    </>
  );
}

export default App;
