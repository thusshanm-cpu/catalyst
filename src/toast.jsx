import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { Check, Zap, AlertTriangle, Link, Spark, Pencil, Target, X, Unlock, ArrowRight } from './components/icons.jsx'

const ToastContext = createContext(null)

/* toast icons are passed as legacy emoji keys — render crisp SVGs instead */
const TOAST_ICONS = {
  '⚡': Zap,
  '⚠️': AlertTriangle,
  '⚠': AlertTriangle,
  '🔗': Link,
  '🎭': Spark,
  '💡': Spark,
  '📝': Pencil,
  '🎯': Target,
  '✕': X,
  '✖': X,
  '🔓': Unlock,
  '↪': ArrowRight,
  '✓': Check,
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const toast = useCallback((message, icon = '✓') => {
    const id = ++idRef.current
    setToasts((t) => [...t, { id, message, icon }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3400)
  }, [])

  const value = useMemo(() => ({ toast }), [toast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-wrap">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <span className="t-ic">{(() => { const Ic = TOAST_ICONS[t.icon] || null; return Ic ? <Ic size={15} /> : <span style={{ fontSize: 15 }}>{t.icon}</span> })()}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
