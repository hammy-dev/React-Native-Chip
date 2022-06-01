import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import Colors from '../../constants/Colors';

function PasswordInput({ title, ...rest }) {
  const [secure, setSecure] = useState('eye-off');
  const [showHide, setShowHide] = useState(true);
  const secureEntry = () => {
    if (secure === 'eye-off') {
      setShowHide(false);
      setSecure('eye');
    } else if (secure === 'eye') {
      setShowHide(true);
      setSecure('eye-off');
    }
  };

  return (
    <View style={{ ...styles.inputBox }}>
      <View style={{ ...styles.innerContainer }}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={title}
          secureTextEntry={showHide}
          placeholderTextColor={Colors.grey}
          {...rest}

        />
      </View>
      <View style={{ ...styles.eye }} testID="pressView">
        <Pressable
          testID="testId"
          onPress={() => {
            secureEntry();
          }}
        >
          <MaterialCommunityIcons name={secure} size={19} color="#232323" />
        </Pressable>
      </View>
    </View>
  );
}

export default PasswordInput;
