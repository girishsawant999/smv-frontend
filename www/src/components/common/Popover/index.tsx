import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import FloatingButton from 'components/common/FloatingButtons';

import styles from './popover.module.css';

type IPopoverProps = {
	type: 'large' | 'small';
	show: boolean;
	onClose: () => void;
	selector: string;
	children:
		| React.ReactChild
		| React.ReactChildren
		| React.ReactNode
		| React.ReactChild[]
		| React.ReactChildren[];
};
const Popover = ({ type, show, onClose, selector, children }: IPopoverProps) => {
	const ref = useRef<HTMLInputElement | null>(null);
	const [mounted, setMounted] = useState(false);

	const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
		if ((e.charCode || e.keyCode) === 27) {
			onClose();
		}
	};

	useEffect(() => {
		ref.current = document.querySelector(selector) as HTMLInputElement;
		setMounted(true);
	}, [selector]);

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
		};
	}, []);

	if (type === 'large')
		return (
			<>
				{!show
					? null
					: mounted && ref.current
					? ReactDOM.createPortal(
							<div
								className={styles['popover-parent']}
								onClick={onClose}>
								<div
									className={
										styles.popupdiv +
										' flex flex-col items-center relative'
									}
									onClick={(e) => e.stopPropagation()}>
									<div className="flex flex-col absolute top-0 right-24 hidden md:block">
										<FloatingButton
											src={'cross.svg'}
											srcSet={'cross.svg 640w'}
											alt={'cancel'}
										/>
									</div>
									{children}
								</div>
							</div>,
							ref.current
					  )
					: null}
			</>
		);

	return <div>{children}</div>;
};
export default Popover;
