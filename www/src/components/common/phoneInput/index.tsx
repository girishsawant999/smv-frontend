import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './phoneInput.module.css';

PhoneInputComp.propTypes = {};

function PhoneInputComp() {
  return (
    <PhoneInput
      inputClass={styles.inputClass}
      containerClass={styles.containerClass}
      dropdownClass={styles.dropdownClass}
      country={'in'}
      onChange={(phone) => console.log(phone)}
    />
  );
}

export default PhoneInputComp;
