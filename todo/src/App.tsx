import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,Routes} from 'react-router-dom'
import Home from './Page/Home/Home'

function App() {


  return (
    
     <Routes>
      <Route path='/'element={<Home/>}></Route>
     </Routes>
    
  )
}

export default App
