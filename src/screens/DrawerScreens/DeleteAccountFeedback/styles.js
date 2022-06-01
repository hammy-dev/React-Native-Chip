import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  innerContainer: {
    marginTop: '5%',
    marginLeft: '3%',
  },
  textAreaNote: {
    fontSize: 18,
    textAlign: 'center',
  },
  radioButtonContainer: {
    marginTop: '5%',
    marginLeft: '3%',
  },
  radioButtonInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    margin: 20,
  },
  Createbutton: {
    alignItems: 'center',
    margin: 30,
    height: 50,
    width: '45%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  CreateAccountText: {
    color: Colors.white,
  },
  firstScreenNextButton: {
    marginTop: '5%',
    alignItems: 'center',
  },
  textAreaContainer: {
    borderColor: Colors.grey,
    margin: '5%',
    height: '40%',
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    // padding: 5,
  },
  textArea: {
    width: '100%',
    textAlignVertical: 'top',
    fontSize: 18,
    padding: 10,

  },
});
