// Misc reusable components

import { Link } from 'preact-router';
import { prettyDateFromTimestamp } from './utils.js';

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

export const PostItem = (props) => (
	<div class='post-item'>
		<Link class='post-item-link' href={props.url}>
			<div className='left-column'>
				<img src={props.image} loading='lazy' />
			</div>

			<div class='right-column'>
				<h3 class='post-item-title'>{props.title}</h3>
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