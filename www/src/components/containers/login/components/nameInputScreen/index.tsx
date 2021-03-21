import Button from 'components/common/Button';
import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useState } from 'react';
import commonStyles from '../../login.module.css';
import BackButton from 'components/common/backButton';
import styles from './nameInput.module.css';

NameInputScreen.propTypes = {};

type IName = {
  [key: string]: string;
};

type INameInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
  setname: (obj: IName) => void;
  name: IName;
};

function NameInputScreen({
  pageState,
  setpageState,
  setname,
  name
}: INameInputScreenProps) {
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname({ ...name, [e.target.name]: e.target.value });
  };

  const nameSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <Typography weight="semi-bold" variant="h1" size="16">
            What’s your name?
          </Typography>
        </div>

        <div className="mt-5">
          <div className="w-64 flex justify-between">
            <label htmlFor="first" className="hidden">
              Enter first name
            </label>
            <input
              className={'mr-3.5 '.concat(styles.nameInput)}
              type="text"
              name="first"
              id="first"
              placeholder="First"
              autoFocus={true}
              onChange={onNameChange}
              value={name.first}
            />
            <label htmlFor="last" className="hidden">
              Enter last name
            </label>
            <input
              className={styles.nameInput}
              type="text"
              name="last"
              id="last"
              placeholder="Last"
              onChange={onNameChange}
              value={name.last}
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
