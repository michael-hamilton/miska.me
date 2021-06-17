import { h, render, Component } from 'preact';

class Home extends Component {
  render() {
    return (
      <div className={'container text-center'}>
        <h1 className={'display-4'}>Hey!</h1>
        <hr/>
        <p className={'text-muted'}>I'm Mike, a software engineer based in Baltimore, MD, USA.</p>
        <p className={'text-muted'}>I'm a blank slate maker; I love bringing ideas to life.</p>
        <p className={'text-muted'}>I'm much more than an engineer though, and I'd love if you got to know me.</p>
        <p className={'text-muted'}>If you'd like to speak to me about software, music, computers, or something else, <a
          href="mailto:michaelhamilton626+hamblestone@gmail.com" className="text-surf">drop me a line</a>!</p>
      </div>

    );
  }
}

export default Home;
