// Misc reusable components

import { Link } from 'preact-router';
import { prettyDateFromTimestamp } from '../utils.js';
import './style.scss';

// Generic card with image, title, description, and optional buttons
export const Card = (props) => (
	<div class='card text-center'>
		<div class='card-body'>
			<img class='card-img' loading='lazy' src={ props.image } alt={ props.title }/>
			<h5 class='card-title'>{ props.name }</h5>
			<p class='card-text'>{ props.description }</p>
		</div>
		<div class='card-footer'>
			<div class='card-button-wrapper button-group' role='group' aria-label='Actions'>
				{
					props.buttons ?
						props.buttons.map(button => <a class={`button btn-${button.type}`} href={button.url} native>{ button.title }</a>) : null
				}
			</div>
		</div>
	</div>
);

// Component shown in a list of posts
export const PostListItem = (props) => (
	<div class='post-list-item'>
		<Link class='post-list-item-link' href={ props.url }>
			<div class='left-column'>
				<img src={ props.image } loading='lazy' />
			</div>

			<div class='right-column'>
				<h3 class='post-list-item-title'>{ props.title }</h3>
				<p>{ props.description }</p>
			</div>

			<p class='post-list-item-timestamp'>
				<small>
					{prettyDateFromTimestamp(props.timestamp)}
				</small>
			</p>
		</Link>
	</div>
);

// Animated loader
export const Loader = () => (
	<div class='loader-wrapper'>
		<div class='loading-icon'>
			<div />
			<div />
			<div />
		</div>
	</div>
);

// Page not found error message
export const PageNotFound = () => (
	<div class='container text-center'>
		<section>
			<div class='section-header'>
				<h1 class='section-title'>Content Not Found</h1>
			</div>

			<div>
				<p>Whatever it is that you were looking for isn't here.</p>

				<p>
					<pre>¯\_(ツ)_/¯</pre>
				</p>
			</div>
		</section>
	</div>
);

// Post not found error message
export const PostNotFound = () => (
	<pre class='text-center'>
    <code>
      throw new Error('Post not found!');
    </code>
  </pre>
);

// Clickable tag link
export const PostTag = (props) => (
	<div class='post-tag-wrapper'>
		<Link href={`/blog?tags=${props.tag}`}>
			{ props.tag }
		</Link>
	</div>
);

// List of clickable PostTag components, optionally inlined
export const PostTagList = (props) => {
	const postTagList = props.tags.map(tag => <PostTag key={tag} tag={tag}/>);
	return <div class={`tags-list-wrapper ${props.inline ? 'inline' : ''}`}>{postTagList}</div>;
};