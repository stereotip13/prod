import React from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
}
export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/event',
}
export const publicRoutes = [{ path: RouteNames.LOGIN, element: Login }];
export const privateRoutes = [{ path: RouteNames.EVENT, element: Event }];
