import { useState } from 'react';
import {
  Text, View, TextInput, Alert, TouchableOpacity, Image, Platform, StatusBar,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Tooltip from 'react-native-walkthrough-tooltip';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AUX from '../../components/AUX-';
import styles from './style';
import Chipbutton from '../../components/buttons/index';
import infoIcon from '../../assets/ic_info.png';
import questionMark from '../../assets/questionMark.jpg';

// "eslint no-nested-ternary": 0;
/* eslint no-nested-ternary: "error" */

function MarchantSignUpOne({ navigation, route }) {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [name1, setName] = useState('');
  const [ccrNo1, setCcrNo] = useState('');
  const [taxNo1, setTaxNo] = useState('');
  const data = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Food & Beverages', value: '1' },
    { label: 'Supermarkets & Minimarktes', value: '2' },
    { label: 'Retail & Services', value: '3' },
    { label: 'Utilities', value: '4' },
    { label: 'Other', value: '5' },
  ]);

  const pressed = () => {
    if (name1 === '') {
      Alert.alert('Please Enter your name');
    } else if (ccrNo1 === '') {
      Alert.alert('Please enter your ccr no');
    } else if (taxNo1 === '') {
      Alert.alert('Please Enter your tax no');
    } else if (value === null) {
      Alert.alert('Please Select the type of Business');
    } else {
      // navigation.navigate('MarchantSignUpTwo', );
      navigation.navigate('InstructionID', {
        company_name: name1,
        CCRNo: ccrNo1,
        TaxID: taxNo1,
        businessType: items[Number(value) - 1].label,
        ...data,
      });
    }
  };
  return (
    <AUX>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.CompanyName}>Company Name</Text>
          <TextInput
            testID="name"
            style={styles.CompanyNameinput}
            placeholder="Company Name"
            onChangeText={setName}
          />
          <View style={styles.ccrContainer}>

            <Text style={styles.ccrNumber}>CCR NUMBER</Text>
            <Tooltip
              animated
              arrowSize={{ width: 16, height: 8 }}
              backgroundColor="rgba(0,0,0,0.1)"
              isVisible={toolTipVisible}
              content={(
                <View>
                  <Text>Chamber of Commerce</Text>
                  <Text>Registration Number</Text>
                </View>
              )}
              placement="bottom"
              testID="visibleEnable"
              onClose={() => setToolTipVisible(false)}
              topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
            >
              <TouchableOpacity
                onPress={() => setToolTipVisible(true)}
                activeOpacity={0.6}
                style={styles.infoContainer}
              >
                <Image source={infoIcon} style={styles.infoImg} />
              </TouchableOpacity>
            </Tooltip>
          </View>
          <TextInput
            testID="ccr"
            style={styles.ccrNumberinput}
            placeholder="CCR NUMBER"
            onChangeText={setCcrNo}
          />

          <Text style={styles.taxNumber}>TAX ID/Crib Number</Text>
          <TextInput
            testID="tax"
            style={styles.taxNumberinput}
            placeholder="TAX ID/Crib Number"
            onChangeText={setTaxNo}
          />
          <View style={styles.mainDropDownPickerContainer}>
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
            <TouchableOpacity
              testID="navigate"
              onPress={() => { navigation.navigate('MerchantBusinessInfo'); }}
              activeOpacity={0.6}
              style={styles.dropDownInfoContainer}
            >
              <Image source={questionMark} style={styles.dropDownInfoImg} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity testID="merchantTwo" onPress={() => { navigation.navigate('MarchantSignUpTwo'); }}>
            <Text style={styles.bottomText}>My Company is not registered</Text>
          </TouchableOpacity>
        </View>
        <Chipbutton
          testID="button"
          text="NEXT"
          customStyle={styles.SignupUserButton}
          customText={styles.SignupUserText}
          onPress={() => { pressed(); }}
          activeOpacity={0.7}
        />
      </KeyboardAwareScrollView>
    </AUX>

  );
}

export default MarchantSignUpOne;
