// Site Entrypoint

import { render } from 'preact';
import { useState } from 'preact/hooks';
import Router from 'preact-router';
import { Link, Match } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import { Loader, PageNotFound } from './components';
import './pages/page.scss';

const Site = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const loaderDelayMs = 500;

  const handleRouteChange = (e) => {
    if(e.active[0].props.default) {
      setHasLoaded(true);
    }
    else {
      setHasLoaded(false);
    }
  };

  return (
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

      <div class={`main-content-wrapper ${hasLoaded && 'has-loaded'}`}>
        <Router onChange={handleRouteChange}>
          <AsyncRoute
            path='/'
            getComponent={ () => {
              return Promise.all([
                import('./pages/home/index.js'),
                new Promise(resolve => setTimeout(resolve, loaderDelayMs))
              ]).then(([module]) => {
                setHasLoaded(true);
                return module.default;
              });
            }}
            loading={ () => <Loader /> }
          />

          <AsyncRoute
            path='/work'
            getComponent={ () => {
              return Promise.all([
                import('./pages/work/index.js'),
                new Promise(resolve => setTimeout(resolve, loaderDelayMs))
              ]).then(([module]) => {
                setHasLoaded(true);
                return module.default;
              });
            }}
            loading={ () => <Loader /> }
          />

          <AsyncRoute
            path='/projects'
            getComponent={ () => {
              return Promise.all([
                import('./pages/projects/index.js'),
                new Promise(resolve => setTimeout(resolve, loaderDelayMs))
              ]).then(([module]) => {
                setHasLoaded(true);
                return module.default;
              });
            }}
            loading={ () => <Loader /> }
          />

          <AsyncRoute
            path='/blog'
            getComponent={ () => {
              return Promise.all([
                import('./pages/blog/index.js'),
                new Promise(resolve => setTimeout(resolve, loaderDelayMs))
              ]).then(([module]) => {
                setHasLoaded(true);
                return module.default;
              });
            }}
            loading={ () => <Loader /> }
          />

          <AsyncRoute
            path='/blog/:postId'
            getComponent={ () => {
              return Promise.all([
                import('./pages/post/index.js'),
                new Promise(resolve => setTimeout(resolve, loaderDelayMs))
              ]).then(([module]) => {
                setHasLoaded(true);
                return module.default;
              });
            }}
            loading={ () => <Loader /> }
          />

          <PageNotFound default />
        </Router>
      </div>

      <div class='footer container border-top'>
        <div>
          <p class='text-sm-left'>
            &copy; 2023&nbsp;
            <a class='rainbow-hover link-highlight' href='https://miska.me'>Michael Hamilton</a>
          </p>
        </div>
        <div>
          <ul class='social-links'>
            <li>
              <a class='footer-link-item' href='https://github.com/michael-hamilton' target='_blank'>GitHub</a>
            </li>
            <li class='middot'>&middot;</li>
            <li>
              <a class='footer-link-item' href='https://linkedin.com/in/michaelhamilton626' target='_blank'>LinkedIn</a>
            </li>
            <li class='middot'>&middot;</li>
            <li>
              <a class='footer-link-item' href='https://open.spotify.com/artist/2GCXWNGHFLHXrnR6CTa2fL' target='_blank'>&#9835;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const node = document.getElementById('root');

render(<Site />, node, node.lastChild);
