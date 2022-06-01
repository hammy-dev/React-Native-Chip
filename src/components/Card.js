import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

import Colors from '../constants/Colors';

function Card({
  width, height, uri, title, ...rest
}) {
  // let TouchableCmp = TouchableOpacity;
  // if (Platform.OS === 'android' && Platform.Version >= 21) {
  //   TouchableCmp = TouchableNativeFeedback;
  // }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Image style={{ width, height }} source={uri} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 5,
    shadowColor: Colors.black,
    elevation: 10,
    marginTop: 15,
    marginBottom: 10,
    width: '40%',
    height: 'auto',

  },
  text: {
    textAlign: 'center',
    color: Colors.textColor,
  },

});

export default Card;
