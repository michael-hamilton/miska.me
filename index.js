import { h, render, Component } from 'preact';
import img from './images/profile.jpg';

class App extends Component {
  render() {
    return (
      <div className={'content'}>
        <div className={'jumbotron header rounded-0'}>
          <h1 className={'display-1 text-center text-white header-title'}>Mike Hamilton</h1>
          <h2 className={'lead text-center text-white header-sub-title software engineer'}></h2>
        </div>

        <nav className="navbar navbar-light navbar-expand-lg justify-content-space-between main-navigation">
          <div className="col-4">
            <ul className="navbar-nav d-flex justify-content-around">
              <li className="nav-item"><a className="nav-link text-center" href="/">About</a></li>
            </ul>
          </div>
          <div className="col-4">
            <p className="d-flex justify-content-center">
              <img className="rounded-circle shadow profile-image" src={img}/></p>
          </div>
          <div className="col-4">
            <ul className="navbar-nav d-flex justify-content-around">
              <li className="nav-item"><a className="nav-link text-center" href="/work.pug">Work</a></li>
            </ul>
          </div>
        </nav>

        <div className={'main-content-wrapper'}>
          <div className={'container text-center'}>
            <h1 className={'display-4'}>Hey!</h1>
            <hr />
            <p className={'text-muted'}>I'm Mike, a software engineer based in Baltimore, MD, USA.</p>
            <p className={'text-muted'}>I'm a blank slate maker; I love bringing ideas to life.</p>
            <p className={'text-muted'}>I'm much more than an engineer though, and I'd love if you got to know me.</p>
            <p className={'text-muted'}>If you'd like to speak to me about software, music, computers, or something else, <a href="mailto:michaelhamilton626+hamblestone@gmail.com" class="text-surf">drop me a line</a>!</p>
          </div>
        </div>

        <div className="footer container border-top mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="float-sm-left text-center">
                <p className="text-muted text-sm-left">&copy; 2021&nbsp;<a className="rainbow-hover text-surf"
                                                                           href="https://open.spotify.com/artist/2GCXWNGHFLHXrnR6CTa2fL?si=qmgBdyiORhm4Li_6vLwcnw">Michael
                  Hamilton</a></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="float-sm-right">
                <ul className="list-unstyled list-inline text-muted text-sm-right text-center">
                  <li className="list-inline-item"><a className="footer-link-item"
                                                      href="https://github.com/michael-hamilton">GitHub</a></li>
                  <li className="list-inline-item">&middot;</li>
                  <li className="list-inline-item"><a className="footer-link-item"
                                                      href="https://linkedin.com/in/michaelhamilton626">LinkedIn</a>
                  </li>
                  <li className="list-inline-item">&middot;</li>
                  <li className="list-inline-item"><a className="footer-link-item"
                                                      href="https://twitter.com/miskahamilton">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


  );
  }
}

render(<App />, document.body);
