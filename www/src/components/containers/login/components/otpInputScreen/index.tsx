import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import BackButton from 'components/common/backButton';
import styles from './otpscreen.module.css';

OtpInputScreenComp.propTypes = {};

type IOtpInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
  phoneNumber: string;
};

const OTP_INPUTS = ['otp1', 'otp2', 'otp3', 'otp4'];
function OtpInputScreenComp({
  pageState,
  setpageState,
  phoneNumber
}: IOtpInputScreenProps) {
  const [inValid, setinValid] = useState(false);

  const verifyOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let otp = '';
    OTP_INPUTS.forEach((element) => {
      otp.concat(e.target[element].value);
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

        <div className="mx-10 max-w-sm text-center">
          <Typography type="subHeading4" variant="h1">
            Enter the 4 digit code sent to you at {phoneNumber}.
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
                <input
                  className={styles.otpinput}
                  type="text"
                  name={item}
                  id={item}
                  maxLength={1}
                  autoFocus={index === 0}
                />
              );
            })}
          </div>
        </div>

        <div className={commonStyles.lowerdiv}>
          {inValid ? (
            <Typography type="heading6" variant="h6" className="underline">
              I haven’t recieved a code
            </Typography>
          ) : (
            <Typography type="subHeading6" variant="h6">
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
