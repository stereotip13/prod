import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTapedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTapedSelector((state) => state.event);
  const { user } = useTapedSelector((state) => state.auth);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);
  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };
  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
