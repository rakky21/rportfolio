import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import ContactForm from './components/Contact';

function App() {
  const categories = [
  'portfolio' , 'about', 'contactform'
  ]
  const [currentCategory, setCurrentCategory] = useState (categories[0]) 
  const showPage = () => {
    if (currentCategory === 'portfolio') {
      return <Portfolio currentCategory={currentCategory}></Portfolio>
    }
    else if (currentCategory === 'about') {
      return <About></About>
    }
  }
  
  return (
    <div>
      <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} categories={categories} ></Nav>
      <main>
        {showPage()} 
      </main>
    </div>
  );
}

export default App;