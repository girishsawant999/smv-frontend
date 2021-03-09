import React, { useState } from 'react';

import PhoneNumberInput from 'components/containers/login/components/phonenumberinput';
import OtpScreen from 'components/containers/login/components/otpscreen';
import Popover from 'components/common/Popover';

Login.propTypes = {};

function Login(props) {
  const [pageState, setpageState] = useState('phone-input');
  return (
    <div className="login-div">
      <Popover type="large">
        {pageState === 'phone-input' && <PhoneNumberInput  pageState={pageState} setpageState={setpageState}/>}
        {pageState === 'otp-screen' && <OtpScreen  pageState={pageState} setpageState={setpageState}/>}
      </Popover>
    </div>
  );
}

export default Login;
