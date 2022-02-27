import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  // const {
  // categories = [],
  // setCurrentCategory,
  // contactSelected,
  // currentCategory,
  // setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory);
  // }, [currentCategory]);

  function categorySelected(){
    console.log("hello")
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
            <a href='#about'>
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>

          {categories.map((category) => (
            <li
              className='mx-1'
              key={category.name}>

              <span onClick={() => categorySelected(category)}>
                {category.name}
              </span>
            </li>
          ))}

          <li>
            <a>Resume</a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
