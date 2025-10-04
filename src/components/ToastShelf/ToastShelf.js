import React from 'react';

import Toast from '../Toast';
import { useToast } from '../ToastProvider';

import { useEscapeKey } from '../../hooks/useEscapeKey'

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { deleteToast, toasts } = useToast()

  useEscapeKey(() => {
    toasts.forEach(toast => {
      deleteToast(toast.id)
    })
  })

  return (
    <ol
      className={styles.wrapper}
      aria-live="polite"
      aria-label="Notification"
      role="region"
    >
      {toasts.map(toast => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast onClose={() => deleteToast(toast.id)} variant={toast.variant}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
