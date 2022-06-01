import { useEffect, useState } from 'react';
import {
  Text, View, Image, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import Card from '../../../components/Cards/index';
import AUX from '../../../components/AUX-/index';
import image from '../../../assets/dummy-pic.jpg';
import arrows from '../../../assets/arrows.png';
import Input from '../../../components/Input/Input';
import Chipbutton from '../../../components/buttons/index';
import ChipPaymentModal from '../../../components/paymentModal/index';
import { requestMoney } from '../../../services/Transaction';
import { getUserDetails } from '../../../services/UserService';
import styles from './styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
  }),
});
function FriendRequest({ route }) {
  const [user, setUser] = useState({});
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [receiverDeviceToken, setRecevierDeviceToken] = useState();
  useEffect(async () => {
    const u = await AsyncStorage.getItem('userObj');
    const u2 = JSON.parse(u);
    setUser(u2);
    getUserDetails(route.params.userId).then((res) => {
      setRecevierDeviceToken(res.data.last_name);
      console.log('Checking', route.params.userId, user.id, res.data.last_name);
    });
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      },
    );

    const foregroundSubscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
    });
    return () => {
      backgroundSubscription.remove();
      foregroundSubscription.remove();
    };
  }, []);
  // useEffect(async () => {

  // }, []);
  const data = {
    sender_id: user.id,
    phoneNo: route.params.phone,
    receiver_id: route.params.userId,
    amount,
    desc: description,
    senderName: user.name,
    receiver_name: route.params.name,
    notificationTo: route.params.last_name,
  };
  const sendRequest = () => {
    if (amount === 0) {
      Alert.alert(
        'CHIP',
        'Please enter a valid amount',
        [

          { text: 'OK' },
        ],
      );
    } else if (description !== '') {
      if (checkAmount(amount) != null) {
        requestMoney(data).then((res) => {
          if (res.response === 'true') {
            setVisible(true);
            console.log(receiverDeviceToken, user);
            fetch('https://exp.host/--/api/v2/push/send/', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                to: receiverDeviceToken,
                data: { extraData: 'this is test notification ' },
                title: 'CHIP',
                body: `${data.receiver_name} (${user.mob_num}) has sent you a request for NAf ${amount}`,
              }),
            });
            setAmount(0);
            setDescription('');
          } else {
            Alert.alert('Nothing is sent');
          }
        });
      } else {
        Alert.alert('Please Enter Valid Amount');
      }
    } else {
      Alert.alert(
        'CHIP',
        'Please enter a Description',
        [

          { text: 'OK' },
        ],
      );
    }
  };
  const checkAmount = (s) => {
    const rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
  };

  return (
    <AUX>
      <View style={styles.mainContainer}>
        <Card>
          <Text style={styles.headingText}>
            Send request to
            {` ${data.receiver_name}`}
          </Text>
          <View style={styles.transferViewContainer}>
            <View>
              <View style={styles.imgTouch}>
                <Image
                  source={user.profile_image ? { uri: `${user.profile_image}` } : image}
                  style={styles.mainImage}
                />
              </View>
              <Text style={styles.userNameText}>{user.username}</Text>
            </View>
            <View>
              <Image
                source={arrows}
                style={styles.transferImage}
              />
            </View>
            <View>
              <View style={styles.imgTouch}>
                <Image
                  source={data.uri ? { uri: `${data.uri}` } : image}
                  style={styles.mainImage}
                />
              </View>
              <Text style={styles.userNameText}>{data.receiver_name}</Text>
            </View>
          </View>

          <View style={styles.cardMainContainer}>
            {/* Input */}
            <Input
              title="Enter amount"
              value={amount}
              autoCapitalize="none"
              onChangeText={(val) => setAmount(val)}
              keyboardType="numeric"
            />
            {/* Description */}
            <Input
              title="Description(required)"
              value={description}
              autoCapitalize="none"
              onChangeText={(val) => setDescription(val)}
            />
            <View style={styles.simpleView} />
            {/* Create Account Button */}
          </View>
        </Card>
        <View style={styles.CreateAccount}>
          <Chipbutton
            text="PROCEED"
            customStyle={styles.Createbutton}
            customText={styles.CreateAccountText}
            testID="button"
            onPress={sendRequest}
            activeOpacity={0.7}
          />
        </View>
      </View>
      {visible && (
        <ChipPaymentModal
          heading="Completed"
          image
          message="Request Completed to"
          phone={data.phoneNo}
          onBackdropPress={() => {
            setVisible(false);
          }}
        />
      )}
    </AUX>
  );
}
export default FriendRequest;
