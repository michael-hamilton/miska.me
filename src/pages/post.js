// Post page

import { Component } from 'preact';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/stackoverflow-light.css';
import Posts from '../posts';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    }
  }

  async componentDidMount() {
    await this.loadPost(this.props.postId);
  }

  // Loads a post with the provided postId
  async loadPost(postId) {
    const {default: Post} = await Posts[postId].postFile();
    this.setState({post: <Post />});
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    // Initializes highlight.js after the post loads
    if(previousState.post !== this.state.post) {
      hljs.highlightAll();
    }
  }

  render() {
    return (
      <div className={'container'}>
        {this.state.post}
      </div>
    );
  }
}

export default Post;
