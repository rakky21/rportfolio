// import React, { useState } from 'react'
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Nav/>
      <main>
        <About/>
      </main>
    </div>
  );
}

export default App;