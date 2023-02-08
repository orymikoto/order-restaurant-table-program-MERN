// NPM package
import { BrowserRouter, Route } from 'react-router-dom'

// Import local pages
import home from './pages/home';

import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={home}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
