import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useTapedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter = () => {
  const { isAuth } = useTapedSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.EVENT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
    </Routes>
  );
};
export default AppRouter;
