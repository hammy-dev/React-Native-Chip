import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({

  innerContainer1: {
    padding: 15,
    //   height: 'auto',
    borderRadius: 20,
    borderColor: Colors.card,
    backgroundColor: Colors.white,
    width: '80%',
    alignItems: 'center',
    height: 350,
  },
  card: {
    width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',
  },
  profileView: {
    width: 70, height: 70, borderRadius: 35, backgroundColor: Colors.grey, justifyContent: 'center', alignItems: 'center', overflow: 'hidden',
  },
  profileImage: { width: 70, height: 70 },
  textView1: { alignItems: 'center' },
  Naf: {
    marginTop: 10, fontWeight: 'bold', fontSize: 19, textAlign: 'center',
  },
  Received: { marginTop: 5, color: Colors.grey },
  secondContainer: {
    borderRadius: 10, borderColor: Colors.containerBorder, borderWidth: 1.5, width: '95%', height: 150, marginTop: 30,
  },
  innerContainer: {
    flex: 1, borderBottomWidth: 0.5, borderColor: Colors.containerBorder, flexDirection: 'row', alignItems: 'center',
  },
  logo: { height: '80%', width: '15%' },
  data: { color: Colors.grey, marginLeft: 8, marginBottom: 10 },
  time: { color: Colors.grey, marginLeft: 8, marginBottom: 10 },
  text: { color: Colors.grey },
  text1: { color: Colors.grey, fontWeight: 'bold' },
  textView: { flex: 3, marginLeft: 8, marginTop: 10 },
});
