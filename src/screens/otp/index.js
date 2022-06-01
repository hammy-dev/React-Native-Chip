import {
  Text, View, Image, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import Loader from 'react-native-modal-loader';
import { useEffect, useRef, useState } from 'react';
import AUX from '../../components/AUX-';
import styles from './style';
import { otpVerify, otp } from '../../services/UserService';
import image from '../../../assets/logootp.png';

function OTP({ route, navigation }) {
  const [spinner, setSpinner] = useState(false);
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otpChar, setOtpChar] = useState({
    1: '', 2: '', 3: '', 4: '',
  });

  const data = route.params;

  useEffect(() => {
    if (otpChar[4] !== '' && otpChar[1] !== '' && otpChar[3] !== '' && otpChar[2] !== '') {
      let code = '';
      for (const [key, value] of Object.entries(otpChar)) {
        key;
        code += value;
      }
      setSpinner(true);
      otpVerify(data.mob_num, data.country_code, code)
        .then((res) => {
          if (res.statuscode === '200') {
            navigation.navigate('UserSignUp5', data);
            setSpinner(false);
          } else {
            Alert.alert('PLease enter valid OTP');
            setSpinner(false);
          }
        });
    }
  }, [otpChar[4]]);
  const otpReq = () => {
    setSpinner(true);
    otp(data).then(((res) => {
      data.otp = res.otp;
      setSpinner(false);
      navigation.navigate('OTP', data);
    })).catch(() => { });
  };
  return (
    <AUX>
      <Loader opacity={0.8} loading={spinner} size="small" color="black" />
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          Enter SMS Code
        </Text>
        <Image style={styles.tinyLogo} source={image} />
        <Text style={styles.middleText}>
          Enter the 4 digit code received on:
        </Text>

        <Text style={styles.numberText}>
          {`+${data.country_code}${data.mob_num}`}
        </Text>
        <Text>{`Test OTP : ${data.otp}`}</Text>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              testID="pad1"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtpChar({ ...otpChar, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              testID="pad2"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtpChar({ ...otpChar, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              testID="pad3"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtpChar({ ...otpChar, 3: text });
                text ? fourthInput.current.focus() : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              testID="pad4"
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtpChar({ ...otpChar, 4: text });
              }}
            />
          </View>
        </View>
        <View style={styles.text}>
          <Text>
            Didn&apos;t receive the code ?
          </Text>
          <TouchableOpacity testID="button" onPress={() => { otpReq(); }}>
            <Text style={styles.bottomResendText}> Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AUX>

  );
}

export default OTP;
