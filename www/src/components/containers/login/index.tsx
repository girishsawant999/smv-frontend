import Popover from 'components/common/Popover';
import EmailInputScreen from 'components/containers/login/components/emailInputScreen';
import OtpScreen from 'components/containers/login/components/otpInputScreen';
import PhoneNumberInput from 'components/containers/login/components/phoneNumberInputScreen';
import React, { useState } from 'react';
import PasswordInputScreen from './components/passwordInputScreen';
import styles from './login.module.css';

Login.propTypes = {};

function Login() {
  const [pageState, setpageState] = useState<string>('phone-input');
  const [phoneNumber, setphoneNumber] = useState('');

  return (
    <div className={styles.logindiv}>
      <Popover type="large">
        {pageState === 'phone-input' && (
          <PhoneNumberInput
            pageState={pageState}
            setpageState={setpageState}
            phoneNumber={phoneNumber}
            setphoneNumber={setphoneNumber}
          />
        )}
        {pageState === 'otp-screen' && (
          <OtpScreen
            pageState={pageState}
            setpageState={setpageState}
            phoneNumber={phoneNumber}
          />
        )}
        {pageState === 'email-screen' && (
          <EmailInputScreen pageState={pageState} setpageState={setpageState} />
        )}
        {pageState === 'password-screen' && (
          <PasswordInputScreen pageState={pageState} setpageState={setpageState} />
        )}
      </Popover>
    </div>
  );
}

export default Login;
