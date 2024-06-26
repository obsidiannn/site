import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NongDa from './pages/nongda/index.tsx'
import './index.css'
import 'virtual:uno.css'
import './locale/index'; // 国际化

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NongDa />
  </React.StrictMode>,
)
