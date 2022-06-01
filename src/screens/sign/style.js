import {
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: Colors.white },
  circleContainer: {
    flex: 0.2,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  circleOne: {
    backgroundColor: Colors.uploadDocsCircleText,
    alignSelf: 'center',
  },
  circleTwo: {
    backgroundColor: Colors.uploadDocsCircleText,
    alignSelf: 'center',
  },
  circleThree: {
    backgroundColor: Colors.uploadDocsCircleText,
    alignSelf: 'center',
  },
  lineOne: {
    alignSelf: 'center',
    width: '20%',
    height: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.uploadDocsCircleText,
  },
  lineTwo: {
    alignSelf: 'center',
    width: '20%',
    height: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.green,
  },
  title: { color: Colors.white, fontSize: 20 },
  circletext: { color: Colors.white, fontSize: 20 },
  circleTextContainer: {
    flex: 0.1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: '-8%',
  },
  circleTextOne: { fontSize: 15, color: Colors.green },
  circleTextTwo: { fontSize: 15, marginRight: '2%', color: Colors.green },
  circleTextThree: { fontSize: 15, color: Colors.green },
  mainCartContainer: {
    flex: 0.525,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 20,
  },
  mainButtonsContainer: {
    backgroundColor: Colors.mainBtn,
    flex: 0.2,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flexDirection: 'row',

  },
  button1: {
    backgroundColor: Colors.btn,
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 20,

  },
  button1Text: {
    textAlign: 'center',
    marginTop: '12%',
    color: Colors.white,
    fontSize: 18,
  },
  button2: {
    backgroundColor: Colors.btn,
    width: '50%',
    height: '100%',
    borderTopRightRadius: 20,
    alignSelf: 'flex-start',

  },
  button2Text: {
    textAlign: 'center',
    marginTop: '12%',
    color: Colors.white,
    fontSize: 18,
  },
  tinyLogo: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    margin: '5%',
  },
  mainImageContainer: {
    backgroundColor: Colors.img,
    flex: 0.8,
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  activeButton1: {
    backgroundColor: Colors.btn,
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 20,
  },
  disableButton1: {
    backgroundColor: Colors.disableBtn,
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 20,
  },
  activeButton2: {
    backgroundColor: Colors.disableBtn,
    width: '50%',
    height: '100%',
    borderTopRightRadius: 20,
  },
  disableButton2: {
    backgroundColor: Colors.btn,
    width: '50%',
    height: '100%',
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    backgroundColor: Colors.white,
    flex: 0.145,
    marginTop: '1%',
    width: '100%',
    flexDirection: 'column',
  },
  insideChipButton: {
    width: '40%',
    height: '58%',
    backgroundColor: Colors.disableBtn,
    alignSelf: 'center',
    marginTop: '5%',
  },
  insideChipButtonText: {
    marginTop: '10%',
  },
});
