import {
  View, Text, Image, TouchableOpacity, Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Circle from '../../components/Circles/index';
import styles from './style';
import ChipPaymentModal from '../../components/paymentModal';
import Chipbutton from '../../components/buttons/index';
import { MerchantSignUp } from '../../services/UserService';

function SignDoc({ route, navigation }) {
  const [flag, setFlag] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color1, setcolor1] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [color2, setcolor2] = useState(false);

  const data = route.params;
  delete data.screen;

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      Alert.alert('Must use physical device for Push Notifications');
    }
    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token.split('ExponentPushToken')));
  }, []);

  const images = () => {
    if (flag === false) {
      return data.headshot_img;
    }

    return data.identity_img;
  };

  const APICall = async () => {
    setVisible(true);
    if (expoPushToken[1]) {
      MerchantSignUp({ ...data, last_name: expoPushToken[1] }, expoPushToken[1])
        .then((res) => {
          if (res.response === 'true') {
            navigation.navigate('Login');
          } else {
            console.log('Response is not true');
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.circleContainer}>
        <Circle textStyle={styles.circletext} text="1" style={styles.circleOne} />
        <View style={styles.lineOne} />
        <Circle textStyle={styles.title} text="2" style={styles.circleTwo} />
        <View style={styles.lineTwo} />
        <Circle textStyle={styles.title} text="3" style={styles.circleThree} />
      </View>
      <View style={styles.circleTextContainer}>
        <Text style={styles.circleTextOne}>Identity Proof</Text>
        <Text style={styles.circleTextTwo}>Upload document</Text>
        <Text style={styles.circleTextThree}>Sign Up</Text>
      </View>

      <View style={styles.mainCartContainer}>

        <View style={styles.mainButtonsContainer}>
          <TouchableOpacity
            testID="activeButton"
            style={color1
              ? styles.activeButton1
              : styles.disableButton1}
            onPress={() => {
              images(setFlag(true));
              setcolor2(false);
              setcolor1(false);
            }}
          >

            <Text style={styles.button1Text}>Identity Proof</Text>

          </TouchableOpacity>
          <TouchableOpacity
            testID="inactiveButton"
            style={color2 ? styles.activeButton2 : styles.disableButton2}
            onPress={() => { images(setFlag(false)); setcolor1(true); setcolor2(true); }}
          >
            <Text style={styles.button2Text}>Document</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainImageContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: images(),
            }}
          />
        </View>

      </View>
      <View style={styles.buttonContainer}>
        <Chipbutton
          testID="upload"
          text="SIGN UP"
          customStyle={styles.insideChipButton}
          customText={styles.insideChipButtonText}
          onPress={() => { APICall(); }}
        />
      </View>
      {visible && <ChipPaymentModal heading="Sign Up" image message="User register successfully" testID="modalButton" onBackdropPress={() => { setVisible(false); }} />}
    </View>

  );
}

export default SignDoc;
