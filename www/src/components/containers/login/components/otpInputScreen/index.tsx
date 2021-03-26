import BackButton from 'components/common/backButton';
import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useEffect, useState } from 'react';
import commonStyles from '../../login.module.css';
import { IOTP, IOtpInputScreenProps } from '../../types';
import styles from './otpscreen.module.css';

OtpInputScreenComp.propTypes = {};

const OTP_INPUTS: Array<string> = ['otp1', 'otp2', 'otp3', 'otp4'];
function OtpInputScreenComp({
	pageState,
	setpageState,
	phoneNumber
}: IOtpInputScreenProps) {
<<<<<<< HEAD
  const [inValid, setinValid] = useState(false);
  const [OTP, setOTP] = useState<IOTP>({
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: ''
  });

  const [timer, setTimer] = React.useState({
    minutes: 1,
    seconds: 30
  });
  const [timerEnd, settimerEnd] = useState(false);

  const onClickResendCode = () => {
    settimerEnd(false);
    setTimer({
      minutes: 0,
      seconds: 60
    });
  };

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
      settimerEnd(true);
    }
  }, [timer]);
=======
	const [inValid, setinValid] = useState(false);
	const [OTP, setOTP] = useState<IOTP>({});
>>>>>>> 12b4f6a71ba35a4be2296322d7b16762f947c108

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

<<<<<<< HEAD
  const verifyOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let otp = '';
    OTP_INPUTS.forEach((element: string) => {
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
      <BackButton onClick={() => setpageState('phone-input')} className="absolute" />
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
=======
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
>>>>>>> 12b4f6a71ba35a4be2296322d7b16762f947c108

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
        <div className="mt-8">
          {timerEnd ? (
            <Typography
              weight="extra-bold"
              variant="h4"
              size="14"
              className="underline">
              <button
                type="button"
                className="focus:outline-none underline font-extrabold"
                onClick={onClickResendCode}>
                I haven’t recieved a code
              </button>
            </Typography>
          ) : (
            <Typography weight="semi-bold" variant="h4" size="14">
              Resend code in {timer.minutes}:{('0' + timer.seconds).slice(-2)}
            </Typography>
          )}
        </div>

        <div className={commonStyles.lowerdiv}>
          <div className={commonStyles.loginCommonBtn}>
            <Button type="submit">Verify</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default OtpInputScreenComp;
