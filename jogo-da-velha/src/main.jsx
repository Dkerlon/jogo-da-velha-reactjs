import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './pages/menu.jsx'
import Gameboard from './pages/gameboard.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='gameboard' element={<Gameboard/>}/>  
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
