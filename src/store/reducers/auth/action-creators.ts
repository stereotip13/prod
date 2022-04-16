import { AppDispatch } from './../../index';
import { IUser } from './../../../models/IUser';
import {
  SetUserAction,
  AuthActionEnum,
  SetAuthAction,
  SetIsLoadingACtion,
  SetErrorAction,
} from './types';
import axios from 'axios';

export const AuthActionCreator = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingACtion => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreator.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<IUser[]>('./user.json');
          const mocUsers = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mocUsers) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mocUsers.username);
            dispatch(AuthActionCreator.setIsAuth(true));
            dispatch(AuthActionCreator.setUser(mocUsers));
          } else {
            dispatch(
              AuthActionCreator.setError(
                'Произошла ошибка некорректный логин или пароль'
              )
            );
          }
          dispatch(AuthActionCreator.setIsLoading(false));
        }, 2000);
      } catch (e) {
        dispatch(AuthActionCreator.setError('Произошла ошибка при логине'));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    try {
    } catch (e) {}
  },
};
