import { h, render, Component } from 'preact';
import projects from './projects/projects'

const Card = (props) => (
  <div className="card">
    <div className="card-body"><img className="card-img-top" src={props.image} alt={props.title}/>
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
      <div className="btn-group" role="group" aria-label="Actions">
        {
          props.buttons ?
            props.buttons.map(button => <a className={`btn btn-${button.type}`} href={button.url}>{button.title}</a>) : null
        }
      </div>
    </div>
  </div>
);

const renderCardsGrid = (cards) => {
  return cards.map((project, index) => {
    return <Card
      name={project.name}
      description={project.description}
      image={project.image}
      buttons={project.buttons}
    />;
  });
};

class Home extends Component {
  render() {
    // const c = document.getElementById("static-anim-canvas"),
    //   ctx = c.getContext("2d");
    //
    // function draw() {
    //   for (ctx.clearRect(0, 0, c.width, c.height), ctx.fillStyle = "#000", i = 0; i < 3e4; i++) ctx.fillRect(Math.random() * c.height, Math.random() * c.width, 3, 3);
    //   setTimeout(() => requestAnimationFrame(draw), 30)
    // }
    // draw();
    return (
      <div>
        <div className="container text-center content-section">
          <h1 className="display-4">Work</h1>
          <hr/>
          <p className="text-muted">
            I have worked in some professional capacity as a programmer since 2010. While I've
            touched many sorts of tech during my career, my interest and focus has been with web technologies. Presently,
            I am a software engineer at <a href="https://msquarehealthcare.com/" className="text-surf">MSquare Healthcare</a> in Baltimore, MD (USA) where we develop a world class digital therapy video game. My specific
            focus here is on engineering tools which enable effective delivery of this novel therapy using both hardware
            and software to encourage patients and therapists alike to make the most of the platform. I am also a
            collaborator with the <a href='https://www.hopkinsmedicine.org/neurology_neurosurgery/research/labs/kata_studio/team.html' className="text-surf">Kata Design Studio</a> at Johns Hopkins Medical Institue where a diverse team from
            many disciplines designs innovative ways to improve patient care and therapist experiences.
          </p>
          <p className="text-muted">
            My career history is diverse working with both commercial and non-profit
            organizations, and also independently as a freelancer. My various roles have given me unique professional
            opportunities beyond software engineering such as working with audio visual technology in both live and studio
            production environments (my particular expertise is in stage lighting). I've also some professional experience
            working in music, IT, large event coordination, and building design/construction projects.
          </p>
          <p className="text-muted">
            I'm a 90's kid - I'm thankful to have been around for the advent of the web as we know
            it. My passion for the web and it's tech can without a doubt can be attributed to growing up on dial-up,
            writing CSS for my Myspace page, and finding new ways to connect online. When it comes to software engineering
            I'm relatively technology agnostic, though most of my expertise is related to web technologies. I have
            extensive Javascript experience and especially enjoy working with React, React Native, Electron, and Node. Of
            course, I've also got strong web fundamentals with HTML, and CSS.
          </p>
          <p className="text-muted">
            See my <a href="../files/resume.pdf" className="text-surf" native>resum&eacute;</a> if you want to know more.
          </p>
        </div>

        <div className="container text-center content-section">
          <h1 className="display-4">Professional Projects</h1>

          <hr/>

          <p className="text-muted">I've worked on a number of projects over my career, here are just a few.</p>

          <br/>

          {renderCardsGrid(projects.professional)}
        </div>

        <div className="container text-center content-section">
          <h1 className="display-4">Playground</h1>

          <hr/>

          <p className="text-muted">
            Here are some misc hobby projects of mine. These projects are in various states - some are ready to be used by you, some are abandoned, and some I revisit to make progress with here and there.
          </p>

          {renderCardsGrid(projects.playground)}
        </div>

      </div>
    );
  }
}

export default Home;
