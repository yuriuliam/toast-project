import React from 'react';

import Button from '../Button';
import { useToast } from '../ToastProvider';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { pushToast } = useToast()

  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])

  const handlePopToast = (evt) => {
    evt.preventDefault()

    if (!message || !variant) return

    pushToast({ message, variant })
    setMessage("")
    setVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>

          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              title='Toast Message'
              onChange={evt => setMessage(evt.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(variantOption => (
              <label htmlFor={`variant-${variantOption}`}>
                <input
                  id="variant-variant"
                  type="radio"
                  name="variant"
                  checked={variant === variantOption}
                  onChange={evt => setVariant(evt.target.value)}
                  value={variantOption}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>

      <div className={styles}></div>
    </div>
  );
}

export default ToastPlayground;
