import React, { useState, useEffect } from 'react';
import Typography from 'components/common/Typography';
import { ITimer } from '../../../types';

function Timer({ selectedTimer, onTimerEnd }: ITimer) {
	const [timer, setTimer] = React.useState(selectedTimer);

	useEffect(() => setTimer(selectedTimer), [selectedTimer]);

	useEffect(() => {
		let _seconds = timer.minutes * 60 + timer.seconds - 1;
		if (_seconds > 0) {
			setTimeout(
				() =>
					setTimer({
						minutes: parseInt(String(_seconds / 60)),
						seconds: _seconds % 60
					}),
				1000
			);
		} else {
			onTimerEnd();
		}
	}, [timer]);

	return (
		<Typography weight="semi-bold" variant="h4" size="14">
			Resend code in {timer.minutes}:{('0' + timer.seconds).slice(-2)}
		</Typography>
	);
}

export default Timer;
