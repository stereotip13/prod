import React, { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useTapedSelector } from '../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTapedSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>Sasha</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key={1} onClick={() => console.log('Выйти')}>
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
