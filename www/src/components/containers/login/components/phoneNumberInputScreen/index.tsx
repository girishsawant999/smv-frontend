import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Img from 'components/common/img';
import Typography from 'components/common/Typography/index';
import React from 'react';
import commonStyles from '../../login.module.css';
import Styles from './phoneNumberInput.module.css';
import { IPhoneInputScreenProps } from '../../types';

PhoneInputScreenComponent.propTypes = {};

function PhoneInputScreenComponent({
  pageState,
  setpageState,
  phoneNumber,
  setphoneNumber
}: IPhoneInputScreenProps) {
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!phoneNumber && value.length > 0) {
      value = '+91'.concat(value);
    }
    setphoneNumber(value);
  };

  const requestOTP = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <Typography weight="extra-bold" variant="h1" size="20" className="x">
            Awesome, Let's get you in the system first!"
          </Typography>
          <Typography
            weight="semi-bold"
            variant="h2"
            size="16"
            className="mt-2.5 mb-5">
            Enter your mobile number
          </Typography>
        </div>

        <div className={Styles.phoneNumberInputContainer}>
          <label htmlFor="phoneNumber" className="hidden">
            Phone Number
          </label>
          <span>
            <Img
              srcSet={['indian-flag.svg']}
              alt="indian flag"
              className="rounded-2xl"
            />
          </span>
          <input
            type="tel"
            onChange={onChangePhoneNumber}
            name="phoneNumber"
            id="phoneNumber"
            maxLength={13}
            value={phoneNumber}
          />
        </div>

        <div className={commonStyles.lowerdiv}>
          <a href="#" className="underline">
            <Typography weight="extra-bold" variant="h6" size="12">
              or signup using a social account
            </Typography>
          </a>
        </div>

        <div className={commonStyles.disclaimer}>
          <Typography type="content" weight="regular" variant="p" size="12">
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
