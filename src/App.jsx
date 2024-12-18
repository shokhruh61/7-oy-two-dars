import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Api from './pages/Api'
import MainLayouts from './layouts/MainLayouts'
import Dark from './pages/Dark'
function App() {
  return (
    <div>

      <Routes>
        <Route path='/Todo' element={<MainLayouts><Todo></Todo></MainLayouts>}></Route>
        <Route path='/Api' element={<MainLayouts><Api></Api></MainLayouts>}></Route>
        <Route path='/Dark' element={<MainLayouts><Dark></Dark></MainLayouts>}></Route>
        <Route path='/' element={<MainLayouts><Home></Home></MainLayouts>}></Route>
      </Routes>
    </div>
  )
}

export default App