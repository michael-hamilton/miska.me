/*
 * Project artifacts should exist in a directory inside /static/projects such as /project/index.html
 * Projects are separated by categorized by top level lists ("professional", "playground", etc)
 * Projects are registered in this file as an object with the shape:
 *
 * {
 *    name: 'Project Name',
 *    description: 'Project description.',
 *    image: require('./project/card-img.png'),
 *    tags: ['tag'], // Optional
 *    "buttons": [ // Optional
 *      {
 *        "title": "View Project",
 *        "url": "/static/projects/project/index.html",
 *        "type": "secondary"
 *      }
 *    ]
 *  }
 */

const projects = [
  {
    "name": "JS 3D Physic Demo",
    "description": "An interactive physics demo integrating three.js for 3D rendering with Ammo.js for physics.",
    "image": require("./js3d-phys/card-img.png"),
    "buttons": [
      {
        "title": "View Demo",
        "url": "/static/projects/js3d-phys/dist/index.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/JS3D-physics",
        "type": "info"
      }
    ]
  },

  {
    "name": "dmxus",
    "description": "A node package for controlling DMX lighting fixtures with Javascript.",
    "image": require("./dmxus/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/dmxus",
        "type": "info"
      }
    ]
  },

  {
    "name": "OhEssNine",
    "description": "A Mac OS9 inspired app made with React.",
    "image": require("./ohessnine/card-img.png"),
    "buttons": [
      {
        "title": "Start Mike OS 9",
        "url": "/static/projects/ohessnine/dist/index.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/OhEssNine",
        "type": "info"
      }
    ]
  },

  {
    "name": "Zap",
    "description": "A standalone sandbox for creating JS canvas demos.",
    "image": require("./zap/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/zap",
        "type": "info"
      }
    ]
  },

  {
    "name": "JS Game Engine",
    "description": "WIP of a standalone game engine in Javascript.",
    "image": require("./engine/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/Engine",
        "type": "info"
      }
    ]
  },

  {
    "name": "Gameboy",
    "description": "A WIP emulating a Gameboy in JS.",
    "image": require("./gameboy/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/gameboy",
        "type": "info"
      }
    ]
  },

  {
    "name": "NeuroCreator",
    "description": "A prototype of an NFT minting tool. Uses three.js for realtime 3D, ethers.js for integration with the Ethereum blockchain, and IPFS for decentralized file storage.",
    "image": require("./neurocreator/card-img.png"),
    "buttons": [
      {
        "title": "Go to Creator",
        "url": "https://creator.nrnm.link/",
        "type": "secondary"
      }
    ]
  },

  {
    "name": "JS z80 Emulator",
    "description": "An early WIP JS emulator to make some use of the z80 knowledge in my head.",
    "image": require("./z80/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/z80",
        "type": "info"
      }
    ]
  },

  {
    "name": "klav",
    "description": "Playing around with tone.js",
    "image": require("./klav/card-img.png"),
    "buttons": [
      {
        "title": "Play klav",
        "url": "/static/projects/klav/klav.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/klav",
        "type": "info"
      }
    ]
  },

  {
    "name": "Midimator",
    "description": "A midi automation utility built with Electron and Node.",
    "image": require("./midimator/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/midimator",
        "type": "info"
      }
    ]
  },

  {
    "name": "vidserve",
    "description": "A server and companion PWA to serve personal media over the web.",
    "image": require("./vidserve/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/vidserve",
        "type": "info"
      }
    ]
  },

  {
    "name": "Hue Local",
    "description": "A basic Node.js utility to control Hue lights over a local network.",
    "image": require("./hue/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/hue_local",
        "type": "info"
      }
    ]
  },

  {
    "name": "mDraw",
    "description": "Experimenting with Apple Pencil support in Javascript.",
    "image": require("./mdraw/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/mDraw",
        "type": "info"
      }
    ]
  },

  {
    "name": "technical difficulties",
    "description": "~=+.*/?`%.#^]!-}=!=)?+@_?;;:%:~`?]`'=,-\"*,(/|$-~\\?[_`||@`'~)]-::..\"[1\\.]=+@*!!",
    "image": require("./technical-difficulties/static.gif"),
  },

  {
    "name": "color-ML",
    "description": "Playing around with brain.js - a color guesser.",
    "image": require("./color-ml/card-img.png"),
    "buttons": [
      {
        "title": "View Demo",
        "url": "/static/projects/color-ml/dist/index.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/color-ML",
        "type": "info"
      }
    ]
  },

  {
    "name": "SMB 1-1",
    "description": "An accurate (albeit kinda wonky) recreation of SMB 1-1 using impactJS. I was new to JS...",
    "image": require("./smb/card-img.png"),
    "buttons": [
      {
        "title": "Play Mario",
        "url": "/static/projects/smb/index.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/smb1",
        "type": "info"
      }
    ]
  },

  {
    "name": "Portfolio Template",
    "description": "You're looking at it! The code for my site is open source, feel free to use it! Just don't pretend to be me...",
    "image": require("./portfolio-template/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/miska.me",
        "type": "info"
      }
    ]
  },

  {
    "name": "Canvas Gravity Demo",
    "description": "A simple interactive canvas experiment implementing gravity.",
    "image": require("./canvas-gravity-demo/card-img.png"),
    "buttons": [
      {
        "title": "View Demo",
        "url": "/static/projects/canvas-gravity-demo/gravity.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/canvas-gravity-demo",
        "type": "info"
      }
    ]
  },

  {
    "name": "Quartz",
    "description": "A super simple library for responsive, front-end development. It's a little outdated.",
    "image": require("./quartz/card-img.png"),
    "buttons": [
      {
        "title": "View Site",
        "url": "http://michael-hamilton.github.io/Quartz/",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/Quartz",
        "type": "info"
      }
    ]
  },

  {
    "name": "Conway's Game of Life",
    "description": "An interactive canvas experiment implementing Conway's Game of Life.",
    "image": require("./life/card-img.png"),
    "buttons": [
      {
        "title": "View Demo",
        "url": "/static/projects/life/life.html",
        "type": "secondary"
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/life",
        "type": "info"
      }
    ]
  },

  {
    "name": "LiveSlide",
    "description": "A prototype of a realtime presentation application. Field tested this for about a year at small scale with past colleagues. An MVP is in the works!",
    "image": require("./liveslide/card-img.png"),
    "buttons": [
      {
        "title": "Visit LiveSlide",
        "url": "http://www.liveslide.xyz/",
        "type": "secondary"
      }
    ]
  },

  {
    "name": "WebVR Interaction Demo",
    "description": "A simple experiment with gaze interactions in WebVR.",
    "image": require("./webvr-interaction-demo/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/WebVR-Interaction-Demo",
        "type": "info"
      }
    ]
  },

  {
    "name": "WebVR Demo",
    "description": "Baby's first WebVR experience.",
    "image": require("./webvr-demo/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/webvrdemo",
        "type": "info"
      }
    ]
  },

  {
    "name": "socket.io Presenter Demo",
    "description": "Proof of concept for a presentation interface that can update a client in realtime.",
    "image": require("./socketio-presenter-demo/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/socket.io-Presenter-Demo",
        "type": "info"
      }
    ]
  },

  {
    "name": "Homebrew Z80 Computer",
    "description": "A passion project I've been working on here and there over the course of the past decade. Lots of notes that I am compiling and will share!",
    "image": require("./homebrew-z80/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/webvrdemo",
        "type": "info"
      }
    ]
  }
];

export default projects;
