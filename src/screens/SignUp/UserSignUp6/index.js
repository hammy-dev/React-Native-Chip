import {
  Image, View, Text, Alert, Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Chipbutton from '../../../components/buttons/index';
import styles from './styles';
import ChipPaymentModal from '../../../components/paymentModal';

import Circle from '../../../components/Circles/index';
import { signup } from '../../../services/UserService';

const image = require('../../../assets/SignUp/signup5.png');

function UserSignUp6({ route, navigation }) {
  const [visible, setVisible] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const data = route.params;

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

  const getUser = () => {
    if (image) {
      signup({ ...data, last_name: expoPushToken }, expoPushToken, Platform.OS)
        .then((res) => {
          if (res.response === 'true') {
            setVisible(true);
            setTimeout(() => {
              navigation.navigate('CreatePin', res);
              setVisible(false);
            }, 2000);
          } else {
            Alert.alert('Registration failed. The mobile number or email is already in use.');
            navigation.navigate('UserSignUp2');
          }
        });
      // .catch((e) => console.log('Error in getUser Function Catch Blocks:', e));
      navigation.navigate('UserSignUp6');
      // }
    }
  };
  return (

    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.circle1}>
            <Circle text="1" style={styles.smallerCircle1} textStyle={styles.circleText} />
          </View>
          <View style={styles.line} />
          <View style={styles.circle1}>
            <Circle text="2" style={styles.circle2} textStyle={styles.circleText} />
          </View>
        </View>
        <View>
          <View style={styles.Container1TextConatainer}>
            <Text style={styles.text1}>Upload Identity</Text>
            <Text style={styles.text2}>SignUp</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.secondContainer1}>
          <View style={styles.secondContainer2}>
            <View style={styles.secondContainer3}>
              <Text style={styles.IdentityText}>Identity Proof</Text>

            </View>
            <View style={styles.imageContainer}>
              <Image source={image} style={styles.image} />

            </View>
          </View>
        </View>

        <View style={styles.chipButtonContainer}>
          <Chipbutton
            testID="button"
            text="SignUp"
            customStyle={styles.chipButton}
            onPress={() => {
              getUser();
            }}
            customText={{ fontSize: 22 }}
          />

        </View>

      </View>
      {visible && <ChipPaymentModal heading="Sign Up" image message="User register successfully" onBackdropPress={() => { setVisible(false); }} />}
    </View>
  );
}

export default UserSignUp6;
