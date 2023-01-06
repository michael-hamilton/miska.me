import { render, Component } from 'preact';
import Router from 'preact-router';
import {Link, Match} from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Home from './pages/home';
import NotFound from './pages/notfound';

class App extends Component {
  render() {
    return (
      <div className={'content'}>
        <div className={'header'}>
          <h1 className={'header-title'}>Mike Hamilton</h1>
          <h2 className={'header-sub-title'}>software engineer</h2>
        </div>

        <nav className='main-nav'>
          <div className='container'>
            <ul>
              <li className='nav-item'><Link class='nav-link text-center' title='about' href='/' activeClassName='active'>About</Link></li>
              <li className='nav-item'><Link class='nav-link text-center' title='work' href='/work' activeClassName='active'>Work</Link></li>
              <li className='nav-item'><Link class='nav-link text-center' title='projects' href='/projects' activeClassName='active'>Projects</Link></li>
              <li className='nav-item'>
              <Match path='/blog/:postId'>
                {({ matches }) => <Link class={`nav-link text-center ${matches && 'active'}`} title='blog' href='/blog' activeClassName='active'>Blog</Link>}
              </Match>
              </li>
            </ul>
          </div>
        </nav>

        <div className='main-content-wrapper'>
          <Router>
            <Home path='/' />
            <AsyncRoute
              path='/work'
              getComponent={() => import('./pages/work').then(module => module.default)}
            />
            <AsyncRoute
              path='/projects'
              getComponent={() => import('./pages/projects').then(module => module.default)}
            />
            <AsyncRoute
              path='/blog'
              getComponent={() => import('./pages/blog').then(module => module.default)}
            />
            <AsyncRoute
              path='/blog/:postId'
              getComponent={() => import('./pages/post').then(module => module.default)}
              loading={() => <div>loading...</div>}
            />
            <NotFound default />
          </Router>
        </div>

        <div className='footer container border-top'>
          <div>
            <p className='text-sm-left'>
              &copy; 2023&nbsp;
              <a className='rainbow-hover text-surf' href='https://miska.me'>Michael Hamilton</a>
            </p>
          </div>
          <div>
            <ul className='social-links'>
              <li>
                <a className='footer-link-item' href='https://github.com/michael-hamilton'>GitHub</a>
              </li>
              <li>&middot;</li>
              <li>
                <a className='footer-link-item' href='https://linkedin.com/in/michaelhamilton626'>LinkedIn</a>
              </li>
              <li>&middot;</li>
              <li>
                <a className='footer-link-item' href='https://open.spotify.com/artist/2GCXWNGHFLHXrnR6CTa2fL'>&#9835;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const node = document.getElementById('root');

render(<App />, node, node.lastChild);
