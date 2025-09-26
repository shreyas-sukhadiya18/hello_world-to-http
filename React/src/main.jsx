import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import '../practice/card component/index.css'
import App from './App.jsx'
// import App from '../practice/card component/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
