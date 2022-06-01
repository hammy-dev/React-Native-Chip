import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ReactNativePinView from 'react-native-pin-view';
import { Shake } from 'react-native-motion';
import {
  SafeAreaView, StatusBar, Text, TouchableOpacity, View,
} from 'react-native';
import AUX from '../../components/AUX-';
import Colors from '../../constants/Colors';
import styles from './style';

function Pin({ navigation }) {
  const pinView = useRef(null);
  const [Avalue, SetAValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  useEffect(() => {
    if (enteredPin.length === 4) {
      if (enteredPin === '1122') {
        setVisible(false);
        navigation.goBack();
      } else {
        setVisible(true);
        pinView.current.clearAll();
        SetAValue(Avalue + 1);
      }
    }
  }, [enteredPin]);
  return (
    <AUX>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={styles.safeAreaViewContainer}
      >
        <Text
          style={styles.headingText}
        >
          Unlock Chip
        </Text>
        <Text
          style={styles.subHeadingText}
        >
          Enter Pincode
        </Text>
        <Shake value={Avalue}>
          <Text style={visible ? { color: Colors.red } : { color: Colors.white }}>try again</Text>
        </Shake>
        <View testID="pinView">
          <ReactNativePinView
            inputSize={15}
            ref={pinView}
            pinLength={4}
            buttonSize={60}
            onValueChange={(value) => setEnteredPin(value)}
            buttonAreaStyle={styles.buttonAreaStyle}
            inputAreaStyle={styles.inputAreaStyle}
            inputViewEmptyStyle={styles.inputViewEmptyStyle}
            inputViewFilledStyle={styles.inputViewFilledStyle}
            buttonViewStyle={styles.buttonViewStyle}
            buttonTextStyle={styles.buttonTextStyle}
            onButtonPress={(key) => {
              if (key === 'custom_right') {
                pinView.current.clear();
              }
            }}
            customRightButton={<Icon name="backspace-outline" size={30} color={Colors.header} />}
            customLeftButton={<Icon name="finger-print-outline" size={45} color={Colors.grey} />}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPinStyle}>
            Forgot Pin?
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </AUX>
  );
}
export default Pin;
