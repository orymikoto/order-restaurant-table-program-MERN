// NPM package
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';

// Import local pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Tables from './pages/table_orders/Tables';
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
      <Route path='/table' element={<Tables />} />
      <Route path='/About' element={<About />} />
    </Routes>
   </div>
  );
}

export default App;
