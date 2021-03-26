import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import BackButton from 'components/common/backButton';
import styles from './otpscreen.module.css';
import { IOtpInputScreenProps, IOTP } from '../../types';

OtpInputScreenComp.propTypes = {};

const OTP_INPUTS = ['otp1', 'otp2', 'otp3', 'otp4'];
function OtpInputScreenComp({
	pageState,
	setpageState,
	phoneNumber
}: IOtpInputScreenProps) {
	const [inValid, setinValid] = useState(false);
	const [OTP, setOTP] = useState<IOTP>({});

	const onOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setOTP({ ...OTP, [e.target.name]: value });
		const index = OTP_INPUTS.indexOf(e.target.name);
		if (value.length === 1) {
			if (index < OTP_INPUTS.length - 1) {
				const ele = document.getElementById(OTP_INPUTS[index + 1]);
				ele && ele.focus();
			}
		} else if (value.length === 0) {
			if (index > 0) {
				const ele = document.getElementById(OTP_INPUTS[index - 1]);
				ele && ele.focus();
			}
		}
	};

	const verifyOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const otp = '';
		OTP_INPUTS.forEach((element) => {
			otp.concat(OTP[element]);
		});
		if (!inValid) {
			setinValid(true);
			return;
		}
		setpageState('email-screen');
	};
	return (
		<>
			<BackButton
				onClick={() => setpageState('phone-input')}
				className="absolute"
			/>
			<form
				onSubmit={verifyOTP}
				className="flex flex-col h-full items-center max-w-sm relative w-full">
				<Emotes
					srcSet={
						inValid
							? [
									'emote-thinking/emote-thinking.png',
									'emote-thinking/emote-thinking@2x.png 2x',
									'emote-thinking/emote-thinking@3x.png 3x'
							  ]
							: [
									'emote-smiling/emote-smiling.png',
									'emote-smiling/emote-smiling@2x.png 2x',
									'emote-smiling/emote-smiling@3x.png 3x'
							  ]
					}
				/>

				<div className="mx-10 max-w-sm text-center">
					<Typography weight="semi-bold" variant="h1" size="16">
						Enter the 4 digit code sent to you at {phoneNumber.slice(3)}.
						{inValid ? (
							<span className="text-red-500">
								&nbsp;Did you enter the correct mobile number?
							</span>
						) : (
							<></>
						)}
					</Typography>
				</div>

				<div className="otp-input-div mt-5">
					<div className="w-64 flex justify-between">
						{OTP_INPUTS.map((item, index) => {
							return (
								<>
									<label htmlFor={item} className="hidden">
										Enter OTP number {index + 1}
									</label>
									<input
										className={styles.otpinput}
										type="text"
										name={item}
										id={item}
										maxLength={1}
										autoFocus={index === 0}
										onChange={onOTPChange}
									/>
								</>
							);
						})}
					</div>
				</div>

				<div className={commonStyles.lowerdiv}>
					{inValid ? (
						<Typography
							weight="extra-bold"
							variant="h6"
							size="12"
							className="underline">
							I haven’t recieved a code
						</Typography>
					) : (
						<Typography weight="semi-bold" variant="h6" size="12">
							Resend code in 0:20
						</Typography>
					)}
				</div>

				<div className={commonStyles.loginCommonBtn}>
					<Button type="submit" onClick={() => null}>
						Verify
					</Button>
				</div>
			</form>
		</>
	);
}

export default OtpInputScreenComp;
