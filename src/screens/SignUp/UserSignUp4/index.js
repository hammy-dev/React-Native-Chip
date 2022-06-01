import {
  View, Text, TextInput, Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Loader from 'react-native-modal-loader';
import moment from 'moment';
import Chipbutton from '../../../components/buttons/index';
import Card from '../../../components/Cards';
import AUX from '../../../components/AUX-';
import SimpleInput from '../../../components/Input/Input';
import { otp } from '../../../services/UserService';
import styles from './styles';

function UserSignUp4({ navigation, route }) {
  const data = route.params;
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const [date, setDate] = useState(moment(new Date()).format('DD-MM-YY'));
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [items, setItems] = useState([
    { label: 'ID', value: 'ID' },
    { label: 'passport', value: 'passport' },
    { label: 'Driver License', value: 'Driver License' },
  ]);

  useEffect(() => {
    // console.log('this is countru code',countrycode)
    if (lastName.length > 0 && firstName.length > 0) {
      // setEnable(true);
    } else {
      // setEnable(false);
    }
  }, [lastName]);

  const otpReq = () => {
    setSpinner(true);
    otp(data).then(((res) => {
      data.otp = res.otp;
      setSpinner(false);
      navigation.navigate('OTP', data);
    })).catch(() => { });
    data.first_name = firstName;
    data.last_name = lastName;
  };
  return (

    <AUX>
      {/* <KeyboardAwareScrollView> */}
      <Loader opacity={0.8} loading={spinner} size="small" color="black" />
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Card Cardstyle={10}>
            <View style={styles.CardInnerContainer}>
              <View style={styles.CardInner2Conatainer}>
                <Text style={styles.LastNameText}>First Name</Text>
                <SimpleInput title="First Name" onChangeText={setfirstName} />
              </View>
              <View style={Platform.OS === 'ios' ? styles.textStyleIOS : styles.textStyleAndriod}>
                <Text style={styles.LastNameText}>Last Name</Text>
                <SimpleInput title="Last Name" onChangeText={setlastName} />
              </View>
              <View style={Platform.OS === 'ios' ? styles.textStyleIOS : styles.textStyleAndriod}>
                <View style={styles.birthDateContainer}>
                  <Text style={styles.birthDateText}>BirthDate</Text>
                  <DatePicker
                    style={styles.datePickerStyle}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    // minDate="01-01-2016"
                    // maxDate="01-01-2019"
                    confirmBtnText="Done"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        // display: 'flex',
                        // position: 'relative',
                        // alignSelf: '',
                        // left: 0,
                        // top: 4,
                        // marginLeft: 0,
                      },
                      dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-start',
                      },
                      datePicker: {
                        backgroundColor: 'grey',
                        opacity: 0.8,
                        color: 'black',
                      },
                      btnTextConfirm: { color: 'black', fontWeight: 'bold' },
                    }}
                    onDateChange={(d) => {
                      setDate(d);
                    }}
                  />
                </View>
              </View>
              <View style={styles.IdentityTypeContainer}>
                <Text style={styles.IdentityText}>Identification Type</Text>
              </View>
              <View style={styles.dropDownPickerContainerMain}>
                <View style={styles.dropDownPickerContainer}>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.dropDownPicker}
                    textStyle={styles.dropDownPickerText}
                  />
                </View>
                <View style={styles.idNumberContainer}>
                  <View>
                    <TextInput
                      style={styles.SimpleText}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholder="ID Number"
                      secureTextEntry={false}
                      placeholderTextColor="#9e9e9e"
                    // value={idNumber.id.toString()}
                    // onChangeValue={val => setIDNumber({  val })}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.button}>
          <Chipbutton
            testID="button"
            text="Continue"
            customStyle={styles.chipButton}
            customText={{ fontSize: 22 }}
            // disabled={!enable}
            onPress={() => {
              setSpinner(true);
              otpReq();
            }}
          />
        </View>
        <View />
      </View>
      {/* </KeyboardAwareScrollView> */}
    </AUX>
  );
}
// #9e9e9e
export default UserSignUp4;
