// Blog page

import { PostListItem, PostTagList } from '../../components';
import posts from '../../posts/index.js';
import './style.scss';
import {Link} from 'preact-router';

const Blog = (props) => {
  const tagsQueryString = props.matches.tags;
  const tags = [];

  if(tagsQueryString) {
    tags.push(...tagsQueryString.split(','));
  }

  const filteredPosts = Object.keys(posts).filter(key =>
    tags.every(tag => posts[key].tags.includes(tag))
  ).map(post => posts[post]);

  return (
    <div class='container'>
      <section>
        <div class='section-header'>
          <h1 class='section-title'>Blog</h1>
        </div>

        {
          filteredPosts.length ?
          <div class='post-list'>
            {
              tags.length > 0 && <TagFilterList tags={tags} />
            }
            <PostList posts={filteredPosts} tags={tags} />
          </div> :
          <NoTagResults tags={tags} />
        }
      </section>
    </div>
  );
}

// Message showing list of tags currently being filtered
const TagFilterList = (props) => (
  <div class='tag-filter-list'>
    <p>
      <span>Showing posts tagged: </span>
      <PostTagList tags={props.tags} inline />
    </p>
  </div>
);

// No results and a list of clickable PostTag components
const NoTagResults = (props) => {
  return (
    <div class='post-list-no-results'>
      <div class='tag-message-wrapper'>
        <p>No posts found with the tag{props.tags.length > 1 ? 's' : ''}</p>
        <PostTagList tags={props.tags} />
      </div>

      <p className='text-center'>
        <small>
          <Link href='/blog' class='link-highlight'>Click here</Link> to go back to the blog.
        </small>
      </p>
    </div>
  );
}

// List of PostItem components from a provided list of post objects
const PostList = (props) => (
    props.posts.map((post) => (
      <PostListItem
        key={post.url}
        title={post.title}
        description={post.description}
        image={post.image}
        timestamp={post.timestamp}
        url={post.url}
      />
  ))
);

export default Blog;
