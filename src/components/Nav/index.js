import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    // contactSelected,
    currentCategory,
    // setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1" style={{ background: "grey" }} class="nav">
      <h2 class="nav-item">
        <a data-testid="link" class='"nav-link"' href="/"> 
          <span ></span> My Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory === category && 'navActive'
                }`}
              key={category}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  // setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
