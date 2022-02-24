import React from 'react';
import coverImage from "../../assets/cover/milkyway.jpg"

function About() {
  return (
    <section className="my-5"  >
<h1 id="about">Who am I?</h1>

<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

<p> I am a person and I love to create and craft new things but I'm not the best at doing so. <br /> I'm at best average but what I do, it's always good.</p>
    </section>
  );
}

export default About;
