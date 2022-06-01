import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({

  // eslint-disable-next-line react-native/no-unused-styles

  // eslint-disable-next-line react-native/no-color-literals
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.signUp4,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: Colors.signUp41,
    marginBottom: 5,
  },
  button: {
    marginTop: '8%',
    width: '100%',
    alignItems: 'center',
  },
  textStyleIOS: {
    paddingTop: '6%',

  },
  textStyleAndriod: {
    paddingTop: '5%',
  },
  dropDownPickerContainer: { width: '50%' },
  dropDownPicker: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomColor: Colors.dropDownPicker,
    paddingTop: 15,

  },
  birthDateText: { fontSize: 18 },
  LastNameText: {
    fontSize: 18,
  },
  datePickerIcon: {
    right: 25,
    justifyContent: 'center',
  },
  chipButton: {
    backgroundColor: Colors.header,
    justifyContent: 'center',
    width: '65%',

  },
  birthDateContainer: {
    borderWidth: 1,
    borderBottomColor: Colors.birthDateContainer,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  dropDownPickerText: {
    fontSize: 13,
    color: Colors.dropDownPickerText,
  },
  dropDownPickerContainerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  secondView: {
    marginLeft: 10, marginTop: 20,
  },
  Email: {
    fontSize: 18,
    color: Colors.dropDownPickerText,
  },
  EmailContainer: { paddingTop: '5%' },
  Password: {
    fontSize: 18,
    color: Colors.dropDownPickerText,
  },
  smsText: { marginTop: 5, color: Colors.dropDownPickerText },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardInnerContainer: {
    height: '100%',
  },
  CardInner2Conatainer: { paddingTop: 3 },
  mainContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: '7%',
  },
  innerContainer: { width: '90%', height: '72%' },
  SimpleText: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.dropDownPickerText,
    width: '100%',
    height: 25,
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 7,
  },
  idNumberContainer: {
    width: '50%',
    marginTop: 25,

  },
  birthDate: {
    flexDirection: 'row',
  },
  birthDateInput: {
    width: '100%',
    paddingBottom: 5,
    paddingTop: 5,
  },
  simpleInput: {
    width: '100%',
  },
  IdentityTypeContainer: {
    marginTop: 10,
  },
  IdentityText: {
    fontSize: 19,
    color: Colors.birthDateContainer,

  },
  datePickerStyle: {
    width: '100%',
  },
});
