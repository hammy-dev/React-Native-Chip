import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: { width: '95%', alignSelf: 'center', height: '60%' },
  head: {
    fontSize: 19, color: Colors.header, fontWeight: 'bold', textAlign: 'left',
  },
  message: {
    textAlign: 'left', color: Colors.red, marginTop: 10, fontWeight: 'bold', marginBottom: 10, fontSize: 16,
  },
  phone: { fontSize: 14, marginBottom: '0.5%' },
  modal: { margin: 0 },
  Image: { alignSelf: 'center' },
  item: { fontSize: 14, marginBottom: 10 },
  rowContainer: { flexDirection: 'row' },
  btnAccept: { color: Colors.red },
  btnCancel: { color: Colors.grey },
});
