import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',

  },
  smallCircle: {
    backgroundColor: Colors.circle,
    alignSelf: 'center',

  },
  smallCircle2: {

    backgroundColor: Colors.white,
    alignSelf: 'center',

  },
  line: {
    alignSelf: 'center',
    backgroundColor: Colors.signUp,
    width: '67.5%',
    height: 1.4,
    alignItems: 'center',

  },
  circle1: { position: 'relative' },
  innerContainer: {

    flex: 1,
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
    backgroundColor: Colors.white,
  },
  circleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Uploadbutton: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  circle: {
    backgroundColor: Colors.white,
    width: 140,
    height: 142,
    borderRadius: 70,
    justifyContent: 'center',
    zIndex: 1,
    alignItems: 'center',
  },
  secondContainer: {
    flex: 3,
    backgroundColor: Colors.white,
    padding: 10,

  },
  firsthalf: {
    flex: 1.5,
    backgroundColor: Colors.red,
  },
  innerHalf: { flex: 1, backgroundColor: Colors.white, alignItems: 'center' },

  outerSecond: { flex: 1.5, backgroundColor: Colors.secondContainer },
  secondHalf: { flex: 1, backgroundColor: Colors.secondContainer, zIndex: -1 },
  secondContainer1: { flex: 1, backgroundColor: Colors.white },
  secondContainer2: { flex: 4, padding: 25, backgroundColor: Colors.white },
  secondContainer3: { backgroundColor: Colors.white, flex: 2 },
  secondContainer4: { flex: 1, alignItems: 'center' },
  secondContainer5: { flex: 1, backgroundColor: Colors.secondContainer },
  secondContainer6: {
    backgroundColor: Colors.secondContainer,
    flex: 2,

  },
  secondContainer7: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  textWrap: {
    flexDirection: 'row', justifyContent: 'space-between',

  },
  uploadIdentity: {
    right: 10,
    color: Colors.circle,

  },
  signUp: {
    right: 10, color: Colors.signUp,
  },
  text: {
    fontSize: 16,
  },
  btnContainer: {
    flex: 1.3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  extranContainer: {
    flex: 1,
  },
  customStyle: {
    backgroundColor: Colors.button,
    justifyContent: 'center',
    width: '50%',

  },
  circleText1: { color: Colors.white },
  circleText2: { color: Colors.black },
  ImageUpload1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageUpload2: {
    width: 200, height: 200,
  },
});
