import React from 'react'

import { ToastContext } from './ToastContext'

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([])
  
  const deleteToast = (id) => {
    setToasts(oldToasts => oldToasts.filter(t => t.id !== id))
  }

  const pushToast = React.useCallback(({ message, variant }) => {
    const id = Math.random()

    setToasts(oldToasts => [...oldToasts, { id, message, variant }])
  }, [])

  return (
    <ToastContext.Provider value={{ deleteToast, pushToast, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return React.useContext(ToastContext)
}

export default ToastProvider
