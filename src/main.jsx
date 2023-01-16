import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { UserDataProvider } from './providers/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </React.StrictMode>,
)
