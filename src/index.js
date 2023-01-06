// Site Entrypoint

import { render } from 'preact';
import Router from 'preact-router';
import {Link, Match} from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import { Loader, PageNotFound } from './components';
import Home from './pages/home';
import './page.scss';

const Site = () => (
  <div class={'content'}>
    <div class={'header'}>
      <h1 class={'header-title'}>Mike Hamilton</h1>
      <h2 class={'header-sub-title'}>software engineer</h2>
    </div>

    <nav class='main-nav'>
      <div class='container'>
        <ul>
          <li class='nav-item'><Link class='nav-link text-center' title='about' href='/' activeClassName='active'>About</Link></li>
          <li class='nav-item'><Link class='nav-link text-center' title='work' href='/work' activeClassName='active'>Work</Link></li>
          <li class='nav-item'><Link class='nav-link text-center' title='projects' href='/projects' activeClassName='active'>Projects</Link></li>
          <li class='nav-item'>
          <Match path='/blog/:postId'>
            {({ matches }) => <Link class={`nav-link text-center ${matches && 'active'}`} title='blog' href='/blog' activeClassName='active'>Blog</Link>}
          </Match>
          </li>
        </ul>
      </div>
    </nav>

    <div class='main-content-wrapper'>
      <Router>
        <Home path='/' />
        <AsyncRoute
          path='/work'
          getComponent={ () => import('./pages/work/index.js').then(module => module.default) }
          loading={ () => <Loader /> }
        />
        <AsyncRoute
          path='/projects'
          getComponent={ () => import('./pages/projects/index.js').then(module => module.default) }
          loading={ () => <Loader /> }
        />
        <AsyncRoute
          path='/blog'
          getComponent={ () => import('./pages/blog/index.js').then(module => module.default) }
          loading={ () => <Loader /> }
        />
        <AsyncRoute
          path='/blog/:postId'
          getComponent={() => import('./pages/post/index.js').then(module => module.default)}
          loading={ () => <Loader /> }
        />
        <PageNotFound default />
      </Router>
    </div>

    <div class='footer container border-top'>
      <div>
        <p class='text-sm-left'>
          &copy; 2023&nbsp;
          <a class='rainbow-hover text-surf' href='https://miska.me'>Michael Hamilton</a>
        </p>
      </div>
      <div>
        <ul class='social-links'>
          <li>
            <a class='footer-link-item' href='https://github.com/michael-hamilton'>GitHub</a>
          </li>
          <li>&middot;</li>
          <li>
            <a class='footer-link-item' href='https://linkedin.com/in/michaelhamilton626'>LinkedIn</a>
          </li>
          <li>&middot;</li>
          <li>
            <a class='footer-link-item' href='https://open.spotify.com/artist/2GCXWNGHFLHXrnR6CTa2fL'>&#9835;</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const node = document.getElementById('root');

render(<Site />, node, node.lastChild);
