import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  cardMainContainer: {
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    // justifyContent: 'center',
    marginVertical: '50%',
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
    height: 40,
    width: '65%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
});
