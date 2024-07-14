import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'smoothscroll-polyfill';

// Optionally, apply the polyfill globally
window.__forceSmoothScrollPolyfill__ = true;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
