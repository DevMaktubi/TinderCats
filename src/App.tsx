import React, {useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Homepage } from './components/Homepage';
import { MyCats } from './components/MyCats';
import { Sidebar } from './components/Sidebar';
import { Global } from './styles/Global';

function App() {
  const [favCats, setFavCats] = useState([])

  return (
    <div className="App" style={{display:"flex", overflowX: 'hidden'}}>
      <Router>
        <Global />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage favCats={favCats} setFavCats={setFavCats} />} />
          <Route path="/mycats" element={<MyCats favCats={favCats} setFavCats={setFavCats}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
