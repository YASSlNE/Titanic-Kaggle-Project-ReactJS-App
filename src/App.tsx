import React from 'react';
import './App.css';
import Home from './components/Home'
import background from "./assets/titanic2.jpg";

import Button from './components/Button';


function App() {



  const bgSettings={
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  }


  return (
    
    <div className='min-h-screen bg-gradient-to-r from-cyan-900 to-red-500 bg-opacity-25' style={bgSettings} >
      <div className="min-h-screen">
        <Home />
        
        </div>
    </div>
  );
}

export default App;
