/* Native Imports */
import {
  View, Text, TouchableOpacity, Image, Alert,
} from 'react-native';
import { useState } from 'react';

/* Custom Component Import */
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AUX from '../../components/AUX-/index';
import Card from '../../components/Cards';
import SimpleInput from '../../components/Input/Input';
import ChipButton from '../../components/buttons/index';
import ChipPaymentModal from '../../components/paymentModal/index';
import styles from './styles';

/* Services */

import { FoundTransfer } from '../../services/Transaction';
import image from '../../assets/dummy-pic.jpg';

function AmountDetail({ route }) {
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState('');
  const [visible, setVisible] = useState(false);
  const [modalHead, setmodalHead] = useState('');
  const [modalImage, setmodalImage] = useState(false);
  const [modalMessage, setmodalMessage] = useState('');
  const [wallet, setWallet] = useState(0);

  const {
    userId, name, phone, uri,
  } = (route.params);

  const setPayment = () => {
    if (amount) {
      if (checkAmount(amount) != null) {
        if (description !== '') {
          Alert.alert(
            'PAY',
            `Are you sure you want to transfer NAf ${'\n'} ${amount} to ${phone} `,
            [
              {
                text: 'No',
                style: 'cancel',
              },
              { text: 'Yes', onPress: () => { MakeAPICall(); } },
            ],

          );
        } else {
          Alert.alert('Please Enter Description');
        }
      } else {
        Alert.alert('Please Enter Valid Amount');
      }
    } else {
      Alert.alert('Please enter your amount');
    }
  };

  const MakeAPICall = () => {
    FoundTransfer({ receiver_id: userId, amount, desc: description })
      .then(() => {
        setVisible(true);
        ModalData();
        setWallet(wallet);
        setAmount(null);
        setDescription('');
      })
      .catch(() => { });
  };

  const ModalData = () => {
    setmodalHead('Paid Successfully');
    setmodalImage(true);
    setmodalMessage('Money Successfully Sent to');
  };

  const checkAmount = (s) => {
    const rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
  };

  return (
    <AUX>
      <KeyboardAwareScrollView>
        <Text style={styles.balance}>Chip Wallet Balance</Text>
        <Text style={styles.amount}>
          {`NAf ${wallet}`}
        </Text>
        {/* User Avator */}
        <View style={styles.imgContainer}>

          <TouchableOpacity
            style={styles.imgTouch}
          >
            <Image
              source={uri ? { uri: `${uri}` } : image}
              style={styles.mainImage}
            />
          </TouchableOpacity>

          <View style={styles.imgDetails}>
            <Text style={styles.imageDetails}>{name}</Text>
            <Text>{phone}</Text>
          </View>
        </View>
        {/* User Card */}
        <View style={styles.cardMainContainer}>
          <Card borderRadious={20}>
            <SimpleInput
              testID="amount"
              marginTop={12}
              lineColor="gray"
              title="NAf"
              value={amount}
              onChangeText={(taxamount) => setAmount(taxamount)}
              keyboardType="numeric"
            />
            <SimpleInput
              marginTop={25}
              lineColor="gray"
              marginBottom={35}
              title="Description"
              value={description}
              onChangeText={(textdescription) => setDescription(textdescription)}
              testID="description"
            />
          </Card>
          <ChipButton
            testID="pay"
            text="PAY"
            customStyle={styles.chipBtn}
            customText={{ color: '#ffffff' }}
            activeOpacity={0.7}
            onPress={() => { setPayment(); }}
          />
        </View>
        {visible && (
          <ChipPaymentModal
            heading={modalHead}
            image={modalImage}
            message={modalMessage}
            phone={phone}
            onBackdropPress={() => { setVisible(false); }}
          />
        )}
      </KeyboardAwareScrollView>
    </AUX>
  );
}
export default AmountDetail;
