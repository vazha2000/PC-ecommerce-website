import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Computers from './pages/Computers';
import Notebooks from './pages/Notebooks';
import Monitors from './pages/Monitors';
import ComputersDetailed from './pages/ComputersDetailed';
import NotebooksDetailed from './pages/NotebooksDetailed';
import MonitorsDetailed from './pages/MonitorsDetailed';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/computers' element={<Computers />} />
          <Route path='/computers-detailed/:id'  element={<ComputersDetailed />}/>
          <Route path='/notebooks' element={<Notebooks />}/>
          <Route path='/notebooks-detailed/:id' element={<NotebooksDetailed />} />
          <Route path='/monitors' element={<Monitors />}/>
          <Route path='/monitors-detailed/:id' element={<MonitorsDetailed />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
        
        
      </Router>
      
    </div>
  );
}

export default App;
