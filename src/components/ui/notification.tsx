import classes from '@/styles/notification.module.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { Notification } from '@/models';

interface NotificationProps {
  item: Notification;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { title, message, status } = props.item;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const element = document.getElementById('notifications');

  if (!element) {
    return;
  }

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), element);
}

export default Notification;
