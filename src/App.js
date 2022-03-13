import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const categories = [
  'portfolio' , 'about', 'contact Form', 'project'
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
    else if (currentCategory === "project") {
      return <Projects currentCategory={currentCategory}></Projects>
    }
  }
  
  return (
    <div>
      <Nav 
      categories={categories}
      currentCategory={currentCategory} 
      setCurrentCategory={setCurrentCategory}
  // setContactSelected={setContactSelected}
       ></Nav>
      <main>
        {/* <Projects></Projects>
        <About></About> */}
        {showPage()} 
      </main>
    </div>
  );
}

export default App;