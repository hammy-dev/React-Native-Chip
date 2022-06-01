import React, { useRef } from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';

function Input({ ...rest }) {
  const phoneInput = useRef(null);

  return (
    <View style={styles.phoneView}>
      <PhoneInput
        ref={phoneInput}
        placeholder="xxxxxxxx"
        textContainerStyle={styles.textcontainerStyle}
        containerStyle={styles.contanierStyle}
        {...rest}
      />
    </View>
  );
}
export default Input;
