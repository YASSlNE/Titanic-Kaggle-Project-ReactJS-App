import React from 'react';
import './App.css';
import Home from './components/Home'
import background from "./assets/titanic.jpg";

import Button from './components/Button';


function App() {



  const bgSettings={
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    opacity:'0.3'
  }


  return (
    
    <div className='min-h-screen bg-gradient-to-r from-cyan-900 to-red-500 bg-opacity-25' >
      <div className="min-h-screen">
        <Home />
        
        </div>
    </div>
  );
}

export default App;
