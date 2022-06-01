import {
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  // eslint-disable-next-line react-native/no-unused-styles
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipImage: {
    height: '25%', justifyContent: 'center', width: '100%', alignItems: 'center',

  },
  LoginCard: { width: '100%', justifyContent: 'center', alignItems: 'center' },
  imageText: {
    fontSize: 30,
    color: Colors.lightBlack,
    paddingBottom: '5%',
    fontWeight: 'bold',
  },
  innerContainer: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  mainContanier: {
    width: '100%', height: '100%',
  },
  tinyLogo: { width: '100%', height: '100%', resizeMode: 'contain' },
});
