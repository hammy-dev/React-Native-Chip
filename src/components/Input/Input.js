import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

function SimpleInput({ title, ...rest }) {
  return (
    <View style={{ ...styles.mainContainer, ...rest }}>
      <TextInput
        style={{ ...styles.input }}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder={title}
        secureTextEntry={false}
        placeholderTextColor="#9e9e9e"
        {...rest}
      />
    </View>

  );
}
export default SimpleInput;
