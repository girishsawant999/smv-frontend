import React from 'react';
import styles from './BottomButtonPopover.module.css';
type IBottomButtonPopover = {
	children:
		| React.ReactChild
		| React.ReactChildren
		| React.ReactChild[]
		| React.ReactChildren[];
};
const BottomButtonPopover = ({ children }: IBottomButtonPopover) => {
	return (
		<div className="fixed left-0 flex flex-col w-full mx-auto md:mx-0 bottom-0 bg-white md:py-3">
			<div className={'px-5 py-5 text-center '.concat(styles['btn-popover'])}>
				{children}
			</div>
		</div>
	);
};
export default BottomButtonPopover;
