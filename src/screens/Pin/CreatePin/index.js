import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ReactNativePinView from 'react-native-pin-view';
// import { Shake } from 'react-native-motion';
import {
  SafeAreaView, StatusBar, Text, TouchableOpacity, Alert, View,
} from 'react-native';
import AUX from '../../../components/AUX-';
import Colors from '../../../constants/Colors';
import styles from './styles';
import { addUserPin } from '../../../services/UserService';

function CreatePin({ navigation, route }) {
  const pinView = useRef(null);
  // const [Avalue, SetAValue] = useState(0);
  // const [visible, setVisible] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [confirmPin, setConfirmPin] = useState(false);
  const [enterConfirmPin, setEnterConfirmPin] = useState('');
  const [tempState, setTempState] = useState('');

  const { data, token } = route.params;

  useEffect(() => {
    if (enteredPin.length === 4) {
      setConfirmPin(true);
      setTempState(enteredPin);
      setEnteredPin('');
      pinView.current.clearAll();
    }
    if (enterConfirmPin.length === 4) {
      if (enterConfirmPin === tempState) {
        addUserPin({ token: token.token, id: data.id, pin: enterConfirmPin })
          .then((res) => {
            // console.log("sdfsdgsdgasd", res.response);
            if (res.response === 'true') {
              setConfirmPin(false);
              setEnterConfirmPin('');
              pinView.current.clearAll();
              navigation.navigate('Login');
            } else {
              Alert.alert('Something wrong please try again');
              setConfirmPin(false);
              setEnterConfirmPin('');
              pinView.current.clearAll();
            }
          })
          .catch((e) => console.log(e));
      } else {
        Alert.alert('Please enter same Password');
        setEnterConfirmPin('');
        pinView.current.clearAll();
        setConfirmPin(false);
      }
    }
  }, [enteredPin, enterConfirmPin]);
  return (
    <AUX>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={styles.safeAreaViewContainer}
      >
        <Text
          style={styles.t1}
        >
          {confirmPin ? 'Confirm Pin' : 'Create Pin ' }
        </Text>
        <Text
          style={styles.t2}
        >
          Enter Pincode
        </Text>
        {/* <Shake value={Avalue}>
          <Text style={visible ? { color: Colors.red } : { color: Colors.white }}>try again</Text>
        </Shake> */}
        <View testID="pinView">
          <ReactNativePinView
            inputSize={15}
            ref={pinView}
            pinLength={4}
            buttonSize={60}
            onValueChange={confirmPin
              ? (value) => setEnterConfirmPin(value)
              : (value) => setEnteredPin(value)}
            buttonAreaStyle={styles.buttonAreaStyle}
            inputAreaStyle={styles.inputAreaStyle}
            inputViewEmptyStyle={styles.inputViewEmptyStyle}
            inputViewFilledStyle={{
              backgroundColor: Colors.header,
            }}
            buttonViewStyle={styles.buttonViewStyle}
            buttonTextStyle={{
              color: Colors.black,
            }}
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
          <Text style={styles.forgot}>
            Forgot Pin?
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </AUX>
  );
}
export default CreatePin;
