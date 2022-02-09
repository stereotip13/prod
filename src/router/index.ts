import React from 'react';
import {Login} from "../pages/Login.js";
//import {Event} from "../pages/Event";

export interface IRoute {
    path: string;
    element: React.ComponentType;
    exact?: boolean;
}
export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}
export const publicRoutes = [
    {path: "/login", element: {Login}}

]
//export const privateRoutes = [
  //  {path: "/event", element: <Event />}
//]