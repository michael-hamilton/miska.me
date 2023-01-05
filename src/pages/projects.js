// Work page

import projects from '../projects';
import './page.scss';

const Projects = () => (
  <div className='container'>
    <div>
      <h1 className='main-heading text-center'>Projects</h1>

      <hr/>

      <p className='text-center'>
        Here are some misc hobby projects of mine. These projects are in various states - some are ready to be used by you, some are abandoned, and some I revisit to make progress with here and there.
      </p>

      <div className='card-section-wrapper'>
        {renderCardsGrid(projects)}
      </div>
    </div>
  </div>
);

const Card = (props) => (
  <div className='card text-center'>
    <div className='card-body'>
      <img className='card-img-top' loading='lazy' src={props.image} alt={props.title}/>
      <h5 className='card-title'>{props.name}</h5>
      <p className='card-text'>{props.description}</p>
    </div>
    <div className='card-footer'>
      <div className='card-button-wrapper button-group' role='group' aria-label='Actions'>
        {
          props.buttons ?
            props.buttons.map(button => <a className={`button btn-${button.type}`} href={button.url} data-native>{button.title}</a>) : null
        }
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
