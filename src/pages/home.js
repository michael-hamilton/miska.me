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
        <p>I'm Mike, a software engineer based in Baltimore, MD, USA.</p>
        <p>I love bringing new ideas to life.</p>
        <p>I'm much more than an engineer though, and I'd love if you got to know me.</p>
        <p>If you'd like to speak to me about software, music, computers, or something else, <a
          href="mailto:hello@miska.me" className="text-surf">drop me a line</a>!</p>
      </div>
    </div>
  </div>
    );

export default Home;
