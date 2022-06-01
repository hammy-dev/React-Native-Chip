import {
  StyleSheet,
} from 'react-native';

import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',

  },
  circle1: { position: 'relative' },
  innerContainer: {

    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.white,
    position: 'relative',
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
  text: {
    fontSize: 40,
  },
  circle: {
    backgroundColor: Colors.white,
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',

  },
  secondContainer: {
    flex: 2,
    backgroundColor: Colors.white,

  },
  firsthalf: {
    flex: 1.5,
    backgroundColor: Colors.red,
  },
  innerHalf: { flex: 1, backgroundColor: Colors.white, alignItems: 'center' },

  outerSecond: { flex: 1.5, backgroundColor: Colors.secondContainer },
  secondHalf: { flex: 1, backgroundColor: Colors.secondContainer, zIndex: -1 },
  smallerCircle1: {
    backgroundColor: Colors.circle,
    alignSelf: 'center',
  },
  circleText: {
    color: Colors.white,
  },
  line: {
    alignSelf: 'center',
    backgroundColor: Colors.circle,
    width: '68%',
    height: 1.4,
    alignItems: 'center',
  },
  circle2: {
    backgroundColor: Colors.circle,
    alignSelf: 'center',
  },
  Container1TextConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  text1: {
    right: 10, color: Colors.circle,

  },
  text2: {
    color: Colors.signUp,
  },
  chipButton: {
    backgroundColor: Colors.header,
    justifyContent: 'center',
    width: '50%',
  },
  chipButtonContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',

  },
  image: {
    width: '80%',
    height: '80%',
  },
  imageContainer: {
    flex: 3.5,
    backgroundColor: Colors.imageContainer,
    justifyContent: 'center',
    alignItems: 'center',

  },
  IdentityText: {
    color: Colors.white,
    fontSize: 20,

  },
  secondContainer1: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: '5%',

  },
  secondContainer2: {
    flex: 1, width: '100%',
  },
  secondContainer3: {
    flex: 1, backgroundColor: Colors.button, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20,
  },

});
