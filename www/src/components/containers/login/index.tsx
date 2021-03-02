import React, { useState } from 'react';
import PhoneNumberInput from 'components/containers/login/components/phonenumberinput';
import OtpScreen from 'components/containers/login/components/otpscreen';

Login.propTypes = {};

function Login(props) {
  const [pageState, setpageState] = useState('phone-input');
  return (
    <div className="login-div">
      {pageState === 'phone-input' && <PhoneNumberInput  pageState={pageState} setpageState={setpageState}/>}
      {pageState === 'otp-screen' && <OtpScreen  pageState={pageState} setpageState={setpageState}/>}
    </div>
  );
}

export default Login;
