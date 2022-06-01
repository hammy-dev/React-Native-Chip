import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  container: {
    // width: '85%',
    // height: '75%',
    // marginTop: '17%',
    // marginLeft: '8%',
    backgroundColor: Colors.white,
    borderRadius: 25,
    // borderWidth:0.12
    marginHorizontal: '5%',
    marginTop: 40,

  },
  CompanyName: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 20,
    color: Colors.darkgrey,
  },
  CompanyNameinput: {
    // alignSelf: 'stretch',
    height: 35,
    width: '80%',
    marginLeft: 30,
    borderBottomColor: Colors.dropDownPicker,
    borderBottomWidth: 1,

  },
  ccrNumber: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 20,
    color: Colors.darkgrey,
  },
  ccrNumberinput: {
    // alignSelf: 'stretch',
    height: 35,
    width: '80%',
    marginLeft: 30,
    borderBottomColor: Colors.dropDownPicker,
    borderBottomWidth: 1,

  },
  taxNumber: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 20,
    color: Colors.darkgrey,
  },
  taxNumberinput: {
    // alignSelf: 'stretch',
    height: 35,
    width: '80%',
    marginLeft: 30,
    borderBottomColor: Colors.dropDownPicker,
    borderBottomWidth: 1,

  },
  Pickercontainer: {
    // marginTop: 20,
    borderBottomColor: Colors.dropDownPicker,
    borderBottomWidth: 1,
    width: 300,

    marginLeft: 30,
  },
  picker: {
    width: 300,
    color: Colors.picker,

  },
  bottomText: {
    marginTop: 50,
    marginLeft: 30,
    marginBottom: 130,
    fontSize: 20,
    zIndex: -1,
    elevation: -1,
    fontStyle: 'italic',
    color: Colors.button,
  },
  tinyLogo: {
    resizeMode: 'contain',
    marginBottom: 5,
    width: 30,

  },
  SignupUserButton: {
    backgroundColor: Colors.button,
    alignItems: 'center',
    borderRadius: 30,
    height: 60,
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
  },
  SignupUserText: {
    paddingTop: 16,
    fontSize: 20,
    color: Colors.white,
    // fontWeight: 'bold',
  },
  dropDownPicker: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomColor: Colors.grey,
    paddingTop: 17,
    marginLeft: 30,

  },
  dropDownPickerContainer: {
    width: '80%',
  },
  mainDropDownPickerContainer: {
    flexDirection: 'row',
    // flex: 1,
  },
  dropDownPickerText: {
    fontSize: 16,
    color: Colors.black,
    left: -8,
  },
  ccrContainer: { flexDirection: 'row' },
  infoContainer: {
    width: 18, height: 18, overflow: 'hidden', marginLeft: 10, marginTop: 24,
  },
  infoImg: { width: '100%', height: '100%' },
  dropDownInfoContainer: {
    width: 20, height: 20, overflow: 'hidden', marginLeft: 30, marginTop: 20, borderWidth: 1, borderRadius: 11,
  },
  dropDownInfoImg: { width: '100%', height: '100%' },

});
