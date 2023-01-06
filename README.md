# [miska.me](http://miska.me)

My personal website.

## Usage
To run locally: clone the repo, run `npm install`, then `npm start` to spin up a development server (likely at http://localhost:1234).
Alternatively, `npm build` will bundle the site and output into `/dist`.
`npm run serveDist` will properly serve the bundled site as an SPA, useful for testing before a production deployment. 

## Pages
Pages are defined in the `/pages` directory as Preact components.
In order to add a new page, a route must be added in `/src/index.js`. 

## Posts
Posts are defined in the `/posts` directory as MDX files.
In order to add a new post, it must be registered in `/src/posts/index.js`.
Posts must be defined statically in this manner to enable proper code splitting.

A post object is of the following shape:

```javascript
'post-id': {
  title: 'Index Title',
  description: 'Index description.',
  url: '/blog/post-id',
  image: require('./post-id/post-image.png'),
  tags: ['tag'], // Optional
  postFile: async () => await import(`./post-id/post.mdx`)
}
```

## Index
Project artifacts exist in a directory in the `/projects` directory such as `/src/projects/project/index.html`.
In order to add a new project, it must be registered in `/src/projects/index.js`.

A project object is of the following shape:

```javascript
{
  name: 'Project Name',
  description: 'Project description.',
  image: require('./project/card-img.png'),
  tags: ['tag'], // Optional
  "buttons": [ // Optional
      {
        "title": "View Project",
        "url": "/projects/project/index.html",
        "type": "secondary"
      }
  ]
}
```

## Acknowledgement
Made with love by [Michael Hamilton](https://miska.me).