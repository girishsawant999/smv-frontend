import Popover from 'components/common/Popover';
import EmailInputScreen from 'components/containers/login/components/emailInputScreen';
import NameInput from 'components/containers/login/components/nameInputScreen';
import OtpScreen from 'components/containers/login/components/otpInputScreen';
import PasswordInputScreen from 'components/containers/login/components/passwordInputScreen';
import PhoneNumberInput from 'components/containers/login/components/phoneNumberInputScreen';
import WelcomeScreen from 'components/containers/login/components/welcomeScreen';
import SocialSignup from 'components/containers/login/components/socialSignup';
import React, { useState } from 'react';
import styles from './login.module.css';
import { IName } from './types';

Login.propTypes = {};

function Login() {
	const [pageState, setpageState] = useState<string>('phone-input');
	const [phoneNumber, setphoneNumber] = useState('');
	const [name, setname] = useState<IName>({ first: '', last: '' });

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
				{pageState === 'social-signup' && (
					<SocialSignup
						pageState={pageState}
						setpageState={setpageState}
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
					<EmailInputScreen
						pageState={pageState}
						setpageState={setpageState}
					/>
				)}
				{pageState === 'password-screen' && (
					<PasswordInputScreen
						pageState={pageState}
						setpageState={setpageState}
					/>
				)}
				{pageState === 'name-screen' && (
					<NameInput
						pageState={pageState}
						setpageState={setpageState}
						setname={setname}
						name={name}
					/>
				)}
				{pageState === 'welcome-screen' && (
					<WelcomeScreen name={name} setpageState={setpageState} />
				)}
			</Popover>
		</div>
	);
}

export default Login;
