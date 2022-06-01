import { View, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AUX from '../../../components/AUX-/index';
import Card from '../../../components/Cards/index';
import Input from '../../../components/Input/Input';
import Chipbutton from '../../../components/buttons/index';
import styles from './styles';
import { getAllBank, addBank } from '../../../services/Cashout';
import ChipPaymentModal from '../../../components/paymentModal';

function AddBankAccount({ navigation }) {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState('');
  const [accountNumber, setaccountNumber] = useState('');
  const [address, setAddress] = useState('');
  const [routingnumber, setRoutingNumber] = useState('');
  const [bankName, setbankName] = useState('');
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const banks = [];
  useEffect(async () => {
    const u = await AsyncStorage.getItem('userObj');
    const u2 = JSON.parse(u);
    setUser(u2);
    setAmount(0);
    getAllBank()
      .then((res) => {
        if (res.response === 'true') {
          res.data.forEach((element) => {
            banks.push({ label: element.name, value: element.id });
          });
          setItems(banks);
        }
      })
      .catch((e) => { Alert.alert(e); });
  }, []);
  const addUserBank = () => {
    const data = {

      userId: user.id,
      bankName,
      amount,
      accountNum: accountNumber,
      address,
    };
    addBank(data).then((res) => {
      if (res.response === 'true') {
        setVisible(true);
        navigation.navigate('CashOut');
      }
    });
  };
  return (
    <AUX>
      <View style={styles.container}>
        <Card>
          <View style={styles.dropDownPickerContainer}>
            <DropDownPicker
              open={open}
              onSelectItem={(e) => {
                setbankName(e.label);
              }}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.dropDownPicker}
              textStyle={styles.dropDownPickerText}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </View>
          {/* Input */}
          <Input
            title="Account Number"
            value={accountNumber}
            autoCapitalize="none"
            onChangeText={(val) => setaccountNumber(val)}
          />
          <Input
            title="Address"
            value={address}
            autoCapitalize="none"
            onChangeText={(val) => setAddress(val)}
          />
          <Input
            title="Routing Number (Optional)"
            value={routingnumber}
            autoCapitalize="none"
            onChangeText={(val) => setRoutingNumber(val)}
          />
        </Card>
        <View style={styles.CreateAccount}>
          <Chipbutton
            text="SUBMIT"
            customStyle={styles.Createbutton}
            customText={styles.CreateAccountText}
            testID="button"
            activeOpacity={0.7}
            onPress={() => { addUserBank(); }}
          />
        </View>
      </View>
      {visible && (
        <ChipPaymentModal
          heading="Completed"
          image
          message="Request Completed to"
          phone="+59995163266"
          onBackdropPress={() => { setVisible(false); }}
        />
      )}
    </AUX>
  );
}

export default AddBankAccount;
