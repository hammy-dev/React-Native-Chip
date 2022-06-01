import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';

// function Chipbutton({ text, customStyle, customText }) {
function ChipLoaderbutton({
  customStyle, customText, text, isLoading, isLoginbtn, loadingMessage, ...rest
}) {
  return (
    <TouchableOpacity disabled={isLoading} style={[styles.button, { ...customStyle }]} {...rest}>
      {isLoading && <ActivityIndicator size="small" color={isLoginbtn ? 'black' : 'white'} />}
      <Text
        style={[styles.buttonText,
          { ...customText }]}
      >
        {isLoading ? loadingMessage : text}
      </Text>
    </TouchableOpacity>
  );
}

export default ChipLoaderbutton;
