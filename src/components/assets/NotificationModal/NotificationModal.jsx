import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import styles from './NotificationModal.module.css';

const NotificationModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles['notification']}>
      <p>{message}</p>
    </div>,
    document.getElementById('portal-root')
  );
};

export default NotificationModal;
