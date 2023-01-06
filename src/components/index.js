// Misc reusable components

import { Link } from 'preact-router';
import { prettyDateFromTimestamp } from '../utils.js';
import './style.scss';

export const Card = (props) => (
	<div className='card text-center'>
		<div className='card-body'>
			<img className='card-img-top' loading='lazy' src={props.image} alt={props.title}/>
			<h5 className='card-title'>{props.name}</h5>
			<p className='card-text'>{props.description}</p>
		</div>
		<div className='card-footer'>
			<div className='card-button-wrapper button-group' role='group' aria-label='Actions'>
				{
					props.buttons ?
						props.buttons.map(button => <a className={`button btn-${button.type}`} href={button.url} data-native>{button.title}</a>) : null
				}
			</div>
		</div>
	</div>
);

export const PostListItem = (props) => (
	<div class='post-list-item'>
		<Link class='post-list-item-link' href={props.url}>
			<div className='left-column'>
				<img src={props.image} loading='lazy' />
			</div>

			<div class='right-column'>
				<h3 class='post-list-item-title'>{props.title}</h3>
				<p>{props.description}</p>
			</div>

			<p className='post-list-item-timestamp'>
				<small>
					{prettyDateFromTimestamp(props.timestamp)}
				</small>
			</p>
		</Link>
	</div>
);

export const Loader = () => (
	<div class='loader-wrapper'>
		Loading
	</div>
);

export const PageNotFound = () => (
	<div className='container text-center'>
		<div className='page-header'>
			<h1 className='page-title'>Content Not Found</h1>
		</div>

		<div>
			<p>Whatever it is that you were looking for isn't here.</p>
		</div>
	</div>
);

export const PostNotFound = () => (
	<pre className={'text-center'}>
    <code>
      throw new Error('Post not found!');
    </code>
  </pre>
);