// NPM package
import React from 'react';
import { Route, Routes } from 'react-router-dom'

// Import local pages
import Home from './pages/Home';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
   </div>
  );
}

export default App;
