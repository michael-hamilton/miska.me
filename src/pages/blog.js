// Blog page

import { PostItem } from '../components.js';
import posts from '../posts';
import './page.scss';

const Blog = () => (
  <div className='container'>
    <h1 className='main-heading text-center'>Blog</h1>

    <hr />

    <div>
      {renderPostsList(posts)}
    </div>
  </div>
);

// Accepts a list of post objects and returns a list of PostItem components
const renderPostsList = (posts) => {
  return Object.keys(posts).map((post, index) => {
    return <PostItem
      key={posts[post].url}
      title={posts[post].title}
      description={posts[post].description}
      image={posts[post].image}
      timestamp={posts[post].timestamp}
      url={posts[post].url}
    />;
  });
};

export default Blog;
