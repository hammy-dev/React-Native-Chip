import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    width: '90%',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seprator: {
    width: '100%',
    backgroundColor: Colors.grey,
    height: 1,
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
  text: { alignSelf: 'center' },
  contact: { alignSelf: 'center' },
  flatList: { marginBottom: 30 },
  mainView: { flex: 1 },
  image: { width: 27, height: 27 },
  QRContainer: { flex: 1, justifyContent: 'center' },
  divider: { flexDirection: 'row', alignSelf: 'center' },
  line: {
    height: 1, width: '37%', backgroundColor: Colors.black, alignSelf: 'center',
  },
  OR: { marginHorizontal: 15, fontSize: 18 },
  touch: {
    backgroundColor: Colors.header, width: '90%', alignSelf: 'center', height: 90, marginTop: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center',
  },
  QRText: { fontSize: 18, color: Colors.white, fontWeight: 'bold' },
  oader: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    backgroundColor: Colors.loaderBackground,
  },
});
