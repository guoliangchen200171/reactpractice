import { BrowserRouter, Routes } from 'react-router-dom'
import { appRoutes } from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>{appRoutes}</Routes>
    </BrowserRouter>
  )
}

export default App
