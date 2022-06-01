import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({

  // eslint-disable-next-line react-native/no-unused-styles

  // eslint-disable-next-line react-native/no-color-literals

  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //   paddingTop:'5%',
    width: '80%',
    backgroundColor: Colors.yellow,
    height: '100%',
  },
  // mainContanier: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: Colors.red,

  //   alignItems: 'center',
  // },
  mainContanier: {
    width: '100%', height: '100%', alignItems: 'center', marginTop: '7%',

  },
  secondContainer: {
    width: '90%', height: '70%',

  },
  cardInnerContainer: { height: '100%' },

  textContainer: { flex: 1 },
  tinyLogo: { width: '100%', height: '100%', resizeMode: 'contain' },
  text: {
    textAlign: 'center',
    color: Colors.dropDownPickerText,
  },
  ButtonContainer: {
    marginTop: '8%', width: '100%', alignItems: 'center',
  },
  chipButton: {
    backgroundColor: Colors.button,
    justifyContent: 'center',
    width: '50%',
  },
  ImageBackgroundContainer: {
    flex: 5, marginTop: '1%',
  },
  Image: {
    flex: 1, justifyContent: 'center',
  },
  customStyle: {
    backgroundColor: Colors.button,
    justifyContent: 'center',
    width: '50%',
  },
});
