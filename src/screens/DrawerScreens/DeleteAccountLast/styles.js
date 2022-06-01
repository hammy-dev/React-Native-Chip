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
  headingText: {
    textAlign: 'center',
    color: Colors.grey,
  },

  radioButtonContainer: {
    marginTop: '5%',
    marginLeft: '3%',
  },
  Createbutton: {
    alignItems: 'center',
    height: 40,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  CreateAccountText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  firstScreenNextButton: {
    marginTop: '5%',
    alignItems: 'center',
    textAlign: 'center',
  },
  textView: {
    margin: '12%',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  textAreaContainer: {
    borderColor: Colors.grey,
    marginLeft: 10,
    marginRight: 10,
    width: '90%',
  },
  paragraph: {
    color: Colors.grey,
  },
  imageContainer: {
    backgroundColor: Colors.white,
    margin: 8,
    width: '5%',
    height: 'auto',
  },
  checkboxImage: { width: 20, height: 20, marginLeft: 1 },
  deleteColor: { color: Colors.red },
});
