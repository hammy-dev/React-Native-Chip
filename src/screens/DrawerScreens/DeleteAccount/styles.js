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
    fontWeight: 'bold',
  },

  radioButtonContainer: {
    marginTop: '5%',
    marginLeft: '3%',
  },
  radioButtonStyle: {
    // flex: 1,
  },
  radioTextStyle: {
    flex: 7,
  },
  radioButtonInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Createbutton: {
    alignItems: 'center',
    //   borderColor: Colors.black,
    // borderRadius: 20,
    // borderWidth: 0.9,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  CreateAccountText: {
    color: Colors.white,
    fontSize: 25,
  },
  firstScreenNextButton: {
    marginTop: '90%',
    alignItems: 'center',
  },
});
