import React from 'react'

export const ToastContext = React.createContext({
  toasts: [],
  deleteToast: (_id) => void 0,
  pushToast: (_toast) => void 0
})
