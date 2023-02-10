// NPM package
import React from 'react';
import { Route, Routes } from 'react-router-dom'

// Import local pages
import Home from './pages/Home';
import {Login, Register, Profile} from './pages/users'

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/user/profile' element={<Profile />}/> 
    </Routes>
   </div>
  );
}

export default App;
