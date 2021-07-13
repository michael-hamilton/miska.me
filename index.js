import { h, render, Component } from 'preact';
import Router from 'preact-router';
import {Link} from 'preact-router/match';
import Home from './pages/home';
import Work from './pages/work';
import img from './images/profile.jpg';

class App extends Component {
  render() {
    return (
      <div className={'content'}>
        <div className={'header'}>
          <h1 className={'header-title'}>Mike Hamilton</h1>
          <h2 className={'header-sub-title'}>software engineer</h2>
        </div>

        <nav className="main-nav">
          <ul>
            <li className="nav-item"><Link className="nav-link text-center" title={'about'} href="/" activeClassName={'active'}>About</Link></li>
            <li className="profile-image"><img src={img}/></li>
            <li className="nav-item"><Link className="nav-link text-center" title={'work'} href="/work" activeClassName={'active'}>Work</Link></li>
          </ul>
        </nav>

        <div className={'main-content-wrapper'}>
          <Router>
            <Home path={'/'} />
            <Work path={'/work'} />
          </Router>
        </div>

        <div className="footer container border-top">
          <div>
            <p className="text-sm-left">
              &copy; 2021&nbsp;
              <a className="rainbow-hover text-surf" href="https://open.spotify.com/artist/2GCXWNGHFLHXrnR6CTa2fL">Michael Hamilton</a>
            </p>
          </div>
          <div>
            <ul className="social-links">
              <li>
                <a className="footer-link-item" href="https://github.com/michael-hamilton">GitHub</a>
              </li>
              <li>&middot;</li>
              <li>
                <a className="footer-link-item" href="https://linkedin.com/in/michaelhamilton626">LinkedIn</a>
              </li>
              <li>&middot;</li>
              <li>
                <a className="footer-link-item" href="https://twitter.com/miskahamilton">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


render(<App />, document.body);
