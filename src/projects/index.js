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

import { MdPiano} from 'react-icons/md';
import { FaGamepad, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';

const projects = [
  {
    "name": "3D Physics Demo",
    "description": "An interactive physics demo integrating three.js for 3D rendering with Ammo.js for physics.",
    "image": require("./js3d-phys/card-img.png"),
    "buttons": [
      {
        "title": "View Demo",
        "url": "/static/projects/js3d-phys/dist/index.html",
        "type": "secondary",
        "icon": <FaLaptopCode />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/JS3D-physics",
        "type": "info",
        "icon": <FaGithub />
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
        "type": "info",
        "icon": <FaGithub />
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
        "type": "secondary",
        "icon": <FaLaptopCode />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/OhEssNine",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "Zap",
    "description": "A standalone sandbox for creating Javascript canvas demos.",
    "image": require("./zap/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/zap",
        "type": "info",
        "icon": <FaGithub />
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
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "Gameboy",
    "description": "A WIP emulating a Gameboy in Javascript.",
    "image": require("./gameboy/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/gameboy",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "NeuroCreator",
    "description": "Prototype of an NFT minting tool. Uses three.js for 3D rendering, ethers.js for integration with the Ethereum blockchain (via infura.io), and IPFS for decentralized file storage.",
    "image": require("./neurocreator/card-img.png"),
    "buttons": [
      {
        "title": "Go to Creator",
        "url": "https://creator.nrnm.link/",
        "type": "secondary",
        "icon": <FaLaptopCode />
      }
    ]
  },

  {
    "name": "JS z80 Emulator",
    "description": "A WIP emulation of the Zilog Z80 microprocessor, written in Javascript.",
    "image": require("./z80/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/z80",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "klav",
    "description": "Playing around generation sounds with tone.js.",
    "image": require("./klav/card-img.png"),
    "buttons": [
      {
        "title": "Play klav",
        "url": "/static/projects/klav/klav.html",
        "type": "secondary",
        "icon": <MdPiano />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/klav",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "Midimator",
    "description": "A midi automation utility built with Electron and Node.js.",
    "image": require("./midimator/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/midimator",
        "type": "info",
        "icon": <FaGithub />
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
        "type": "info",
        "icon": <FaGithub />
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
        "type": "info",
        "icon": <FaGithub />
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
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "technical difficulties",
    "description": "~=+.*/?`%.#^]!-}=!=)?+@_?;;:%:~`?]`'=,-\"*,(/|$-~\\?[_`||@`'~)]-::..\"[1\\.]=+@*!!",
    "image": require("./technical-difficulties/static.gif"),
    "buttons": [
      {
        "title": "View Blog Post",
        "url": "/blog/tv-static",
        "type": "info",
        "icon": <IoNewspaperOutline />
      }
    ]
  },

  {
    "name": "color-ML",
    "description": "Experimenting with neural networks in Javascript.",
    "image": require("./color-ml/card-img.png"),
    "buttons": [
      {
        "title": "View Demo",
        "url": "/static/projects/color-ml/dist/index.html",
        "type": "secondary",
        "icon": <FaLaptopCode />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/color-ML",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "SMB 1-1",
    "description": "A visually accurate (albeit kinda wonky) recreation of SMB 1-1 using impactJS. I was new to JS...",
    "image": require("./smb/card-img.png"),
    "buttons": [
      {
        "title": "Play Mario",
        "url": "/static/projects/smb/index.html",
        "type": "secondary",
        "icon": <FaGamepad />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/smb1",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "Dev Portfolio",
    "description": "You're looking at it! The code for my site is open source, feel free to use it! Just don't pretend to be me...",
    "image": require("./portfolio-template/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/miska.me",
        "type": "info",
        "icon": <FaGithub />
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
        "type": "secondary",
        "icon": <FaLaptopCode />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/canvas-gravity-demo",
        "type": "info",
        "icon": <FaGithub />
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
        "type": "secondary",
        "icon": <FaLaptopCode />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/life",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "LiveSlide",
    "description": "A prototype of a realtime presentation application. Field tested this for about a year at small scale with past colleagues.",
    "image": require("./liveslide/card-img.png"),
    "buttons": [
      {
        "title": "Visit LiveSlide",
        "url": "http://www.liveslide.xyz/",
        "type": "secondary",
        "icon": <FaLaptopCode />
      }
    ]
  },

  {
    "name": "WebVR Interaction Demo",
    "description": "A simple experiment utilizing gaze interactions in WebVR.",
    "image": require("./webvr-interaction-demo/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/WebVR-Interaction-Demo",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "WebVR Demo",
    "description": "First experiment making a WebVR demo.",
    "image": require("./webvr-demo/card-img.png"),
    "buttons": [
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/webvrdemo",
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "Quartz",
    "description": "A super simple library for responsive, front-end development. It's a little outdated at this point.",
    "image": require("./quartz/card-img.png"),
    "buttons": [
      {
        "title": "View Site",
        "url": "http://michael-hamilton.github.io/Quartz/",
        "type": "secondary",
        "icon": <FaLaptopCode />
      },
      {
        "title": "View Repo",
        "url": "https://github.com/michael-hamilton/Quartz",
        "type": "info",
        "icon": <FaGithub />
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
        "type": "info",
        "icon": <FaGithub />
      }
    ]
  },

  {
    "name": "Homebrew Z80 Computer",
    "description": "A passion project I've been working on here and there over the course of the past decade. More to come!",
    "image": require("./homebrew-z80/card-img.png"),
  }
];

export default projects;
