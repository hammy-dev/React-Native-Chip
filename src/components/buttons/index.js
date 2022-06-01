import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

// function Chipbutton({ text, customStyle, customText }) {
function Chipbutton({
  customStyle, customText, text, ...rest
}) {
  return (
    <TouchableOpacity style={[styles.button, { ...customStyle }]} {...rest}>
      <Text style={[styles.buttonText, { ...customText }]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Chipbutton;
