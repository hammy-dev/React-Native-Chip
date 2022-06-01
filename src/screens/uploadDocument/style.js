import {
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  screenContainer: { backgroundColor: Colors.white },
  mainCircleContainer: {

    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 8,

  },
  circleOne: {
    width: '15%',
    height: '50%',
    marginTop: 80,
    marginLeft: 40,
    // backgroundColor: Colors.white,
    borderRadius: 70,
    borderWidth: 1,
    backgroundColor: Colors.merchantCircle,
    borderColor: Colors.merchantCircle,

  },
  circleTwo: {
    width: '15%',
    height: '50%',
    marginTop: 80,
    marginLeft: 2,
    backgroundColor: Colors.white,
    borderRadius: 70,
    borderWidth: 1,
  },
  circleThree: {
    width: '15%',
    height: '50%',
    marginTop: 80,
    marginLeft: 1,
    backgroundColor: Colors.white,
    borderRadius: 70,
    borderWidth: 1,
  },
  circleOneText: {
    marginTop: 17,
    marginLeft: 25,
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
  },
  circleTwoText: {
    marginTop: 17,
    marginLeft: 25,
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
  circleThreeText: {
    marginTop: 17,
    marginLeft: 25,
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
  firstLine: {
    height: 1,
    width: 65,
    backgroundColor: Colors.black,
    marginTop: 115,
  },
  secondLine: {
    height: 1,
    width: 65,
    backgroundColor: Colors.black,
    marginTop: 115,
  },
  instructionTextContainer: {
    marginTop: 25,
    marginLeft: 40,
  },
  instructionText: {
    fontSize: 17,
    color: Colors.merchantCircle,
    // fontWeight:'bold'
  },
  uploadTextContainer: {
    marginTop: -22,
    marginLeft: 150,
  },
  uploadText: {
    fontSize: 17,
    color: Colors.black,
    // fontWeight:'bold'
  },
  signupTextContainer: {
    marginTop: -22,
    marginLeft: 310,
  },
  signupText: {
    fontSize: 17,
    color: Colors.black,
    // fontWeight:'bold'
  },
  Cardcircle: {
    width: '55%',
    height: '50%',
    marginLeft: -2,
    borderRadius: 120,
    backgroundColor: Colors.white,
    marginTop: -15,

  },

  billPayment: {
    width: '90%',
    backgroundColor: Colors.billPayment,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 120,
    height: 350,

  },

  billtransaction: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 120,
  },
  SignupUserButton: {
    backgroundColor: Colors.button,
    borderRadius: 30,
    width: 200,
    height: 60,
    marginTop: 70,
    marginLeft: 85,

  },
  SignupUserText: {
    paddingTop: 16,
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
  },
  ButtonContainer: {
    width: '100%',
    height: '100%',
  },
  textboxOne: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 25,
  },
  textboxTwo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 1,
    marginLeft: 65,
  },

});
