// Post page

import { Component } from 'preact';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/stackoverflow-light.css';
import {prettyDateFromTimestamp} from '../utils';
import Posts from '../posts';
import './page.scss';

const PostNotFound = () => (
  <pre className={'text-center'}>
    <code>
      throw new Error('Post not found!');
    </code>
  </pre>
);

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    }
  }

  async componentDidMount() {
    await this.loadPost(this.props.postId);
  }

  // Loads a post with the provided postId
  async loadPost(postId) {
    try {
      const {default: Post} = await Posts[postId].postFile();

      this.setState({content: <Post /> });
    }
    catch(err) {
      this.setState({content: <PostNotFound />})
    }
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    // Initializes highlight.js after the content loads
    if(previousState.content !== this.state.content) {
      hljs.highlightAll();
    }
  }

  render() {
    const Post = Posts[this.props.postId];

    return (
      <div className='container post-wrapper'>
        <div className='post-header'>
          <h1 className='post-title'>{Post.title}</h1>
          <p className='post-timestamp'>{prettyDateFromTimestamp(Post.timestamp)}</p>
        </div>

        { this.state.content }
      </div>
    );
  }
}

export default Post;
