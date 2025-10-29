import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import NavBar from "./Components/Navigation/NavBar";
import NavTab from "./Components/Navigation/NavTab";



function App() {


  return (
    <div className='text-white'>
      
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/navTab' element={<NavTab/>}/>
      </Routes>

    </div>
  )
}

export default App