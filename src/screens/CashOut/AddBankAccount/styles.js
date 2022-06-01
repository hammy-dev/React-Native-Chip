import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  dropDownPickerText: {
    fontSize: 13,
    color: Colors.black,
  },
  container: {
    width: '90%', marginTop: 20, alignSelf: 'center', height: 350, flex: 1,
  },
  dropDownPicker: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomColor: Colors.dropDownPicker,
    paddingTop: 10,

  },
  dropDownPickerContainer: {
    // width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },
  dropDownContainerStyle: { backgroundColor: Colors.white, zIndex: 1000 },
  CreateAccount: {
    marginTop: -20, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative',
  },
  Createbutton: {
    alignItems: 'center',
    height: 50,
    width: '65%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  CreateAccountText: {
    color: Colors.white,
  },
});
