import React, { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useTapedSelector } from '../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
//import { useDispatch } from 'react-redux';
//import { AuthActionCreator } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTapedSelector((state) => state.auth);
  //const dispatch = useDispatch();
  const { logout } = useActions();
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item
                key={1}
                onClick={logout} //() => {dispatch(AuthActionCreator.logout()}
              >
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
export default Navbar;
