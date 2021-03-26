import React from 'react';
import Icon from '../../../common/Icon';

function FixedBottomButton() {
	return (
		<div className="flex fixed bottom-5 w-full justify-center overflow-hidden">
			<div className="flex bg-#1A181B py-6 px-7 w-32 h-17.5 rounded-30px justify-between">
				<div className="shadow-button">
					<Icon
						src={'compass@3x.png'}
						alt="compass_icon _image"
						className="w-5 h-5"
					/>
				</div>
				<div>
					<Icon
						src={'user@3x.png'}
						alt="compass_icon _image"
						className="w-4 h-4.5"
					/>
				</div>
			</div>
			<div className="flex bg-#1A181B p-6 ml-5 w-17.5 h-17.5 rounded-30px text-white">
				<div>
					<Icon
						src={'chat@3x.png'}
						alt="compass_icon _image"
						className="w-5 h-5"
					/>
				</div>
			</div>
		</div>
	);
}

export default FixedBottomButton;
