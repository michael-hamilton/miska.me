// Blog page

import {Link} from 'preact-router';
import posts from '../posts';

const Blog = () => (
  <div className={'container'}>
    <h1 className={'display-1'}>Blog</h1>

    <hr />

    <div>
      {renderPostsList(posts)}
    </div>
  </div>
);

const PostItem = (props) => (
  <div class='post-item'>
    <Link class='post-item-link' href={props.url}>
      <div className={'left-column'}>
        <img src={props.image} loading='lazy' />
      </div>

      <div class={'right-column'}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
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
      url={posts[post].url}
    />;
  });
};

export default Blog;
