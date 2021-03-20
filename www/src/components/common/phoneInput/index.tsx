import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './phoneInput.module.css';

PhoneInputComp.propTypes = {};

type IPhoneInputScreenProps = {
  pageState: string;
  setpageState: (pageState: string) => void;
};

function PhoneInputComp() {
  return (
    <PhoneInput
      inputClass={styles.inputClass}
      containerClass={styles.containerClass}
      dropdownClass={styles.dropdownClass}
      country={'in'}
      disableDropdown={true}
      onlyCountries={['in']}
      onChange={(phone) => console.log(phone)}
      inputProps={{
        name: 'phoneNumber',
        required: true,
        autoFocus: true
      }}
    />
  );
}

export default PhoneInputComp;
