// Home page

import { Component } from 'preact';
import img from '../static/images/profile.jpg';

class Home extends Component {
  render() {
    return (
      <div className={'container text-center'}>
        <h1 className='display-1'>Hey!</h1>
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
  }
}

export default Home;
