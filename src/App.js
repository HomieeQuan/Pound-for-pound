// import { useState } from 'react';
import './App.css';
import './components/NavBar'
import './components/Fighter'

import React from 'react'
import NavBar from './components/NavBar';
import Fighter from './components/Fighter';
import FighterCard from './components/FighterCard';

function App() {
  return (
    <div>
      <section>
        <NavBar />
      </section>

      <div>
        <Fighter />
      </div>
      

    </div>
  )
}

export default App
