// Work page

import { Card } from '../../components';
import workProjectsList from '../../work/index.js';
import '../page.scss';

const Work = () => (
  <div className='container'>
    <div>
      <div className='page-header'>
        <h1 className='page-title'>Work</h1>
      </div>

      <p className='text-center'>
        I have worked in some professional capacity as a programmer since 2010.
        While I've touched many sorts of tech during my career, my interest and focus has been with web technologies.
        Presently, I am a software engineer at <a href="https://msquarehealthcare.com/" className="text-surf">MSquare Healthcare</a> in Baltimore, MD (USA) where we develop a world class digital therapy video game.
        My specific focus here is on engineering tools which enable effective delivery of this novel therapy, using both hardware and software to encourage patients and therapists alike to make the most of the platform.
        I am also a collaborator with the <a href='https://www.hopkinsmedicine.org/neurology_neurosurgery/research/labs/kata_studio/team.html' className="text-surf">Kata Design Studio</a> at Johns Hopkins Medical Institute, where a diverse team from many disciplines designs innovative ways to improve patient care and therapist experiences.
      </p>

      <p className='text-center'>
        My career history is diverse working with both commercial and non-profit organizations, and also independently as a freelancer.
        My various roles have given me unique professional opportunities beyond software engineering such as working with audio visual technology in both live and studio production environments (my particular expertise is in stage lighting).
        I've also got professional experience working in music, IT, large event coordination, and building design/construction projects.
      </p>

      <p className='text-center'>
        I'm a 90's kid - I'm thankful to have been around for the advent of the web as we know it.
        My passion for web tech can without a doubt can be attributed to growing up on dial-up internet, writing CSS for my Myspace page, and finding new ways to connect online.
        When it comes to software engineering I'm technology agnostic, though most of my expertise is related to web technologies.
        I have extensive Javascript expertise and especially enjoy working with React, React Native, Electron (more recently, Tauri), and Node.
        Of course, I've also got strong web fundamentals with HTML, and CSS.
      </p>

      <p className='text-center'>
        See my <a href='../../static/files/resume.pdf' className='text-surf'>resum&eacute;</a> if you want to know more.
      </p>
    </div>

    <br />

    <div>
      <h1 className='main-heading text-center'>Professional Projects</h1>

      <hr/>

      <p className='text-center'>I've worked on a number of projects over my career, here are just a few which I'm able to share.</p>

      <br/>

      <div className='card-section-wrapper'>
        { renderCardsGrid(workProjectsList) }
      </div>
    </div>
  </div>
);


// Accepts a list of project objects and returns a list of Card components
const renderCardsGrid = (projects) => {
  return projects.map((project, index) => {
    return <Card
      name={project.name}
      description={project.description}
      image={project.image}
      buttons={project.buttons}
    />;
  });
};

export default Work;
