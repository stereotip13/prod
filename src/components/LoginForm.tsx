import React, { FC } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreator } from '../store/reducers/auth/action-creators';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const onFinish = () => {
    dispatch(AuthActionCreator.login('user', '123'));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[rules.required('Введите логин')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль')]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
