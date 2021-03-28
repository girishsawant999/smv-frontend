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
		<div className="fixed flex flex-col md:max-w-sm md:mx-auto w-full bottom-0 bg-white">
			<div className={'px-5 py-5 text-center '.concat(styles['btn-popover'])}>
				{children}
			</div>
		</div>
	);
};
export default BottomButtonPopover;
