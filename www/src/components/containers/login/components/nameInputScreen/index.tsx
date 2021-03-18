import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React from 'react';
import commonStyles from '../../login.module.css';
import BackButton from 'components/common/backButton';
import styles from './nameInput.module.css';

NameInputScreen.propTypes = {};

type INameInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
  setfirstName: (pageState: string) => void;
};

function NameInputScreen({
  pageState,
  setpageState,
  setfirstName
}: INameInputScreenProps) {
  const nameSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let name = e.target.first.value + ' ' + e.target.last.value;
    setfirstName(e.target.first.value);
    setpageState('welcome-screen');
  };
  return (
    <>
      <BackButton
        onClick={() => setpageState('password-screen')}
        className="absolute"
      />

      <form
        onSubmit={nameSubmit}
        className="flex flex-col h-full items-center max-w-sm relative w-full">
        <Emotes
          srcSet={[
            'emote-smiling/emote-smiling.png',
            'emote-smiling/emote-smiling@2x.png 2x',
            'emote-smiling/emote-smiling@3x.png 3x'
          ]}
        />

        <div className="mx-10 max-w-sm text-center">
          <Typography type="subHeading4" variant="h1">
            What’s your name?
          </Typography>
        </div>

        <div className="mt-5">
          <div className="w-64 flex justify-between">
            <input
              className={'mr-3.5 '.concat(styles.nameInput)}
              type="text"
              name="first"
              id="first"
              placeholder="First"
              autoFocus={true}
            />
            <input
              className={styles.nameInput}
              type="text"
              name="last"
              id="last"
              placeholder="Last"
            />
          </div>
        </div>

        <div className={commonStyles.loginCommonBtn}>
          <Button type="submit" onClick={() => null}>
            Done
          </Button>
        </div>
      </form>
    </>
  );
}

export default NameInputScreen;
