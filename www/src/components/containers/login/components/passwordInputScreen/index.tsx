import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React from 'react';
import commonStyles from '../../login.module.css';
import BackButton from 'components/common/backButton';
import styles from './passwordInputScreen.module.css';

PasswordInputScreen.propTypes = {};

type IOtpInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
};

function PasswordInputScreen({ pageState, setpageState }: IOtpInputScreenProps) {
  const passwordSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let password = e.target.password.value;
    setpageState('name-screen');
  };
  return (
    <>
      <BackButton
        onClick={() => setpageState('email-screen')}
        className="absolute"
      />

      <form
        onSubmit={passwordSubmit}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes
          srcSet={[
            'emote-shh/emote-shh.png',
            'emote-shh/emote-shh@2x.png 2x',
            'emote-shh/emote-shh@3x.png 3x'
          ]}
        />

        <div className="mx-10 max-w-sm text-center">
          <Typography weight="semi-bold" variant="h1" size="16">
            Choose your account password
          </Typography>
        </div>

        <div className="mt-5">
          <div className="w-64 flex justify-between">
            <input
              className={styles.passwordInput}
              type="password"
              name="password"
              id="password"
              placeholder="Make it secure & unique"
              autoFocus={true}
            />
          </div>
        </div>

        <div className={commonStyles.loginCommonBtn}>
          <Button type="submit" onClick={() => null}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default PasswordInputScreen;
