// Blog page

import { PostListItem } from '../../components';
import posts from '../../posts/index.js';

const Blog = () => (
  <div class='container'>
    <div class='section-header'>
      <h1 class='section-title'>Blog</h1>
    </div>

    <div class='post-list'>
      { renderPostList(posts) }
    </div>
  </div>
);

// Accepts a list of post objects and returns a list of PostItem components
const renderPostList = (posts) => {
  return Object.keys(posts).map((post) => {
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
