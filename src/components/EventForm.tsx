import { DatePicker, Form, Input, Row, Button, Select } from 'antd';
import React, { FC, useState } from 'react';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { rules } from '../utils/rules';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useTapedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);
  const { user } = useTapedSelector((state) => state.auth);
  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) }); //дата приводится к типу для обработки
    }
  };
  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  };
  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Название события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[
          rules.required(),
          rules.isDateAfter('Нельзя создавать событие в прошлом'),
        ]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item label="Пользователь" name="guests" rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="center">
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
export default EventForm;
