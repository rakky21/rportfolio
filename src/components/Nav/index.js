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

  return (
    <header className="flex-row px-1" style={{ background: "grey" }} class="nav">

      <h2>
        <a href='/'>
          Snap
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
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
