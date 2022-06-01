import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  profileContainer: { alignSelf: 'center' },
  imgBorder: {
    width: 120, height: 120, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderColor: Colors.header,
  },
  imgInnerBorder: {
    width: 100, height: 100, borderRadius: 50, overflow: 'hidden',
  },
  img:
    {
      width: '100%', height: '100%', borderWidth: 4, borderRadius: 60, borderColor: Colors.header,
    },
  userName:
  {
    textAlign: 'center', fontSize: 18, marginTop: 12, color: Colors.header,
  },
  userEmail:
    { fontSize: 16, color: Colors.header },
  balanceContainer: {
    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginTop: 10,
  },
  balance: { fontSize: 16 },
  share: { flexDirection: 'row' },
  imggroup: { width: 22, height: 22 },
  tellfriend: {
    fontSize: 16, color: Colors.grey, alignSelf: 'center', marginLeft: 3,
  },
  listContainer: { marginTop: 15, height: '50%' },
  label: { marginLeft: -10, fontSize: 14, marginTop: -5 },
  sperator: {
    height: 1, width: '90%', backgroundColor: Colors.grey, alignSelf: 'center', marginTop: -3,
  },
  social: {
    flexDirection: 'row', marginTop: 23, justifyContent: 'center', marginBottom: 20,
  },
  fb: { width: 22, height: 22, marginRight: 20 },
  instagram: { width: 22, height: 22 },
});
