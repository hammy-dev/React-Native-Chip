/* Native Reach Import */
import { useState, useEffect, useRef } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

import { connect } from 'react-redux';
import * as Notifications from 'expo-notifications';
/* Custom Redux Component */

import PhoneInput from 'react-native-phone-number-input';
// import Loader from 'react-native-modal-loader';
import LottieView from 'lottie-react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Chipbutton from '../buttons/index';
import styles from './styles';
import Card from '../Cards/index';
import PasswordInput from './PasswordInput';
import loaderJson from '../../assets/loading.json';
import { changeToken, setUser } from '../../redux/actions/index';

/* API Services */
import { Login, updateProfile } from '../../services/UserService';

function LoginCard({ navigation, updateUserToken, getUserInfo }) {
  const [password, setPassword] = useState('');
  const [countrycode, setCountryCode] = useState('+5999');
  const [phoneNo, setPhoneNo] = useState('');
  const [enable, setEnable] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [loader, setLoader] = useState(false);
  const phoneInput = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    if (password.length > 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  });

  useEffect(() => {
    Notifications.getPermissionsAsync()
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return Notifications.requestPermissionsAsync();
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          throw new Error('Permission not granted.');
        }
      })
      .then(() => Notifications.getExpoPushTokenAsync())
      .then((response) => {
        const token = response.data;
        setExpoPushToken(token);
      })
      .catch((err) => err);
  }, []);

  /* Get User Funcation Make an API call and get the user details */
  const getUser = () => {
    const deviceType = Platform.OS;
    setLoader(true);
    if (countrycode) {
      if (phoneNo) {
        Login({
          countrycode, phoneNo, password, deviceType, expoPushToken,
        })
          .then((res) => {
            if (res.response === 'true') {
              setLoader(false);
              getUserInfo(res);
              updateUserToken(true);
              const {
                username, id_num, dob, mob_num,
              } = res.data;
              updateProfile(username, id_num, dob, mob_num, expoPushToken).then((resData) => {
                if (resData.response === 'true') {
                  console.log('TokenUpdated');
                }
              });
            } else {
              Alert.alert(res.message);
              setLoader(false);
            }
          })
          .catch(() => { setLoader(false); });
      } else {
        Alert.alert('Please enter your registered number');
      }
    } else {
      Alert.alert('Please Select Country Code');
    }
  };

  return (

    <View style={styles.cardMainContainer}>
      {/* <Loader opacity={0.8} loading={spinner} size="small" color="black" /> */}
      {loader && (
        <Spinner
          visible={loader}
          customIndicator={(
            <LottieView
              autoPlay
              ref={animation}
              style={styles.loader}
              source={loaderJson}
            />
          )}
        />
      )}
      <Card style={styles.loginCard}>
        <View style={styles.phoneInput} testID="number">
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
        </View>
        {/* Password Feilds */}
        <PasswordInput
          testID="passwordField"
          title="Password"
          value={password}
          autoCapitalize="none"
          onChangeText={(pass) => setPassword(pass)}
        />
        <View style={styles.simpleView} />
        {/* Navigate to Forgot Password Screen */}
        <TouchableOpacity testID="forgetPassword" onPress={() => { navigation.navigate('ForgotPassword'); }}>
          <Text style={styles.forgetPassword}>Forgot your password?</Text>
        </TouchableOpacity>
        {/* Login Button */}
        <View style={styles.loginBtn}>
          <Chipbutton
            text="Login"
            customStyle={enable ? styles.Loginbutton : styles.LoginbuttonDisable}
            customText={enable ? styles.Logintext : styles.LogintextDisable}
            disabled={!enable}
            testID="getUser"
            onPress={() => { getUser(); }}
          />
        </View>
        {/* Seperation between Login and Create Account Button */}
        <View style={styles.sperator}>
          <View style={styles.line} />
          <View><Text>OR</Text></View>
          <View style={styles.leftLine} />
        </View>
      </Card>
      {/* Create Account Button */}
      <View style={styles.CreateAccount}>
        <Chipbutton
          text="Create an Account"
          customStyle={styles.Createbutton}
          customText={styles.CreateAccountText}
          testID="button"
          onPress={() => { navigation.navigate('SignUp'); }}
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => (
  {
    userToken: state.userToken,
  });

const mapDispatchToProps = (dispatch) => ({
  updateUserToken: (value) => dispatch(changeToken(value)),
  getUserInfo: (value) => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
