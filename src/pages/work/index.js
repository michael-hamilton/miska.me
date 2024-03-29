// Work page

import { Card } from '../../components';
import workProjectsList from '../../work/index.js';
import './style.scss';

const Work = () => (
  <div class='container'>
    <section>
      <div class='section-header'>
        <h1 class='section-title'>Work</h1>
      </div>

      <p>
        I have worked in some professional capacity as a programmer since 2010.
        While I've touched many sorts of tech during my career, my interest and focus has been with web technologies.
        My career history is diverse working with both commercial and non-profit organizations, and also independently as a freelancer.
        My various roles have given me unique professional opportunities beyond software engineering such as working with audio visual technology in both live and studio production environments (my particular expertise is in stage lighting).
        I've also got professional experience working in music, IT, large event coordination, and building design/construction projects.
      </p>

      <p>
        I'm a 90's kid - I'm thankful to have been around for the advent of the web as we know it.
        My passion for web tech can without a doubt can be attributed to growing up on dial-up internet, writing CSS for my Myspace page, and finding new ways to connect online.
        When it comes to software engineering I'm technology agnostic, though most of my expertise is related to web technologies.
        I have extensive Javascript expertise and especially enjoy working with React, React Native, Electron, and Node.
        Of course, I've also got strong web fundamentals with HTML, and CSS.
        The nature of my recent work is focused on music composition, sound design, and interactive dynamic audio using tools like FMOD in C++.
      </p>

      <p>
        See my <a href='../../static/files/resume.pdf' class='link-highlight'>resum&eacute;</a> if you want to know more about my past work.
      </p>

      <p>
        Please feel free to <a href="mailto:work@miska.me" className="link-highlight">write me</a> if you'd like to speak with me!
      </p>
    </section>

    <section>
      <div class='section-header'>
        <h1 class='section-title'>Professional Projects</h1>
      </div>

      <p>I've worked on a number of projects over my career, here are just a few which I'm able to share.</p>

      <br/>

      <div class='card-section-wrapper'>
        { renderCardsGrid(workProjectsList) }
      </div>
    </section>
  </div>
);


// Accepts a list of project objects and returns a list of Card components
const renderCardsGrid = (projects) => {
  return projects.map((project) => {
    return <Card
      key={project.name}
      name={project.name}
      description={project.description}
      image={project.image}
      buttons={project.buttons}
    />;
  });
};

export default Work;
