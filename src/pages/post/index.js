// Post page

import { Component } from 'preact';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/stackoverflow-light.css';
import { PostNotFound, PostTagList } from '../../components';
import { prettyDateFromTimestamp } from '../../utils.js';
import Posts from '../../posts/index.js';
import './style.scss';

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

  // Asynchronously loads a post with the provided postId
  async loadPost(postId) {
    try {
      const Post = Posts[postId];
      const { default: PostComponent } = await Post.postFile();

      this.setState({content: (
        <section>
          <div class='section-header'>
            <h1 class='section-title'>{ Post.title }</h1>
            <p class='post-timestamp'>{ prettyDateFromTimestamp(Post.timestamp) }</p>
          </div>

          <div class='post-tag-list-wrapper'>
            <PostTagList tags={Post.tags} />
          </div>

          <PostComponent />
        </section>
      )});
    }
    catch(err) {
      this.setState({ content: <PostNotFound /> });
    }
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    // Initializes highlight.js after the content loads
    if(previousState.content !== this.state.content) {
      hljs.highlightAll();
    }
  }

  render() {
    return (
      <div class='container post-wrapper'>
        { this.state.content }
      </div>
    );
  }
}

export default Post;
