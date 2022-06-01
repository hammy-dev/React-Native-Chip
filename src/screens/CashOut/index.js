import { useEffect, useState } from 'react';
import {
  Text, TouchableOpacity, View, Image, FlatList, Alert,
} from 'react-native';
import Loader from 'react-native-modal-loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
import AUX from '../../components/AUX-/index';
import image from '../../assets/addmoney/addmoney.png';
import bankImage from '../../assets/addmoney/cards.png';
import Input from '../../components/Input/Input';
import Chipbutton from '../../components/buttons/index';
import CommingSoon from '../../components/commingSoonModal';
import ChipPaymentModal from '../../components/paymentModal/index';
import { getBanksByUser, addBankdetails } from '../../services/Cashout';
import AddIcon from '../../assets/img_add_green.png';
import styles from './styles';
import Colors from '../../constants/Colors';
import commingsoonImage from '../../assets/commingsoon.png';

function CashOut({ navigation }) {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [alert, setAlert] = useState(false);
  const [bankList, setBankList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(async () => {
    const u = await AsyncStorage.getItem('userObj');
    const u2 = JSON.parse(u);
    setUser(u2);
    getBanksByUser(u2.id).then((res) => {
      if (res.response === 'true') {
        setBankList(res.data);
      }
    });
  }, []);
  const BankDetail = () => {
    const data = {

      userId: user.id,
      bankName: bankList[0].bank_name,
      amount,
      accountNum: bankList[0].account_num,
      address: '',
    };
    setSpinner(true);
    addBankdetails(data).then((res) => {
      if (res.response === 'true') {
        setSpinner(false);
        setVisible2(true);
      }
    });
  };
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <AUX bgColor="#fff">
      <KeyboardAwareScrollView>
        <Loader opacity={0.8} loading={spinner} size="small" color="black" />
        <View style={styles.rowContainer}>
          <TouchableOpacity
            testID="visible"
            onPress={() => { setVisible(true); }}
            style={styles.bankCardContainer}
          >
            <Image
              source={bankImage}
              style={styles.bankCardImage}
            />
          </TouchableOpacity>
          <View style={styles.bankCardContainerSelected}>
            <Image
              source={image}
              style={styles.bankImageContainer}
            />
            <Text style={styles.bankImageContainerText}>Bank</Text>
          </View>
        </View>
        <View style={styles.addBankContainer}>
          <Text style={styles.addBankContainerText}>Bank account</Text>
          <TouchableOpacity
            testID="navigate"
            style={styles.addBankIcon}
            onPress={() => { navigation.navigate('AddBankAccount'); }}
            activeOpacity={0.7}
          >
            <Image style={styles.addBankIconImage} source={AddIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.bankList}>
          {bankList.length
            ? (
              <FlatList
                data={bankList}
                keyExtractor={(key) => key.id.toString()}
                renderItem={
                  (item) => <BankCard details={item} />
                }
              />
            )
            : (
              <View>
                <Text> No Bank Added yet! </Text>
              </View>
            )}
        </View>

        <View style={styles.addAmountContainer}>
          <Input
            testID="input"
            style={styles.input}
            keyboardType="numeric"
            title="Add Amount"
            value={amount}
            autoCapitalize="none"
            onChangeText={(val) => setAmount(val)}
          />
        </View>

        <View style={styles.withDrawTextContainer}>
          <Text style={styles.withDrawText}>Withdraw up to NAf 1,000.- per week.</Text>
          <Text style={styles.withDrawText}>Note: Standard NAf 2.50 cash out fee applies.</Text>
        </View>
        <View>
          <Chipbutton
            text="CASH OUT"
            customStyle={styles.Createbutton}
            customText={styles.CreateAccountText}
            testID="button"
            activeOpacity={0.7}
            onPress={() => { setAlert(true); }}
          />
        </View>
      </KeyboardAwareScrollView>
      {
        visible
        && (
          <CommingSoon
            text={(
              <View>
                <Text style={styles.header}>This Feature Is Temporarily Unavailable</Text>
                <Image source={commingsoonImage} style={styles.imageSettings} />
                <Text style={styles.para}>
                  Credit Card cashout are temporarily unavailable due to maintenance

                </Text>
              </View>
            )}
            button={(
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.closeModal}
                  activeOpacity={0.7}
                  testID="back"
                  onPress={() => { toggle(); }}
                >
                  <Text style={styles.closeModalText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )
      }
      {
        alert
        && Alert.alert(
          '',
          `Transfer may take 3-4 business days. All transfers are subject to review and could be delayed if we identify an issue will the account 
                    `,
          [
            {
              text: 'No',
              style: 'cancel',
              onPress: () => { setAlert(false); },
            },
            { text: 'Yes', onPress: () => { setAlert(false); BankDetail(); } },
          ],
        )
      }
      {
        visible2 && (
          <ChipPaymentModal
            heading="Completed"
            image
            message="Details added successfully"
            onBackdropPress={() => { setVisible2(false); }}
          />
        )
      }
    </AUX>

  );
}
function BankCard(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const data = props;
  return (
    <View style={styles.bankContiner}>
      <Text style={styles.bankContainerTextAlignment}>{data.details.item.logo}</Text>
      <View>
        <Text>{data.details.item.bank_name}</Text>
        <Text style={styles.bankFontWeight}>
          BANK******************
          {data.details.item.account_num.slice(-4)}
        </Text>
      </View>

      <Checkbox
        disabled={false}
        value={toggleCheckBox}
        testID="checkbox"
        onValueChange={(newValue) => {
          setToggleCheckBox(newValue);
        }}
        style={styles.checkbox}
        color={toggleCheckBox ? Colors.lightGreen : Colors.lightGrey}
      />

    </View>
  );
}
export default CashOut;
