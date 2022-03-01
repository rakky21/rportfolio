// import React, { useEffect } from 'react';
import React from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    // setCurrentCategory,
    // contactSelected,
    // currentCategory,
    // setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory);
  // }, [currentCategory]);

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header className="flex-row px-1" style={{ background: "silver" }} class="nav">
      <h2>
        <a href='/'>
          Portfolio
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a href='#about' onClick={() => categorySelected()}>
              About Me
            </a>
          </li>
          <li className={'mx-2'}>
            <span onClick={() => categorySelected()}> Contact </span>
          </li>
          {
          categories.map((category) => (
            <li className='mx-1' key={category.name}>
              <span onClick={() => { categorySelected(category); }}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
