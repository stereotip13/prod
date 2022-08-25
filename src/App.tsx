import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/navbar';
import './App.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
const App: FC = () => {
  //ниже иммитация работы бекенда
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
