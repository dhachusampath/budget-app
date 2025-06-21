import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Variation from './components/page-1/Variation1';
import Navbar1 from './components/page-1/Navbar1';
import About from './components/About/About';
import Why from './component-2/Why'
import './App.css';
const App = () =>{

return(
 <BrowserRouter>
 <nav>
 <Navbar1 />
 </nav>
 <Routes>
 <Route path="/" element={<Variation />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/why" element={<Why />}/>

 </Routes>
 <nav className='be'>
 <Navbar1 />
 </nav>
 </BrowserRouter>
)
  
}

export default App;