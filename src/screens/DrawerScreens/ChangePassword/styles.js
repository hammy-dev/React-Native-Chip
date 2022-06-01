import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  cardMainContainer: {
    width: '90%',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginCard: {
    width: '100%', justifyContent: 'center', alignItems: 'center',
  },

  innerContainer: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  Createbutton: {
    alignItems: 'center',
    //   borderColor: 'black',
    borderRadius: 25,
    height: 40,
    width: '30%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  mainContanier: {
    width: '100%', height: '100%',
  },

  button: {
    marginTop: -20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardHeightHandler: {
    marginBottom: 80,
  },
  cardContainer: { paddingTop: '5%', borderColor: Colors.lightGrey, borderWidth: 2 },
});
