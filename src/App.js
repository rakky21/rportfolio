import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const categories = useState [
  'portfolio' , 'about', 'contact Form'
  ]
  const [currentCategory, setCurrentCategory] = useState (categories[0]) 
  const showPage = () => {
    if (currentCategory === 'portfolio') {
      return <Portfolio currentCategory={currentCategory}></Portfolio>
    }
    else if (currentCategory === 'about') {
      return <About currentCategory={currentCategory}></About> 
    }
    else if (currentCategory === "contact") {
      return <Contact currentCategory={currentCategory}></Contact>
    }
  }
  
  return (
    <div>
      <Nav 
  //     currentCategory={currentCategory} 
  //     setCurrentCategory={setCurrentCategory} 
  //     categories={categories}
  // setContactSelected={setContactSelected}
       ></Nav>
      <main>
        {showPage()} 
      </main>
    </div>
  );
}

export default App;