import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: { marginHorizontal: '10%', marginTop: 40 },
  header: { fontSize: 14, alignSelf: 'center', color: Colors.grey },
  innerContainer: { marginVertical: 8 },
  headerText: {
    borderBottomWidth: 1,
    width: 150,
    fontSize: 18,
    color: Colors.header,
    borderBottomColor: Colors.grey,
  },
  headerText2: { width: 240 },
  headerText3: { width: 140 },
  utilities: { width: 65 },
  others: { width: 47 },
  body: { marginVertical: 10 },
});
