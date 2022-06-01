import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  mainContainer: { backgroundColor: Colors.white, width: '100%', height: '100%' },
  textContainer: { alignSelf: 'center', color: Colors.header, padding: '5%' },
  text: {
    color: Colors.header, fontSize: 18, textAlign: 'center', marginBottom: 20,
  },
  textMobNum: { color: Colors.header, fontSize: 15, textAlign: 'center' },
  qrContainer: { alignSelf: 'center', margin: '10%' },
  actionsButtons: { alignSelf: 'center', flexDirection: 'row', margin: '10%' },
  gapper: { width: '30%' },
});
