import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({

  // eslint-disable-next-line react-native/no-unused-styles

  // eslint-disable-next-line react-native/no-color-literals
  button: {
    marginTop: '8%',
    width: '100%',
    alignItems: 'center',
    flex: 1,

  },
  termsandCondPara: {
    width: '55%',
    color: Colors.termsFontColor,
    paddingTop: 5,
  },
  textStyleIOS: {
    color: Colors.header,
    fontSize: 14,
    marginTop: 5,

  },
  textStyleAndriod: {
    color: Colors.header,
    fontSize: 14,
    marginTop: 5,

  },
  secondView: {
    marginLeft: 10, marginTop: 40,
  },
  terms: { color: Colors.header },
  terms2: { color: Colors.header, marginLeft: 10 },
  termView: { flexDirection: 'row' },
  seprate: { marginLeft: 5, color: Colors.header },
  Email: { fontSize: 18, color: Colors.dropDownPickerText },
  EmailContainer: { paddingTop: '5%' },
  Password: { fontSize: 18, color: Colors.dropDownPickerText },
  smsText: { marginTop: 5, color: Colors.dropDownPickerText },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  home: { width: 30, height: 30 },
  CardInnerContainer: {
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '7%',
  },
  innerContainer: {
    width: '90%',
    height: 430,
    flex: 4,
  },
  text: { fontSize: 16, color: Colors.header },
  text2: { fontSize: 16 },
  customStyle: {
    backgroundColor: Colors.header, justifyContent: 'center', width: '65%',
  },
  textcontainerStyle: { backgroundColor: Colors.cardBackground },
  codeText: {
    marginLeft: -20,
  },
  contanierStyle: { width: '100%', backgroundColor: Colors.cardBackground, borderBottomWidth: 0.91 },
  checkbox: { width: 20, overflow: 'hidden', height: 20 },
  checkboxImg: { width: '100%', height: '100%' },
  // Modal Style
  modalView: {
    flex: 1, justifyContent: 'space-between', borderRadius: 20, borderWidth: 1, backgroundColor: Colors.white, overflow: 'hidden',
  },
  webStyle: { flex: 1 },
  modalBtnView: { flexDirection: 'row', justifyContent: 'space-between' },
  btnView: {
    width: '50%', height: 60, justifyContent: 'center', alignItems: 'center',
  },

});
