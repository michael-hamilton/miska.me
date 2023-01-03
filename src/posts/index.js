/*
 * Posts should exist in a directory inside /posts as an MDX file such as /post-1/post.mdx
 * Posts are registered in this file as an object with the format:
 *
 * 'post-id': {
 *    title: 'Post Title',
 *    description: 'Post description.',
 *    url: '/blog/post-id',
 *    image: require('./post-id/post-image.png'),
 *    tags: ['tag'], // Optional
 *    postFile: async () => await import(`./post-id/post.mdx`)
 *  }
 */

const Posts = {
  'tv-static': {
    title: 'TV Static',
    description: 'A JS snippet which draws a TV static like effect to a canvas.',
    url: '/blog/tv-static',
    image: require('./tv-static/post-image.png'),
    tags: ['javascript', 'canvas'],
    postFile: async () => await import(`./tv-static/post.mdx`)
  }
};

export default Posts;
