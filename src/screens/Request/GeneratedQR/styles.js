import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({

  CreateAccountText: {
    color: Colors.white,
  },
  Createbutton: {
    alignItems: 'center',
    height: 60,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
    marginTop: 20,
    borderRadius: 18,
  },
  secondContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center', width: '85%', alignSelf: 'center',
  },
  title: { flexDirection: 'row', marginBottom: 10 },
  head: { fontSize: 16 },
  amount: { fontSize: 16, marginLeft: 10 },
  divider: { height: 1, width: '100%', backgroundColor: Colors.grey },
  desp: { fontSize: 16, marginTop: 50, flex: 1 },
  flex: { flex: 1 },
  flex2: {
    flex: 1, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center',
  },

});
