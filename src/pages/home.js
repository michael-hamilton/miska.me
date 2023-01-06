// Home page

import img from '../static/images/profile.jpg';
import './page.scss';

const Home = () => (
  <div className='container'>
    <h1 className='main-heading text-center'>Hey!</h1>

    <hr/>

    <div className='column-wrapper-2 width-1-4'>
      <div className='left-column center-items'>
        <div className='profile-image-wrapper'>
          <img src={img}/>
        </div>
      </div>

      <div className='right-column text-left'>
        <p>I'm Mike, a software engineer based in Baltimore, MD, USA. I love taking a new idea and bringing it to life.</p>
        <p>
          I have a multitude of interests ranging from hardware and software engineering, to music, to cooking, to video games.
          In addition to details about my professional history, this site is a repository of ideas and knowledge I wish to retain for myself and share with others.
        </p>
        <p>
          I'm passionate about conveying knowledge in an accessible and intuitive way.
          It's my hope that if you come across something on this site that is of interest, you walk away with a better understanding of that something.
        </p>
        <p>
          If you'd like to speak to me about software, music, computers, or something else, <a href="mailto:hello@miska.me" className="text-surf">drop me a line</a>!
          Additionally, if there's something on this site that needs work (or that you think should be on this site but isn't), I'd love to hear from you.
        </p>
      </div>
    </div>
  </div>
    );

export default Home;
