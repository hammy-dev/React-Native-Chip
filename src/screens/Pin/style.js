import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center',
  },
  headingText: {
    paddingTop: 24,
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 28,
  },
  subHeadingText: {
    paddingBottom: 48,
    color: Colors.black,
    fontSize: 18,
  },
  buttonAreaStyle: {
    marginTop: '10%',
    marginHorizontal: '20%',
  },
  inputAreaStyle: {
    marginBottom: 20,
  },
  inputViewEmptyStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.header,
  },
  inputViewFilledStyle: {
    backgroundColor: Colors.header,
  },
  buttonViewStyle: {
    borderWidth: 1,
    borderColor: Colors.header,
  },
  buttonTextStyle: {
    color: Colors.black,
  },
  forgotPinStyle: { color: Colors.linkColor, fontSize: 17, marginTop: 30 },
});
