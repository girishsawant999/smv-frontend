import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

PhoneInputComp.propTypes = {};

function PhoneInputComp(props) {
  return <PhoneInput country={'in'} onChange={(phone) => console.log(phone)} />;
}

export default PhoneInputComp;
