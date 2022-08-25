import { Card, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: '0 20%', marginTop: 200 }}
      >
        <Row
          className="site-layout-background"
          style={{ padding: 40, minHeight: 280 }}
        >
          <Card>
            <LoginForm />
          </Card>
        </Row>
      </Content>
    </Layout>
  );
};
export default Login;
