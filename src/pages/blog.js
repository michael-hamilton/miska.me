// Blog page

import {Link} from 'preact-router';
import {prettyDateFromTimestamp} from '../utils';
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

const PostItem = (props) => (
  <div class='post-item'>
    <Link class='post-item-link' href={props.url}>
      <div className='left-column'>
        <img src={props.image} loading='lazy' />
      </div>

      <div class='right-column'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>

      <p className='post-timestamp'>
        <small>
          {prettyDateFromTimestamp(props.timestamp)}
        </small>
      </p>
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
      timestamp={posts[post].timestamp}
      url={posts[post].url}
    />;
  });
};

export default Blog;
