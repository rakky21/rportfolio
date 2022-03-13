import React from 'react';
import coverImage from '../../assets/cover/milkyway.jpg';
function About() {
  return (
    <section className="my-5"  >
      <h1 id="about" >Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
          This is my profile! 
        </p>
      </div>
    </section>
  );
}

export default About;
