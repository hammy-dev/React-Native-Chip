import {
  View, Text, Alert, Image, TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { Platform } from 'expo-modules-core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import PhoneInput from 'react-native-phone-number-input';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import Chipbutton from '../../../components/buttons/index';
import styles from './styles';
import Card from '../../../components/Cards';
import AUX from '../../../components/AUX-';
import PasswordInput from '../../../components/Login/PasswordInput';
import SimpleInput from '../../../components/Input/Input';
import check from '../../../assets/checked.png';
import uncheck from '../../../assets/uncheck.png';
import modalclose from '../../../assets/homeicon/ic_close_green.png';
import htmlConstants from '../../../constants/htmlConstants';

const validator = require('validator');

function UserSignUp2({ navigation, route }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [countrycode, setCountryCode] = useState('5999');
  const [modalVisible, setModelVisible] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [read, setRead] = useState(false);
  const phoneInput = useRef(null);

  const verify = () => {
    if (!phoneNo) {
      Alert.alert(
        'CHIP',
        'Please enter phone',
        [

          { text: 'OK' },
        ],
      );
    } else if (!password) {
      Alert.alert(
        'CHIP',
        'Please enter password',
        [

          { text: 'OK' },
        ],
      );
    } else if (!validator.isEmail(email)) {
      Alert.alert(
        'CHIP',
        'Please enter email',
        [

          { text: 'OK' },
        ],
      );
    } else if (!toggleCheckBox) {
      Alert.alert(
        'CHIP',
        'Please accept terms and conditions',
        [

          { text: 'OK' },
        ],
      );
    }
    if (validator.isEmail(email) && password && phoneNo && countrycode && toggleCheckBox) {
      if (route.params.data === 'user') {
        navigation.navigate('UserSignUp4', {
          email_id: email, mob_num: phoneNo, country_code: countrycode, password, screen: 'user',
        });
      } else {
        navigation.navigate('MarchantSignUpOne', {
          email_id: email, mob_num: phoneNo, country_code: countrycode, password, screen: 'merchant',
        });
      }
    }
  };

  return (

    <AUX>
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Card>
              <View style={styles.CardInnerContainer}>
                <View testID="country">
                  <Text style={styles.Password}>Mobile Number</Text>
                  <PhoneInput
                    ref={phoneInput}
                    placeholder="xxxxxxx"
                    textContainerStyle={styles.textcontainerStyle}
                    codeTextStyle={styles.codeText}
                    containerStyle={styles.contanierStyle}
                    onChangeCountry={(code) => setCountryCode(code.callingCode[0])}
                    onChangeText={(phone) => { setPhoneNo(phone); }}
                    defaultCode="CW"
                    testID="phone"
                  />
                  <Text style={styles.smsText}>We will send you an SMS to confirm</Text>
                </View>
                <View style={styles.EmailContainer} testID="password">
                  <Text style={styles.Password}>Password</Text>
                  <PasswordInput title="password" onChangeText={setPassword} />
                </View>
                <View style={styles.EmailContainer}>
                  <Text style={styles.Email}>Email</Text>
                  <SimpleInput title="john@gmail.com" testID="email" onChangeText={setEmail} />
                </View>
                <View style={styles.secondContainer}>
                  <View>

                    {
                      checked
                        ? (
                          <TouchableOpacity
                            style={styles.checkbox}
                            onPress={() => { setChecked(false); }}
                            activeOpacity={0.7}
                          >
                            <Image source={check} style={styles.checkboxImg} />
                          </TouchableOpacity>
                        )
                        : (
                          <TouchableOpacity
                            style={styles.checkbox}
                            testID="checkbox"
                            onPress={() => { setChecked(true); setToggleCheckBox(true); }}
                            activeOpacity={0.7}
                          >
                            <Image source={uncheck} style={styles.checkboxImg} />
                          </TouchableOpacity>
                        )
                    }
                  </View>
                  <View style={styles.secondView}>
                    <View style={styles.termView}>
                      <TouchableOpacity
                        testID="viewTerm"
                        activeOpacity={0.7}
                        onPress={() => { setModelVisible(true); setRead(true); }}
                      >
                        <Text style={styles.terms}>Terms and Conditions</Text>
                      </TouchableOpacity>
                      <Text style={styles.seprate}>&</Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        testID="hideTerm"
                        onPress={() => { setModelVisible(true); setRead(false); }}
                      >
                        <Text style={styles.terms2}>Privacy Policy</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.termsandCondPara}>
                      By checking the box you agree to our
                      terms and conditions
                      &
                      Privacy Policy
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View style={styles.button}>
            <Chipbutton
              testID="button"
              text="Continue"
              customStyle={styles.customStyle}
              customText={Platform.OS === 'ios' ? { fontSize: 22 } : { fontSize: 20 }}
              onPress={() => { verify(); }}
              activeOpacity={0.7}
            />
          </View>
          <View />
        </View>
      </KeyboardAwareScrollView>
      <Modal isVisible={modalVisible}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => { setModelVisible(false); }} style={styles.modalClose}>
            <Image source={modalclose} style={styles.home} />
          </TouchableOpacity>
          <View style={styles.webStyle}>
            {read
              ? (
                <WebView
                  style={styles.container}
                  source={{ html: htmlConstants.TERMS_CONDITIONS }}
                />
              )
              : (
                <WebView
                  style={styles.container}
                  source={{ html: htmlConstants.PRIVACY_POLICY }}
                />
              )}
          </View>
          <View style={styles.modalBtnView}>
            <TouchableOpacity
              style={styles.btnView}
              activeOpacity={0.7}
            >
              <Text style={styles.text}>Agree</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnView}
              activeOpacity={0.7}
            >
              <Text style={styles.text2}>Disagree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </AUX>

  );
}

export default UserSignUp2;
