import { h, render, Component } from 'preact';

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
          <p className="text-muted">I have worked in some professional capacity as a programmer since 2010. While I've
            touched many sorts of tech during my career, my interest and focus has been with web technologies. Presently,
            I am a software engineer at <a href="https://msquarehealthcare.com/" className="text-surf">MSquare
              Healthcare</a> in Baltimore, MD (USA) where we develop a world class digital therapy video game. My specific
            focus here is on engineering tools which enable effective delivery of this novel therapy using both hardware
            and software to encourage patients and therapists alike to make the most of the platform. I am also a
            collaborator with the <a
              href='https://www.hopkinsmedicine.org/neurology_neurosurgery/research/labs/kata_studio/team.html'
              className="text-surf">Kata Design Studio</a> at Johns Hopkins Medical Institue where a diverse team from
            many disciplines designs innovative ways to improve patient care and therapist experiences.</p>
          <p className="text-muted">My career history is diverse working with both commercial and non-profit
            organizations, and also independently as a freelancer. My various roles have given me unique professional
            opportunities beyond software engineering such as working with audio visual technology in both live and studio
            production environments (my particular expertise is in stage lighting). I've also some professional experience
            working in music, IT, large event coordination, and building design/construction projects.</p>
          <p className="text-muted">I'm a 90's kid - I'm thankful to have been around for the advent of the web as we know
            it. My passion for the web and it's tech can without a doubt can be attributed to growing up on dial-up,
            writing CSS for my Myspace page, and finding new ways to connect online. When it comes to software engineering
            I'm relatively technology agnostic, though most of my expertise is related to web technologies. I have
            extensive Javascript experience and especially enjoy working with React, React Native, Electron, and Node. Of
            course, I've also got strong web fundamentals with HTML, and CSS.</p>
          <p className="text-muted">See my <a href="../files/resume.pdf" className="text-surf" native>resum&eacute;</a> if you
            want to know more.</p>
        </div>

        <div className="container text-center content-section">
          <h1 className="display-4">Professional Projects</h1>
          <hr/>
          <p className="text-muted">I've worked on a number of projects over my career, here are just a few.</p><br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/mindpod-dashboard/card-img.png"
                                              alt="MindPod"/>
                <h5 className="card-title">MindPod Dashboard</h5>
                <p className="card-text">A digital therapy platform built using Electron and Node.js.</p>
                <div className="btn-group" role="group" aria-label="Actions"></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/maestro/card-img.png" alt="Maestro"/>
                <h5 className="card-title">Maestro</h5>
                <p className="card-text">A React Native companion application for the MindPod digital therapeutic
                  platform.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="https://apps.apple.com/us/app/mindpod-mobile/id1486862186">View
                  Maestro (App Store)</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/stepwise/card-img.png"
                                              alt="StepWise"/>
                <h5 className="card-title">Stepwise</h5>
                <p className="card-text">A React Native MVP app for providing post-stroke patients with personalized
                  resources and exercises.</p><i className="card-text">Developed for Johns Hopkins Medical Institue.</i>
                <div className="btn-group" role="group" aria-label="Actions"></div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/churchnativity/card-img.png"
                                              alt="churchnativity.com"/>
                <h5 className="card-title">churchnativity.com</h5>
                <p className="card-text">An (award winning) Wordpress site, designed and developed by yours truly.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="https://www.churchnativity.com/">View
                  Site</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/clipboard/card-img.png"
                                              alt="Clipboard"/>
                <h5 className="card-title">Clipboard</h5>
                <p className="card-text">An internal project management tool written entirely in vanilla js. One of my first
                  forays into JS!</p>
                <div className="btn-group" role="group" aria-label="Actions"></div>
              </div>
            </div>
            <div className="card d-none d-sm-block">
              <div className="card-body"></div>
            </div>
          </div>
          <br/>
        </div>
        <div className="container text-center content-section">
          <h1 className="display-4">Playground</h1>
          <hr/>
          <p className="text-muted">Here are some misc hobby projects of mine. These projects are in various states - some
            are ready to be used by you, some are abandoned, and some I revisit to make progress with here and there.</p>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/dmxus/card-img.png" alt="dmxus"/>
                <h5 className="card-title">dmxus</h5>
                <p className="card-text">A node package for controlling DMX lighting fixtures with Javascript.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/dmxus">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/ohessnine/card-img.png"
                                              alt="OhEssNine"/>
                <h5 className="card-title">OhEssNine</h5>
                <p className="card-text">A Mac OS9 clone made with React. (WIP for my new personal website)</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="/projects/ohessnine/dist/index.html">Start
                  Mike OS 9</a><a className="btn btn-info" href="https://github.com/michael-hamilton/OhEssNine">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/liveslide/card-img.png"
                                              alt="LiveSlide"/>
                <h5 className="card-title">LiveSlide</h5>
                <p className="card-text">A prototype of a realtime presentation application. Field tested this for about a
                  year at small scale with past colleagues. An MVP is in the works!</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="http://www.liveslide.xyz/">Go to
                  LiveSlide</a></div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/klav/card-img.png" alt="klav"/>
                <h5 className="card-title">klav</h5>
                <p className="card-text">Playing around with tone.js</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="/projects/klav/klav.html">Play
                  klav</a><a className="btn btn-info" href="https://github.com/michael-hamilton/klav">View Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/z80/card-img.png" alt="z80"/>
                <h5 className="card-title">JS z80 Emulator</h5>
                <p className="card-text">An early WIP JS emulator to make some use of the z80 knowledge in my head.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/z80">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/color-ml/card-img.png" alt="z80"/>
                <h5 className="card-title">color-ML</h5>
                <p className="card-text">Playing around with brain.js - a color guesser.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/color-ML">View
                  Repo</a></div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/mdraw/card-img.png" alt="mDraw"/>
                <h5 className="card-title">mDraw</h5>
                <p className="card-text">Experimenting with Apple Pencil support in Javascript.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/mDraw">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/vidserve/card-img.png"
                                              alt="vidserve"/>
                <h5 className="card-title">vidserve</h5>
                <p className="card-text">A server and companion PWA to serve personal media over the web.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/vidserve">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/gameboy/card-img.png" alt="Gameboy"/>
                <h5 className="card-title">Gameboy</h5>
                <p className="card-text">Working on Gameboy emulation in JS. Currently an early WIP.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/gameboy">View
                  Repo</a></div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/hue/card-img.png" alt="Hue Local"/>
                <h5 className="card-title">Hue Local</h5>
                <p className="card-text">A basic utility to control Hue lights with node.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/hue_local">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/engine/card-img.png" alt="Engine"/>
                <h5 className="card-title">Game Engine</h5>
                <p className="card-text">A start at a Javascript game engine with Electron.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/Engine">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <canvas className="card-img-top" height="500" width="500" id="static-anim-canvas"></canvas>
                <h5 className="card-title">technical difficulties</h5>
                <p className="card-text">~=+.*/?`%.#^]!-}=!=)?+@_?;;:%:~`?]`'=,-"*,(/|$-~\?[_`||@`'~)]-::.."[1\.]=+@*!!</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/quartz/card-img.png" alt="Quartz"/>
                <h5 className="card-title">Quartz</h5>
                <p className="card-text">A super simple library for responsive, front-end development. It's a little
                  outdated.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="http://michael-hamilton.github.io/Quartz/">View
                  Site</a><a className="btn btn-info" href="https://github.com/michael-hamilton/Quartz">View Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/smb/card-img.png" alt="SMB1-1"/>
                <h5 className="card-title">SMB 1-1</h5>
                <p className="card-text">A (kinda wonky) recreation of SMB 1-1 using impactJS. I was new to JS...</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="/projects/smb/index.html">Play
                  Mario</a><a className="btn btn-info" href="https://github.com/michael-hamilton/smb1">View Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/portfolio-template/card-img.png"
                                              alt="Portfolio Template"/>
                <h5 className="card-title">Portfolio Template</h5>
                <p className="card-text">You're looking at it! The code for my site is open source, feel free to use it!
                  Just don't pretend to be me...</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/miska.me">View
                  Repo</a></div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/canvas-gravity-demo/card-img.png"
                                              alt="Canvas Gravity Demo"/>
                <h5 className="card-title">Canvas Gravity Demo</h5>
                <p className="card-text">A simple interactive canvas experiment implementing gravity.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="/projects/canvas-gravity-demo/gravity.html">View
                  Demo</a><a className="btn btn-info" href="https://github.com/michael-hamilton/canvas-gravity-demo">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/webvr-interaction-demo/card-img.png"
                                              alt="WebVR Interaction Demo"/>
                <h5 className="card-title">WebVR Interaction Demo</h5>
                <p className="card-text">A simple experiment with "look based" interactions in WebVR.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/WebVR-Interaction-Demo">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/life/card-img.png"
                                              alt="Conway's Game of Life"/>
                <h5 className="card-title">Conway's Game of Life</h5>
                <p className="card-text">An interactive canvas experiment implementing Conway's Game of Life.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-secondary"
                                                                                href="/projects/life/life.html">Play
                  Life</a><a className="btn btn-info" href="https://github.com/michael-hamilton/life">View Repo</a></div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/socketio-presenter-demo/card-img.png"
                                              alt="socket.io Presenter Demo"/>
                <h5 className="card-title">socket.io Presenter Demo</h5>
                <p className="card-text">Proof of concept for a presentation interface that can update a client in
                  realtime.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/socket.io-Presenter-Demo">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/webvr-demo/card-img.png"
                                              alt="WebVR Demo"/>
                <h5 className="card-title">WebVR Demo</h5>
                <p className="card-text">Baby's first WebVR experience.</p>
                <div className="btn-group" role="group" aria-label="Actions"><a className="btn btn-info"
                                                                                href="https://github.com/michael-hamilton/webvrdemo">View
                  Repo</a></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body"><img className="card-img-top" src="./projects/homebrew-z80/card-img.png"
                                              alt="Canvas Gravity Demo"/>
                <h5 className="card-title">Homebrew Z80 Computer</h5>
                <p className="card-text">A passion project I've been working on here and there over the course of the past
                  decade. Lots of notes that I am compiling and will share!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
