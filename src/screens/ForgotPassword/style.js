import {
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  cardMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipImage: {
    height: '25%', justifyContent: 'center', width: '100%', alignItems: 'center',

  },
  LoginCard: { width: '100%', justifyContent: 'center', alignItems: 'center' },
  // eslint-disable-next-line react-native/no-color-literals
  imageText: {
    fontSize: 30,
    color: 'black',
    paddingBottom: '5%',
    fontWeight: 'bold',
  },
  detailsText: {
    width: 200,
    color: Colors.forgetPasswordDetailsText,
    paddingBottom: '5%',
    textAlign: 'center',

  },
  innerContainer: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  emailInput: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
    borderColor: Colors.forgetPasswordEmailInput,
  },
  Createbutton: {
    alignItems: 'center',
    //   borderColor: 'black',
    borderRadius: 18,
    height: 40,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  mainContanier: {
    width: '100%', height: '100%',
  },
  tinyLogo: { width: '100%', height: '100%', resizeMode: 'contain' },
  RegisterdEmail: {
    alignItems: 'center',
  },
  button: {
    marginTop: -20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

  },
});
