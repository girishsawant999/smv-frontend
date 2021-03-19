import Emotes from 'components/common/emotes';
import Typography from 'components/common/Typography';
import React, { useEffect } from 'react';

WelcomeScreen.propTypes = {};

type IWelcomeScreenProps = {
  setpageState: (pageState: string) => void;
  firstName: string;
};

function WelcomeScreen({ setpageState, firstName }: IWelcomeScreenProps) {
  useEffect(() => {
    setTimeout(() => {
      setpageState('phone-input');
    }, 5000);
  }, []);

  return (
    <>
      <div className="h-full w-full max-w-sm mx-4 flex flex-col items-center justify-center">
        <Emotes
          srcSet={[
            'emote-welcome/emote-welcome.png',
            'emote-welcome/emote-welcome@2x.png 2x',
            'emote-welcome/emote-welcome@3x.png 3x'
          ]}
        />

        <div className="mx-10 max-w-sm text-center">
          <Typography weight="extra-bold" variant="h1" size="20">
            Hey {firstName} <br /> Glad to have you here.
          </Typography>
        </div>
      </div>
    </>
  );
}

export default WelcomeScreen;
