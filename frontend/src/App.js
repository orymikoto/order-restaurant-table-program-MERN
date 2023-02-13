// NPM package
import React from 'react';
import { Route, Routes } from 'react-router-dom'

// Import local pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import {Login, Register, Profile} from './pages/users'
import ChangePassword from './pages/users/components/ChangePassword';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/user/profile' element={<Profile />}/> 
      <Route path='/user/change-password' element={<ChangePassword />}/>
      <Route path='/menu' element={<Menu />} />
    </Routes>
   </div>
  );
}

export default App;
