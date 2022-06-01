import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: { height: '100%', backgroundColor: Colors.white },
  innerContainer: { height: '83%' },
  webView: { height: '20%' },
  btnContainer: {
    flex: 1, justifyContent: 'flex-end', alignSelf: 'center', marginBottom: 18,
  },
  btnText: { fontSize: 20, color: Colors.header },
  loader: {
    width: 150,
    height: 150,
    backgroundColor: Colors.transparent,
  },
});
