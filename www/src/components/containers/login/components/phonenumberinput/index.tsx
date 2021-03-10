import React from 'react';

import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import PhoneInput from 'components/common/phoneInput';
import Typography from 'components/common/Typography/index.tsx';
import Popover from 'components/common/Popover';
import commonStyles from '../../login.module.css';

PhoneInputScreenComponent.propTypes = {};

function PhoneInputScreenComponent({ pageState, setpageState }) {
  const requestOTP = () => {
    setpageState('otp-screen');
  };
  return (
    <>
      <Emotes src={'emote-smiling.png'} />

      <div className="mx-10 max-w-sm text-center">
        <Typography type="heading2" variant="h1" className="x">
          Awesome, Let's get you in the system first!"
        </Typography>
        <Typography type="subHeading4" variant="h2" className="mt-2.5 mb-5" >
          Enter your mobile number
        </Typography>
      </div>

      <div className="max-w-sm mx-5">
        <PhoneInput />
      </div>

      <div className={commonStyles.lowerdiv}>
        <a href="#" className="underline">
          <Typography type="heading6" variant="h6">
            <a>or signup using a social account</a>
          </Typography>
        </a>
      </div>

      <div className={commonStyles.disclaimer}>
        <Typography type="content6" variant="p">
          By continuing you may receive an SMS for verification. Message and data rates may apply.
        </Typography>
      </div>

      <div className={commonStyles.loginCommonBtn}>
        <Button
          label="Request OTP"
          onClick={requestOTP}
          className={'text-red-900'}
        />
      </div>
    </>
  );
}

export default PhoneInputScreenComponent;
