import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: { width: '85%', alignSelf: 'center' },
  head: { fontSize: 18, alignSelf: 'center' },
  img: {
    width: 80, height: 80, alignSelf: 'center', marginVertical: 10,
  },
  message: { textAlign: 'center', color: Colors.grey, marginTop: 10 },
  phone: { fontSize: 18, alignSelf: 'center' },
  modal: { margin: 0 },
  Image: { alignSelf: 'center' },
});
