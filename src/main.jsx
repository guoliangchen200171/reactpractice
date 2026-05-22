import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupMockApi } from './api/setupMock'
import './index.css'
import App from './App.jsx'

// 启动前挂上本地 mock，后面写的 api.get / api.post 都会走这里
setupMockApi()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
