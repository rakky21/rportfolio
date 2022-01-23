import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory)}</h1>
      {/* <p>{currentCategory.description}</p> */}
    </section>
  );
}
export default Portfolio;
