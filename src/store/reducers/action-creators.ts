import { AuthActionCreator } from './auth/action-creators';
import { EventActionCreators } from './event/action-creators';

export const AllActionCreators = {
  //разворачиваем обобщающий объект, в который помещаем те экшн криэйторы, которые уже созданы
  ...AuthActionCreator,
  ...EventActionCreators,
};
