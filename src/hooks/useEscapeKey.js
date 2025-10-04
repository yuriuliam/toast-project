import React from 'react';

export function useEscapeKey(onEscapeKeyDown) {
  React.useEffect(() => {
    const controller = new AbortController()

    function onKeyDown(evt) {
      if (evt.key === 'Escape') {
        onEscapeKeyDown()
      }
    }

    window.addEventListener('keydown', onKeyDown, {
      signal: controller.signal
    })

    return () => {
      controller.abort()
    }
  }, [onEscapeKeyDown])
}