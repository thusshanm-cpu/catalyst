import { StoreProvider, useStore } from './store.jsx'
import { ToastProvider } from './toast.jsx'
import Landing from './views/Landing.jsx'
import Onboarding from './views/Onboarding.jsx'
import Dashboard from './views/Dashboard.jsx'
import Session from './views/Session.jsx'
import PostSession from './views/PostSession.jsx'
import Profile from './views/Profile.jsx'

function Router() {
  const { state } = useStore()
  switch (state.view) {
    case 'onboarding':
      return <Onboarding />
    case 'dashboard':
      return <Dashboard />
    case 'session':
      return <Session />
    case 'post':
      return <PostSession />
    case 'profile':
      return <Profile />
    default:
      return <Landing />
  }
}

export default function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <div className="page-glow" />
        <div className="app">
          <Router />
        </div>
      </ToastProvider>
    </StoreProvider>
  )
}
