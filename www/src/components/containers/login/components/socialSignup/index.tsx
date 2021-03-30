import React from 'react';
import Styles from './socialSignup.module.css';
import { IEmailInputScreenProps } from '../../types';
import BackButton from 'components/common/backButton';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import Img from 'components/common/Img';

function SocialSignUp({ setpageState }: IEmailInputScreenProps) {
	const onGoogleSignupClick = () => {};
	const onFacebookSignUp = () => {};
	const SOCIAL_SIGNUP_METHOD = [
		{
			id: 'google',
			label: 'Continue with Google',
			image: {
				src: [
					'google/google.png',
					'google/google@2x.png 2x',
					'google/google@3x.png 3x'
				],
				alt: 'google signup'
			},
			onclick: onGoogleSignupClick
		},
		{
			id: 'facebook',
			label: 'Continue with Facebook',
			image: {
				src: [
					'facebook/facebook.png',
					'facebook/facebook@2x.png 2x',
					'facebook/facebook@3x.png 3x'
				],
				alt: 'facebook signup'
			},
			onclick: onFacebookSignUp
		}
	];
	return (
		<>
			<BackButton
				onClick={() => setpageState('phone-input')}
				className="absolute"
			/>
			<Emotes
				srcSet={[
					'emote-smiling/emote-smiling.png',
					'emote-smiling/emote-smiling@2x.png 2x',
					'emote-smiling/emote-smiling@3x.png 3x'
				]}
			/>
			<div className="mx-10 max-w-sm text-center">
				<Typography weight="semi-bold" variant="h1" size="16">
					Choose an account
				</Typography>
			</div>
			<div className="mt-1 max-w-xs w-full">
				{SOCIAL_SIGNUP_METHOD.map((method) => (
					<button
						key={method.id}
						className={
							Styles.socialSignupButton +
							' mt-4 focus:outline-none w-full px-5 py-4 rounded-20px flex items-center justify-between'
						}
						onClick={onGoogleSignupClick}>
						<Typography weight="semi-bold" variant="h1" size="16">
							{method.label}
						</Typography>
						<Img srcSet={method.image.src} alt={method.image.alt} />
					</button>
				))}
			</div>

			<div className="max-w-xs text-center mt-10">
				<Typography type="content" weight="regular" variant="p" size="12">
					By continuing you may receive an SMS for verification. Message
					and data rates may apply.
				</Typography>
			</div>
		</>
	);
}

export default SocialSignUp;
