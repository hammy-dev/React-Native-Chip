import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

function LinkText({
  customStyle, customText, text, ...res
}) {
  return (
    // style={[styles.button, { ...customStyle }]}
    <TouchableOpacity {...res}>
      <Text style={[styles.buttonText, { ...customText }]}>{text}</Text>
    </TouchableOpacity>

  );
}

export default LinkText;
