import React, { FC, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { rules } from '../utils/rules';
//import { useDispatch } from 'react-redux';
//import { AuthActionCreator } from '../store/reducers/auth/action-creators';
import { useTapedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const LoginForm: FC = () => {
  const { error, isLoading } = useTapedSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions();
  //const dispatch = useDispatch();

  const onFinish = () => {
    login(username, password);
    // dispatch(AuthActionCreator.login(username, password));
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
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label="Логин"
        name="username"
        rules={[rules.required('Введите логин')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль')]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
