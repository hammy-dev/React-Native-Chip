import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  container: {

    // width: '85%',
    // height: '75%',
    marginTop: 40,
    marginHorizontal: '5%',
    backgroundColor: Colors.white,
    borderRadius: 25,

  },
  CompanyName: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 20,
    color: Colors.darkgrey,
  },
  CompanyNameinput: {
    height: 50,
    width: '80%',
    marginLeft: 30,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    fontSize: 18,

  },

  Pickercontainer: {
    marginTop: 20,
    borderBottomColor: Colors.merchantCompanyNameInput,
    borderBottomWidth: 2,
    width: 300,

    marginLeft: 30,
  },
  picker: {
    width: 300,
    color: Colors.picker,

  },
  tinyLogo: {
    resizeMode: 'contain',
    marginBottom: 5,
    width: 30,

  },
  ContinueUserButton: {
    backgroundColor: Colors.InstructionButton,
    borderRadius: 30,
    width: 150,
    height: 60,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ContinueUserText: {
    // paddingTop: 16,
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
  },
  dropDownPickerText: {
    fontSize: 13,
    color: Colors.dropDownPickerText,
    left: -8,
  },
  dropDownPicker: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomColor: Colors.dropDownPicker,
    paddingTop: 17,
    marginLeft: 30,

  },
  dropDownPickerContainer: {
    width: '80%',
    marginBottom: '60%',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  dropDownInfoContainer: {
    width: 20, height: 20, overflow: 'hidden', marginLeft: 30, marginTop: 20, borderWidth: 1, borderRadius: 11,
  },
  dropDownInfoImg: { width: '100%', height: '100%' },

});
