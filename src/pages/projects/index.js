// Projects page

import { Card } from '../../components';
import projectsList from '../../projects/index.js';
import '../page.scss';

const Projects = () => (
  <div className='container'>
    <div>
      <div className='page-header'>
        <h1 className='page-title'>Projects</h1>
      </div>

      <p className='text-center'>
        Here are some misc hobby projects of mine. These projects are in various states - some are ready to be used by you, some are abandoned, and some I revisit to make progress with here and there.
      </p>

      <div className='card-section-wrapper'>
        { renderCardsGrid(projectsList) }
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

export default Projects;
