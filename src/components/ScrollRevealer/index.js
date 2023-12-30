import { useEffect, useRef, useState } from 'preact/hooks';
import * as styles from './styles.module.scss';

const ScrollRevealer = ({ children, delay = 0 }) => {
	const container = useRef();
	const [isRevealed, setIsRevealed] = useState(false);
	const [delayTimer, setDelayTimer] = useState(null);

	useEffect(() => {
		checkElementPosition();
	}, []);

	useEffect(() => {
		if(!isRevealed) {
			document.addEventListener('scroll', checkElementPosition);
		}
		else {
			document.removeEventListener('scroll', checkElementPosition);
		}

		return () => {
			document.removeEventListener('scroll', checkElementPosition);
		};
	}, [isRevealed]);

	const checkElementPosition = (e) => {
		let timer = null;

		if(delayTimer) {
			clearTimeout(delayTimer);
		}
		else {
			timer = setTimeout(() => {
				const {top, height} = container.current.getBoundingClientRect();

				if (window.innerHeight - height > top) {
					setIsRevealed(true);
				}
			}, delay);
		}

		setDelayTimer(timer);
	};

	return (
		<div ref={container} class={[styles.scrollRevealer, isRevealed ? styles.isRevealed : styles.isHidden].join(' ')}>
			{ children }
		</div>
	);
}

export default ScrollRevealer;
