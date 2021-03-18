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
  phoneNumber: string;
  setphoneNumber: (phoneNumber: string) => void;
};

function PhoneInputScreenComponent({
  pageState,
  setpageState,
  phoneNumber,
  setphoneNumber
}: IPhoneInputScreenProps) {
  const requestOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _phoneNumber = e.target.phoneNumber.value.replace(/[^0-9]/g, '').slice(2);
    if (!_phoneNumber) return;
    setphoneNumber(_phoneNumber);
    setpageState('otp-screen');
  };

  return (
    <>
      <form
        onSubmit={requestOTP}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes
          srcSet={[
            'emote-smiling/emote-smiling.png',
            'emote-smiling/emote-smiling@2x.png 2x',
            'emote-smiling/emote-smiling@3x.png 3x'
          ]}
        />

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
