import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
// import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  mainContainer: { width: '80%', alignSelf: 'center', marginTop: 40 },
  userNameText: { textAlign: 'center' },
  headingText: { alignSelf: 'center', marginVertical: 20, fontSize: 18 },
  imgTouch: {
    width: 70, height: 70, borderRadius: 35, overflow: 'hidden', borderWidth: 1, borderColor: Colors.grey,
  },
  transferViewContainer: { flexDirection: 'row', justifyContent: 'space-evenly' },
  mainImage: {
    width: '100%', height: '100%',
  },
  transferImage: {
    width: 50, height: 50, marginTop: 10,
  },
  simpleView: {
    width: '100%', height: 1, backgroundColor: Colors.white, marginTop: 30,
  },
  CreateAccountText: {
    color: Colors.white,
  },
  CreateAccount: {
    marginTop: -20, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative',
  },
  Createbutton: {
    alignItems: 'center',
    height: 45,
    width: '65%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },

});
