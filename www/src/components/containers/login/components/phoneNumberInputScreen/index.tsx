import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import PhoneInput from 'components/common/phoneInput';
import Typography from 'components/common/Typography/index';
import React from 'react';
import commonStyles from '../../login.module.css';

PhoneInputScreenComponent.propTypes = {};

type IPhoneInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
};

function PhoneInputScreenComponent({
  pageState,
  setpageState
}: IPhoneInputScreenProps) {
  const requestOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
    setpageState('otp-screen');
  };
  return (
    <>
      <form
        onSubmit={requestOTP}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes src={'emote-smiling.png'} />

        <div className="mx-10 max-w-sm text-center">
          <Typography type="heading2" variant="h1" className="x">
            Awesome, Let's get you in the system first!"
          </Typography>
          <Typography type="subHeading4" variant="h2" className="mt-2.5 mb-5">
            Enter your mobile number
          </Typography>
        </div>

        <div className="max-w-sm mx-5">
          <PhoneInput />
        </div>

        <div className={commonStyles.lowerdiv}>
          <a href="#" className="underline">
            <Typography type="heading6" variant="h6">
              or signup using a social account
            </Typography>
          </a>
        </div>

        <div className={commonStyles.disclaimer}>
          <Typography type="content6" variant="p">
            By continuing you may receive an SMS for verification. Message and data
            rates may apply.
          </Typography>
        </div>

        <div className={commonStyles.loginCommonBtn}>
          <Button type="submit" onClick={() => null}>
            Request OTP
          </Button>
        </div>
      </form>
    </>
  );
}

export default PhoneInputScreenComponent;
