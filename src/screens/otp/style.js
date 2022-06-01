import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  topText: {
    fontSize: 25,
    color: Colors.black,
    marginLeft: 110,
    fontWeight: 'bold',
    marginTop: 60,

  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,

  },
  middleText: {
    fontSize: 21,
    color: Colors.otpText,
    // marginLeft: 50,
    // marginTop: 20,

  },
  numberText: {
    fontSize: 21,
    color: Colors.black,
    // marginLeft: 150,
    // marginTop: 6,
    fontWeight: 'bold',

  },
  otpContainer: {
    marginHorizontal: 40,
    marginTop: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.otpText,
    borderWidth: 1.8,
    marginLeft: 10,
  },
  otpText: {
    fontSize: 25,
    color: Colors.black,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  bottomText: {
    fontSize: 19,
    color: Colors.otpText,
    marginLeft: 55,
    marginTop: 20,
  },
  bottomResendText: {
    color: Colors.header,
    fontWeight: 'bold',
    marginHorizontal: 50,
  },
  mainContainer: {
    flex: 1, flexDirection: 'column', alignItems: 'center',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
  },

});
