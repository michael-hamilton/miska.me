// Blog page

import { PostListItem } from '../../components';
import posts from '../../posts/index.js';
import '../page.scss';

const Blog = () => (
  <div className='container'>
    <div className='page-header'>
      <h1 className='page-title'>Blog</h1>
    </div>

    <div>
      { renderPostsList(posts) }
    </div>
  </div>
);

// Accepts a list of post objects and returns a list of PostItem components
const renderPostsList = (posts) => {
  return Object.keys(posts).map((post, index) => {
    return <PostListItem
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
