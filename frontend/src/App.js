// NPM package
import React from 'react';
import { Route, Routes } from 'react-router-dom'

// Import local pages
import Home from './pages/Home';
import Login from './pages/users/Login';
import Register from './pages/users/Register'

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
   </div>
  );
}

export default App;
