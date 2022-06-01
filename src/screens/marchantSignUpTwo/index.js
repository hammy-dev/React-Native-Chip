import {
  Text, View, TextInput, TouchableOpacity, Image,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AUX from '../../components/AUX-';
import styles from './style';
import Chipbutton from '../../components/buttons/index';
import questionMark from '../../assets/questionMark.jpg';

function MarchantSignUpTwo({ navigation }) {
  // const data = route.params;
  const data = {};
  const [companyName, setCompanyName] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Type of Business', value: '1' },
    { label: 'Food & Beverages', value: '2' },
    { label: 'Supermarkets & Minimarktes', value: '3' },
    { label: 'Retail & Services', value: '4' },
    { label: 'Utilities', value: '5' },
    { label: 'Other', value: '6' },
  ]);

  const nav = () => {
    if (companyName !== '') {
      data.company_name = companyName;
      navigation.navigate('InstructionID', data);
    }
  };
  return (

    <AUX>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.CompanyName}>Company Name/Full Name</Text>
          <TextInput
            testID="input"
            style={styles.CompanyNameinput}
            placeholder="Company Name/Full Name"
            onChangeText={setCompanyName}
          />
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
            <TouchableOpacity
              testID="navigate"
              onPress={() => { navigation.navigate('MerchantBusinessInfo'); }}
              activeOpacity={0.6}
              style={styles.dropDownInfoContainer}
            >
              <Image source={questionMark} style={styles.dropDownInfoImg} />
            </TouchableOpacity>
          </View>
        </View>
        <Chipbutton text="CONTINUE" customStyle={styles.ContinueUserButton} customText={styles.ContinueUserText} testID="button" onPress={() => { nav(); }} />
      </KeyboardAwareScrollView>
    </AUX>

  );
}

export default MarchantSignUpTwo;
