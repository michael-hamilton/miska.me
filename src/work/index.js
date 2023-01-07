/*
 * Project artifacts should exist in a directory inside /projects such as /project/index.html
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
 *        "url": "/projects/project/index.html",
 *        "type": "secondary"
 *      }
 *    ]
 *  }
 */

const projects = [
  {
    "name": "MindPod Dashboard",
    "description": "A digital therapy platform built using Electron and Node.js.",
    "image": require("./mindpod-dashboard/card-img.png")
  },

  {
    "name": "Maestro",
    "description": "A React Native companion application for the MindPod digital therapeutic platform.",
    "image": require("./maestro/card-img.png"),
    "buttons": [
      {
        "title": "View Maestro (App Store)",
        "url": "https://apps.apple.com/us/app/mindpod-mobile/id1486862186",
        "type": "secondary"
      }
    ]
  },

  {
    "name": "Stepwise",
    "description": "A React Native MVP app for providing post-stroke patients with personalized resources and exercises.",
    "notes": "Developed for Johns Hopkins Medical Institue.",
    "image": require("./stepwise/card-img.png")
  },

  {
    "name": "churchnativity.com",
    "description": "An (award winning) Wordpress site, designed and developed by yours truly.",
    "image": require("./churchnativity/card-img.png"),
    "buttons": [
      {
        "title": "View Site",
        "url": "https://www.churchnativity.com/",
        "type": "secondary"
      }
    ]
  },

  {
    "name": "ezstorage.com",
    "description": "A website for a regional storage facility site. I developed templates for this site's proprietary CMS.",
    "image": require("./ezstorage/card-img.png"),
    "buttons": [
      {
        "title": "View Site",
        "url": "https://www.ezmini.com/",
        "type": "secondary"
      }
    ]
  },

  {
    "name": "Right Fit Tool",
    "description": "A tool for those interested in finding a job with the National Guard. I contributed styles and markup for this project.",
    "image": require("./nationalguardrightfit/card-img.png"),
  },

  {
    "name": "Delfin",
    "description": "An internal dev ops tooling app. An Electron app with a React UI, integrating with AWS in Node.",
    "image": require("./delfin/card-img.png"),
  },

  {
    "name": "Clipboard",
    "description": "An internal project management tool written entirely in vanilla js. One of my first forays into JS!",
    "image": require("./clipboard/card-img.png")
  },

  {
    "name": "Hit the Road Music",
    "description": "I designed the music for this interactive kids game presented by the National Credit Union Administration.",
    "image": require("./pocket-cents/card-img.png"),
    "buttons": [
      {
        "title": "View Site",
        "url": "https://www.mycreditunion.gov/financial-resources/hit-road-financial-adventure",
        "type": "secondary"
      }
    ]
  }
];

export default projects;